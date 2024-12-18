import React from 'react';
import '../styles/index.css'; 

export interface TranslationItem {
    original_text: string;
    translated_text: string;
    source_language: string;
    target_language: string;
    created_at: string;
}

export interface TranslationHistoryProps {
    history: TranslationItem[];
}

const TranslationHistory: React.FunctionComponent<TranslationHistoryProps> = ({ history }) => { // React.FunctionComponent is typescript allows to specify the type of props that your component will accept.
    return (
        <div className="translation-history-container">
            <h2>Translation History</h2>
                <ul className="translation-history-list">
                    {history.map((item, index) => (
                        <li  className="translation-history-item">
                             {item.original_text} {"/"} {item.translated_text}<br />
                        </li>
                    ))}
                </ul>
      
        </div>
    );
};

export default TranslationHistory;
