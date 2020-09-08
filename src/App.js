import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav/Nav.js'

import routes from './routes.js'
import { withRouter } from 'react-router-dom'

function App(props) {
  console.log("App.js props", props)
  return (
    <div className="App">
      { (props.location.pathname === "/")
          ? false
          :  <Nav/> }
      {routes}
    </div>
  );
}


export default withRouter(
    App
  );