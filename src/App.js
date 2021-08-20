import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import CreateClassTimetable from "./components/classTimetableManagement/CreateClassTimetable";
import CreateExamTimetable from "./components/examTimetableManagement/CreateExamTimetable";
import StoreResult from "./components/resultManagement/StoreResult";
import CreateUserAccount from "./components/userManagement/CreateUserAccount";
import UpdateClassTimetable from "./components/classTimetableManagement/UpdateClassTimetable";
import ManageResults from "./components/resultManagement/ManageResults";
import ManageClassTimetable from "./components/classTimetableManagement/ManageClassTimetable";
import ManageExamTimetable from "./components/examTimetableManagement/ManageExamTimetable";
import GenerateResultReport from "./components/resultManagement/GenerateResultReport";

function App() {
  return <div>
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/createClassTimetable" component={CreateClassTimetable}/>
        <Route exact path="/updateClassTimetable" component={UpdateClassTimetable}/>
        <Route path="/createExamTimetable" component={CreateExamTimetable}/>
        <Route path="/storeResults" component={StoreResult}/>
        <Route path="/createUsers" component={CreateUserAccount}/>
        <Route path="/manageResults" component={ManageResults}/>
        <Route path="/manageClassTimetable" component={ManageClassTimetable}/>
        <Route path="/manageExamTimetable" component={ManageExamTimetable}/>
        <Route path="/generateResultReport" component={GenerateResultReport}/>
      </Switch>
    </Router>
  </div>
}

export default App;
