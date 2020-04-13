import React from 'react';
import { MainPage } from './pages/main-page.component';
import { Navigation } from './components/navigation/navigation.component';
import { About } from './pages/about-page.component';
import { DailyPicture } from './pages/daily-picture.component';
import { Route } from 'react-router-dom';
import { CalcApp } from './pages/calculator-page.component'
import './App.css';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      color: ''
    }
  }

  setColor = (val) => {
    this.setState({
      color: val
    })
  }

  render() {
    return (
        <div className='App' style={{backgroundColor: this.state.color ? this.state.color : 'black'}}>
          <Navigation/>
          <Route exact path='/' render={() => <MainPage mainColor={this.state.color} handleChange={this.setColor}/>} />
          <Route exact path='/about' component = { About } />
          <Route exact path='/daily_pic' component = { DailyPicture } />
          <Route exact path='/calculator' component = { CalcApp } />
        </div>
    );
  }
}

export default App;
