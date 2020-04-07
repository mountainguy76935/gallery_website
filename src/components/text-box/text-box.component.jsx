import React from 'react';
import './text-box.styles.css';
import AboutPics from "../../util/about";

const TextBox = () => {
    return (
    AboutPics.map(box => 
        <div className="boxes">
            <h1>{box.name}</h1>
            <p className="caption">
                {box.caption}
            </p>
            <img 
                className="pix" 
                alt={box.name} 
                src={box.src} 
            />
        </div>)
    ) 
};

export default TextBox;