import React from 'react';
import TextBox from '../components/text-box/text-box.component';

export const About = (props) => {
    return (
        <React.Fragment>
            <div className="about"
                style={{
                    paddingTop: '10%',
                    color: props.color === '#f2d8b3' ? 'black' : 'white'
                }}>
                <TextBox />
            </div>
        </React.Fragment>
    )
}