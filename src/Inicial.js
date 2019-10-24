import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import './App.css';
import App from './App'
import Sobre from './componentes/Sobre'
import Menu from './componentes/Menu'

const Inicial = () => {
    return (
        <Router>

          <Menu/>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            {
            <Switch>
              <Route path="/sobre">
                <Sobre/>
              </Route>              
              <Route path="/">
                <App />
              </Route>
            </Switch>
            }
        </Router>
      );
}
export default Inicial