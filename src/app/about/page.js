"use client"
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import About from '@/components/About'; // Corrige la importación aquí
//import Home from './components/Home'; // Suponiendo que tengas un componente Home

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
      <Route path="/about" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
