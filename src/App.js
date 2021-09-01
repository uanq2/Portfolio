import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebDev from './components/pages/WebDev';
import Design from './components/pages/Design';
import Contact from './components/pages/Contact';
import Footer from './components/Footer'
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/portfolio' exact component={Home} />
          <Route path='/portfolio/about-me' component={AboutMe} />
          <Route path='/portfolio/webDev' component={WebDev} />
          <Route path='/portfolio/design' component={Design} />
          <Route path='/portfolio/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
