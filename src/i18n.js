// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            title: "Know about leaf disease and take necessary care",
            takePicture: "Take a Picture",
            uploadPicture: "Upload Picture",
            detectedDisease: "Detected Disease",
            confidence: "Confidence",
            detectionFailed: "Detection Failed!",
            diagnosis: "Diagnosis",
            solution: "Solution",
        },
    },
    kn: {
        translation: {
            title: "ಎಲೆ ರೋಗದ ಬಗ್ಗೆ ತಿಳಿದುಕೊಂಡು ಅಗತ್ಯ ಕಾಳಜಿ ವಹಿಸಿ",
            takePicture: "ಚಿತ್ರ ತೆಗೆದುಕೊಳ್ಳಿ",
            uploadPicture: "ಚಿತ್ರವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
            detectedDisease: "ಕಾಣಿಸಲಾದ ಕಾಯಿಲೆ",
            confidence: "ನಂಬಿಕೆ",
            detectionFailed: "ಕಾಣಿಕೆಯಲ್ಲಿ ವಿಫಲವಾಗಿದೆ!",
            diagnosis: "ರೋಗ",
            solution: "ಪರಿಹಾರ",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
