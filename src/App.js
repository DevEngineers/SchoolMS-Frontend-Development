import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";

function App() {
  return <div>
    <Router>
      <Switch>
          <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  </div>
}

export default App;
