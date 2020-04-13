import React from 'react';
import TextBox from '../components/text-box/text-box.component';

export class About extends React.Component{
    render() {
        return (
            <React.Fragment>
                <div className="about"
                    style={{
                        paddingTop: '10%'
                    }}>
                    <TextBox />
                </div>
            </React.Fragment>
        )
    }
}