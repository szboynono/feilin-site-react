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
import GalleryContextProvider from './store/context';
import Detail from './views/Detail';

function App() {

  return (
    <GalleryContextProvider>
      <Router>
        <div className="App font-manrope container mx-auto">
          <Header />
          <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/detail/:id">
                <Detail />
              </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </GalleryContextProvider>
  )
}

export default App