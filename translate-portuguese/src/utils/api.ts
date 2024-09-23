import axios from "axios";

// Create an axios instance with the base URL for your Django API
const translatePortugueseApi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",  // Django API base URL
    headers: {
        "Content-Type": "application/json",  
    },
});

// Function to send text to the API for translation
export const translateText = (text: string, source: string = "en", target: string = "pt") => {
    return translatePortugueseApi.post("translate/", { q: text, source: source, target: target })
        .then((response) => {
            // Ensure you're accessing the correct key from the response
            return response.data.translated_text;
        })
        .catch((err) => {
            console.error("Error occurred while translating:", err);
        });
};


export const getDailyWord = () => {
    return translatePortugueseApi.get("dailyWord/")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error("Error occurred while fetching the daily word:", error);
        });
};


