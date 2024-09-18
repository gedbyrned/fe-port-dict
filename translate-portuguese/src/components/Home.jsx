import React, { useState } from 'react';
import '../index.css';
import { translateText } from '../utils/api';

const Home = () => {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    translateText(text)
      .then(result => {
        setTranslation(result);
      })
      .catch(err => {
        console.error("Error during translation:", err);
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
        <button type="submit">Submit</button>
      </form>
      {translation && (
        <div>
          <h2>Translated Text</h2>
          <p>{translation}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
