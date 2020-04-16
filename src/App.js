import React from 'react';
import { MainPage } from './pages/main-page.component';
import { Navigation } from './components/navigation/navigation.component';
import { About } from './pages/about-page.component';
import { DailyPicture } from './pages/daily-picture.component';
import { Route } from 'react-router-dom';
import { CalcApp } from './pages/calculator-page.component'
import './App.css';
import './index.css';

const App = () => {
  const [color, setColor] = React.useState('')

  const changeColor = (val) => {
    setColor(val)
  }
    return (
        <div className='App' style={{backgroundColor: color ? color : 'black'}}>
          <Navigation/>
          <Route exact path='/' render={() => <MainPage mainColor={color} handleChange={changeColor}/>} />
          <Route exact path='/about' render={() => <About color={color}/>} />
          <Route exact path='/daily_pic' component = { DailyPicture } />
          <Route exact path='/calculator' component = { CalcApp } />
        </div>
    );
}

export default App;
