import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import { getDailyWord } from '../utils/api';

interface DailyWord {
    portuguese_word: string;
    english_word: string;
    english_definition: string;
}

const initialWord: DailyWord = {
    portuguese_word: '',
    english_word: '',
    english_definition: ''
};

const WordOfDay = () => {
    const [word, setWord] = useState<DailyWord>(initialWord);

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
            
                <>
                    <div>
                        <strong>Portuguese:</strong> {word.portuguese_word}
                    </div>
                    <div>
                        <strong>English:</strong> {word.english_word}
                    </div>
                    <div>
                        <strong>Definition:</strong> {word.english_definition}
                    </div>
                </>
        </section>
    );
};

export default WordOfDay;
