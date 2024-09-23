import React, { useEffect, useState } from 'react';
import '../styles/index.css';
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
        <section className="word-of-day">
            <h1>Word of the Day</h1>
            <div>
                <strong>Portuguese:</strong> {word.portuguese_word}
            </div>
            <div>
                <strong>English:</strong> {word.english_word}
            </div>
            <div>
                <strong>Definition:</strong> {word.english_definition}
            </div>
        </section>
    );
};

export default WordOfDay;

