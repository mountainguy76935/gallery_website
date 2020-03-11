import React from 'react';
import './pic_of_the_day.styles.css';

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
                    source: data['hdurl'],
                    title: data['title'],
                    explanation: data['explanation']
                })
            })
        };

    render() {
        return (
            <div className="pic">
                <h1>NASA PICTURE OF THE DAY!</h1>
                <p>{this.state.date}</p>
                <img src={this.state.source} alt={this.state.title}/>
                <br />
                <span>{this.state.explanation}</span>
            </div>
        )
    }
}

export default PicOTheDay;