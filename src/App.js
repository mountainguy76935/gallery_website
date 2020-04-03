import React from 'react';
import { MainPage } from './pages/main-page.component';
import { Navigation } from './components/navigation/navigation.component';
import { About } from './pages/about-page.component';
import { DailyPicture } from './pages/daily-picture.component';
import { Route } from 'react-router-dom';
import { CalcApp } from './pages/calculator-page.component'
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className='App'>
      <Navigation/>
      <Route exact path='/' component = { MainPage } />
      <Route exact path='/about' component = { About } />
      <Route exact path='/daily_pic' component = { DailyPicture } />
      <Route exact path='/calculator' component = { CalcApp } />
    </div>
  );
  }
}

export default App;
