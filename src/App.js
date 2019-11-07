import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Search from './component/Search'
import styled from 'styled-components'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const Container =styled.div`

`;

function App() {
  return (
   <Router>
   <Switch>
   <Route path="/search">
     <Search />
   </Route>
  
   <Route path="/">
     <Home />
   </Route>
 </Switch>
   </Router>
  );
}

export default App;
