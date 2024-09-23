import React, { useState } from 'react';
import '../styles/index.css';
import { translateText } from '../utils/api';
import WordOfDay from './WordOfDay';

const Home = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isEnglishToPortuguese, setIsEnglishToPortuguese] = useState(true); // Default to English to Portuguese

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sourceLang = isEnglishToPortuguese ? 'en' : 'pt';
    const targetLang = isEnglishToPortuguese ? 'pt' : 'en';

    translateText(text, sourceLang, targetLang)
      .then(result => {
        setTranslation(result);
      })
      .catch(error => {
        console.error("Error during translation:", error);
      });
  };

  return (
    <main className="home-container">
      <section className="translation-form">
        <form onSubmit={handleSubmit}>
          <textarea
            name="body"
            placeholder="Type text here to translate..."
            value={text}
            onChange={(event) => setText(event.target.value)}
            rows={4}
            className="text-area"
          />
          <br />

          <div className="language-toggle">
            <label className="slider-label">
              <input
                type="checkbox"
                checked={isEnglishToPortuguese}
                onChange={() => setIsEnglishToPortuguese(!isEnglishToPortuguese)}
                className="slider-checkbox"
              />
              <span className="slider"></span>
              <span className="slider-text">{isEnglishToPortuguese ? 'English to Portuguese' : 'Portuguese to English'}</span>
            </label>
          </div>

          <button type="submit" className="translate-button">Translate</button>
        </form>

        {translation && (
          <article className="translation-result">
            <h2 className="translation-title">Translated Text</h2>
            <p className="translation-text">{translation}</p>
          </article>
        )}
      </section>

      <WordOfDay /> 
    </main>
  );
};

export default Home;
