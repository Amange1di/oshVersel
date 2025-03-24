import React from 'react';
import './ContentBlock.scss';

export const ContentBlock = ({ title, content }) => {
    return (
        <div className="main-content">
            {title && <h1 className="content-title">{title}</h1>}
            {content && content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="content-text">{paragraph}</p>
            ))}

            <button className="download-btn">Скачать</button>
        </div>
    );
}
