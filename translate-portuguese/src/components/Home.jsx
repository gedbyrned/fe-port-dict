import React, { useState } from 'react';
import '../index.css';
import { translateText } from '../utils/api';
import WordOfDay from './WordOfDay';

const Home = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [sourceLang, setSourceLang] = useState('en'); // default source language
  const [targetLang, setTargetLang] = useState('pt'); // default target language


  const handleSubmit = (event) => {
    event.preventDefault();

    translateText(text, sourceLang, targetLang)
      .then(result => {
        setTranslation(result);
      })
      .catch(error => {
        console.error("Error during translation:", error);
      });
  };

  return (
    <div>
      <h1>Welcome to Translate Portuguese</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          name="body"
          placeholder="Search for translation here..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
          <br />

          <label>Translate From: </label>
          <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
          </select>

          <label>Translate To: </label>
          <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
            <option value="pt">Portuguese</option>
            <option value="en">English</option>
          </select>

          <br />
        <button type="submit">Submit</button>
      </form>
      {translation && (
        <div>
          <h2>Translated Text</h2>
          <p>{translation}</p>
        </div>
      )}
      <WordOfDay /> 
    </div>
  );
};

export default Home;
