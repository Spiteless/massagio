import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard/Dashboard.js'
import Nav from './components/Nav/Nav/Nav.js'
import Event from './components/Event/Event/Event.js'
import Profile from './components/Profile/Profile/Profile.js'
import Cart from './components/Cart/Cart/Cart.js'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Dashboard/>
      <Event/>
      <Profile/>
      <Cart/>
    </div>
  );
}

export default App;