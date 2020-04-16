import React from 'react';
import { Title } from '../components/title/title.component';
import { Circles } from '../components/circles/circles.component'
import './main-page-styles.css'
import Data from '../util/data';

export const MainPage = (props) => {
    const colorLeft = ['#E99A17', '#D45717', '#d76735', '#CB303E'];
    const colorRight = ['#f2d8b3', '#8fb0a9', '#7ba247', '#55893c'];
    const [tagline, setTagline] = React.useState('');
    const [title, setTitle] = React.useState('');

    const handleHover = (val) => {
        if (val !== tagline) {
            setTagline(val.tagline)
            setTitle(val.name)
        } else {
            return 
        }
    }

    return (
        <React.Fragment>
            <Title {...props} newTitle={title}/>
            <div className="circle_list">
                <div  
                    className='leftCircle'
                    style={{
                    float: 'left'
                }}>
                    {Data.slice(0, 4).map((a, i) => {
                    return <Circles
                            picture={a}
                            color={colorLeft[i]}
                            {...props}
                            handleHover = {handleHover}
                            /> 
                })}
                </div>
                <div 
                    className='rightCircle'
                    style={{
                    float: 'right',
                    marginRight: '3%'
                }}>
                    {Data.slice(4).map((a, i) => {
                    return <Circles 
                            picture={a}
                            color={colorRight[i]}
                            {...props}
                            handleHover = {handleHover}
                            /> 
                })}
                </div>
                <div className="captions">
                    <p>{tagline}</p>
                </div>
            </div>
        </React.Fragment>
    )
}
