import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import PostDetails from './components/PostDetails';




function App() {
  return (
    <div data-testid="app">
      <BrowserRouter>
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/post-details" component={PostDetails} />

          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
