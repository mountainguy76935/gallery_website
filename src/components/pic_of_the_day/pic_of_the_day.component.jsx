import React from 'react';
import './pic_of_the_day.styles.css';
import ReactPlayer from 'react-player'

class PicOTheDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            source: '',
            title: '',
            explanation: ''
        }
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=YDJabjXMhU6AxpQSt4j3ptd34qddr8OAH4KaDQfK')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    date: data['date'],
                    source: data['url'],
                    title: data['title'],
                    type: data['media_type'],
                    explanation: data['explanation']
                })
            })
        };

    render() {
        const { date, source, title, type, explanation } = this.state;
        const sources = source;
        const dates = () => {
            let result = new Date().getMonth();
            switch(result) {
                case 0: 
                    result="January"
                    break;
                case 1: 
                    result="February"
                    break;
                case 2:
                    result = "March";
                    break;
                case 3:
                    result = "April";
                    break;
                case 4: 
                    result="May"
                    break;
                case 5: 
                    result="June"
                    break;
                case 6:
                    result = "July";
                    break;
                case 7:
                    result = "August";
                    break;
                case 8: 
                    result="September"
                    break;
                case 9: 
                    result="October"
                    break;
                case 10:
                    result = "November";
                    break;
                case 11:
                    result = "December";
                    break;
                default: 
                    result="";
            }
            return result+" "+(new Date().getDate())+", "+date.split('-')[0];
        }
             
        return (
            <div className="pic">
                <h1>NASA PICTURE OF THE DAY!</h1>
                <p>{dates()}</p>
                <h3>{title}</h3>
                {
                type === 'image' ? <img className= "nasa-img" src={sources} alt={title}/>
                    : ReactPlayer.canPlay(sources) ? 
                    <ReactPlayer 
                        className = 'nasa-vid' 
                        url={sources} 
                        width='50%'
                    />
                    : 'loading...'}
                <br />
                <p className="pic-text">{explanation}</p>
                <h6>*I incorporated this feature using NASA's 'picture of the day' API* </h6>
            </div>
        )
    }
}

export default PicOTheDay;