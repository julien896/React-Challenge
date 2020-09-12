import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Nabvar';
import Footer from './components/Footer';
import Home from './components/Home';
import Characters from './components/Characters';
import Locations from './components/Locations';
import Episodes from './components/Episodes';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <Footer/>
      <Switch>
      <Route exact path="/characters" component={Characters}/>
      <Route exact path="/locations" component={Locations}/>
      <Route exact path="/episodes" component={Episodes}/>
      </Switch>

    </BrowserRouter>
    </>
  );
}

export default App;
