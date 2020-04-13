import React from 'react';
import { Title } from '../components/title/title.component';
import { Circles } from '../components/circles/circles.component'
import './main-page-styles.css'
import Data from '../util/data';

export const MainPage = (props) => {
    const colorLeft = ['#E99A17', '#D45717', '#d76735', '#CB303E']
    const colorRight = ['#55893c', '#7ba247', '#8fb0a9', '#f2d8b3']
    return (
        <React.Fragment>
            <Title {...props}/>
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
                            /> 
                            
                })}
                </div>
            </div>
        </React.Fragment>
    )
}
