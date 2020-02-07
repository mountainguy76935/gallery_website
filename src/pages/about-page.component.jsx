import React from 'react';
import TextBox from '../components/text-box/text-box.component';
import './about-page.styles.css'

export class About extends React.Component{
    render() {
        return (
            <div className="about">
                <TextBox />
            </div>
        )
    }
}