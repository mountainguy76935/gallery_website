import React from 'react';
import './text-box.styles.css';
import AboutPics from "../../util/about";

class TextBox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            about: AboutPics
        }
    }
    render() {
        return (
        this.state.about.map(box => 
        <div className="boxes">
            <h1>{box.name}</h1>
            <img className="pix" alt={box.name} src={box.src} />
            <p className="caption">
                {box.caption}
            </p>
        </div>
        )
    )}    
}

export default TextBox;