import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AddClass from "./components/classManagment/CreateClass";
import UpdateClass from "./components/classManagment/UpdateClass";
import ViewClass from "./components/classManagment/ViewClass";


function App() {
  return <div>
    <Router>
      {/*<Header/>*/}
      <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/create-class" component={AddClass}/>
          <Route path="/update-class" component={UpdateClass}/>
          <Route path="/view-class" component={ViewClass}/>
      </Switch>
      {/*<Footer/>*/}
    </Router>
  </div>
}

export default App;
