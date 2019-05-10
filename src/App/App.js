import React from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import DesignProjects from '../DesignProjects/DesignProjects';
import DevProjects from '../DevProjects/DevProjects';

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

      </div>
    </Router>
  );
}

export default App;
