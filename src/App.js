import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/404';
import background from './assets/home-background.png';
import './App.scss';

const App = () => {

  return (
    <>
      <div className='app'>
        <NavBar />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} background={background} />}/>
          <Route path='/about' render={(props) => <About {...props} background={background} />}/>
          <Route exact path='/portfolio' render={(props) => <Portfolio {...props} background={background} />}/>
          <Route path='/contact' render={(props) => <Contact {...props} background={background} />}/>
          <Route path='/:other' render={(props) => <NotFound {...props} background={background} />}/>
        </Switch>
      </div>
      <div className='footer'>© 2019 All rights reserved | Designed and built by: <a href='https://github.com/mochibot/react-portfolio' target='_blank' rel='noopener noreferrer'>Penny Lee</a></div> 
    </>
  );
}

export default App;
