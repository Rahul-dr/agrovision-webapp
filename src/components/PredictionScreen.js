import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/PredictionScreen.css';

const PredictionScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const { predictionData, image, language } = location.state || {};

    // Apply the language from the state
    useEffect(() => {
        i18n.changeLanguage(language).then(() => {
            console.log("Language has been set to:", i18n.language); // Confirm the language change
        });
    }, [language, i18n]);

    if (!predictionData) {
        return (
            <div className="error-container">
                <h1>{t('error')}</h1>
                <p>{t('noPredictionData')}</p>
                <button onClick={() => navigate("/home")} className="back-button">
                    {t('backToHome')}
                </button>
            </div>
        );
    }

    const productUrl = "http://example.com/recommended-products"; // Placeholder URL

    return (
        <div className="prediction-container">
            <h1>{t('detectedDisease')}</h1>
            {image && (
                <img src={image} alt={t('uploadedLeaf')} className="prediction-image" />
            )}
            <p><strong>{t('plantName')}:</strong> {t(predictionData.plant)}</p>
            <p><strong>{t('diseaseName')}:</strong> {t(predictionData.disease)}</p>
            <p><strong>{t('confidence')}:</strong> {predictionData.confidence.toFixed(2)}%</p>
            <p><strong>{t('aboutDisease')}:</strong> {t(predictionData.description)}</p>
            <p><strong>{t('treatment')}:</strong> {t(predictionData.solution)}</p>
            {predictionData.link && predictionData.link !== "No link available" && (
                <a href={productUrl} target="_blank" rel="noopener noreferrer" className="learn-more-button">
                    Recommended Products
                </a>
            )}
            <button onClick={() => navigate("/home")} className="back-button">
                {t('backToHome')}
            </button>
        </div>
    );
};

export default PredictionScreen;
