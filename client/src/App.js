import React from 'react';
import './App.css';
import GamesWraper from './components/GamesWraper';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={GamesWraper} />
                <Route path="/games/:category" component={GamesWraper}/>
                <Route path="/match" component={GamesWraper}/>
            </Switch>
        </Router>
    )
}

export default App;