import React from 'react';
import { Title } from '../components/title/title.component';
import { Randomize } from '../components/randomize/randomize.component';

export const MainPage = (props) => (
    <div>
        <Title />
        <Randomize />
        <a className="contact" href="mailto:stoll33david@gmail.com?subject=website help">Send me an email!</a>
    </div>
)
