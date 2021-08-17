import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import CreateClassTimetable from "./components/classTimetableManagement/CreateClassTimetable";
import CreateExamTimetable from "./components/examTimetableManagement/CreateExamTimetable";
import StoreResult from "./components/resultManagement/StoreResult";
import CreateUserAccount from "./components/userManagement/CreateUserAccount";

function App() {
  return <div>
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/createClassTimetable" component={CreateClassTimetable}/>
        <Route path="/createExamTimetable" component={CreateExamTimetable}/>
        <Route path="/storeResults" component={StoreResult}/>
        <Route path="/createUsers" component={CreateUserAccount}/>
      </Switch>
    </Router>
  </div>
}

export default App;
