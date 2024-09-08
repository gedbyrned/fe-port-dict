import React from 'react';
import '../index.css';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Translate Portuguese</h1>
            <textarea
                name="body"
                placeholder="Search for translation here..."
            />
        </div>
    );
}

export default Home;
