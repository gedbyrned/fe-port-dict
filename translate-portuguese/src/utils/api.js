import axios from "axios";

// Create an axios instance with the base URL for your Django API
const translatePortugueseApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",  // Django API base URL
    headers: {
        "Content-Type": "application/json",  // Explicitly set the content type
    },
});

// Function to send text to the API for translation
export const translateText = (text) => {
    return translatePortugueseApi.post("translate/", { q: text})
        .then((response) => {
            // Ensure you're accessing the correct key from the response
            return response.data.translated_english_text;
        })
        .catch((err) => {
            console.error("Error occurred while translating:", err);
        });
};
