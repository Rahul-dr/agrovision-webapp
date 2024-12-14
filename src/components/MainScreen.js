import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Dropzone from 'react-dropzone';  // Importing Dropzone correctly
import '../styles/MainScreen.css';

import takeAPhoto from '../assets/Natural Food.png';
import diagnos from '../assets/Pass Fail.png';
import sol from '../assets/Protecting your health with natural remedies.png';
import right from '../assets/arrow right.png';
import camera1 from '../assets/camera icon.png';
import i18n from '../i18n';
import bayleaf from '../assets/Bay Leaf.png';

const MainScreen = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Function to handle language change
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    // Function to handle image upload
    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:8000/predict", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "accept_language": i18n.language,
                },
            });
            navigate("/prediction", {
                state: {
                    predictionData: response.data,
                    image: URL.createObjectURL(file),
                    language: i18n.language
                },
            });
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Error processing the image. Please try again.");
        }
    };

    return (
        <div className="main-container">
            <header className="main-header">
                <img src={bayleaf} alt="Logo" className="main-logo" />
                <h1 className="main-title">AgriVision</h1>
                <select className="language-selector" onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
                    <option value="en">English</option>
                    <option value="kn">Kannada</option>
                </select>
            </header>
            <div className="main-content">
                <h2 className="main-subtitle">{t("title")}</h2>
                <div className="steps-container">
                    <div className="step">
                        <img src={takeAPhoto} alt="Take a pic" className="step-icon" />
                        <p className="step-text">{t("takePicture")}</p>
                    </div>
                    <img src={right} alt="Right arrow" className="step-arrow" />
                    <div className="step">
                        <img src={diagnos} alt="Diagnosis" className="step-icon" />
                        <p className="step-text">{t("diagnosis")}</p>
                    </div>
                    <img src={right} alt="Right arrow" className="step-arrow" />
                    <div className="step">
                        <img src={sol} alt="Solution" className="step-icon" />
                        <p className="step-text">{t("solution")}</p>
                    </div>
                </div>
                <Dropzone onDrop={acceptedFiles => handleImageUpload(acceptedFiles[0])}>
                    {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()} className="camera-container">
                            <input {...getInputProps()} />
                            <button className="upload-button">
                                <img src={camera1} alt="Upload Pic" className="camera-icon" />
                                {t("uploadPicture")}
                            </button>
                        </div>
                    )}
                </Dropzone>
            </div>
        </div>
    );
};

export default MainScreen;
