import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Resume from '../Resume/Resume';
import DesignProjects from '../DesignProjects/DesignProjects';
import DevProjects from '../DevProjects/DevProjects';
import Contact from '../Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Nina Johnson</h1>
        </header>
        <Nav />

        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/design" component={DesignProjects} />
        <Route path="/development" component={DevProjects} />
        <Route path="/contact" component={Contact} />

      </div>
    </Router>
  );
}

export default App;
