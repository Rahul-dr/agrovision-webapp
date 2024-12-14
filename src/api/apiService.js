import axios from "axios";

// Function to upload the image and get predictions, now accepting a language parameter
export const predictPlantDisease = async (file, language = 'en') => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post("http://127.0.0.1:8000/predict", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "accept_language": language, // Now dynamically setting the language
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error during prediction API call:", error);
    throw error;
  }
};
