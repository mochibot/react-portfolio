import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Connect from './pages/Connect';
import background from './assets/home-background.png';
import './App.scss';

const App = () => {

  return (
    <div className='app'>
      <NavBar />
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} background={background} />}/>
        <Route path='/about' render={(props) => <About {...props} background={background} />}/>
        <Route path='/portfolio' render={(props) => <Portfolio {...props} background={background} />}/>
        <Route path='/connect' render={(props) => <Connect {...props} background={background} />}/>
      </Switch>
    </div>
  );
}

export default App;
