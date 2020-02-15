import React from 'react';
import { MainPage } from './pages/main-page.component';
import { Navigation } from './components/navigation/navigation.component';
import { About } from './pages/about-page.component';
//import { Contact } from './components/contact/contact.component';
import { Route } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className='App'>
      <Navigation/>
      <Route exact path='/' component = { MainPage } />
      <Route exact path='/about' component = { About } />
    </div>
  );
  }
}

export default App;
