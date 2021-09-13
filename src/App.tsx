import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home';
import About from './views/About';

function App() {

  return (
    <Router>
      <div className="App font-manrope container mx-auto">
        <Header />
        <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App