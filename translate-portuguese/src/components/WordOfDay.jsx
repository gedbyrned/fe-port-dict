import React, { useEffect, useState } from 'react';
import '../index.css';
import { getDailyWord } from '../utils/api';

const WordOfDay = () => {
    const [word, setWord] = useState("");

    useEffect(() => {
        getDailyWord()
            .then(dailyWord => {
                setWord(dailyWord);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);  

    return (
        <div>
            <h1>Word of the Day</h1>
            <p><strong>Portuguese:</strong> {word.portuguese_word}</p>
            <p><strong>English:</strong> {word.english_word}</p>
            <p><strong>Definition:</strong> {word.english_definition}</p>
        </div>
    );
};

export default WordOfDay;
