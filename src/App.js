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
import UpdateExamTimetable from "./components/examTimetableManagement/UpdateExamTimetable";
import UpdateResult from "./components/resultManagement/UpdateResult";
import Header from "./components/Header";
import UserProfile from "./components/userManagement/UserProfile";

function App() {
  return <Router>
    <Header/>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/createClassTimetable" component={CreateClassTimetable}/>
        <Route path="/updateClassTimetable/:id" component={UpdateClassTimetable}/>
        <Route path="/createExamTimetable" component={CreateExamTimetable}/>
        <Route path="/updateExamTimetable/:id" component={UpdateExamTimetable}/>
        <Route path="/storeResults" component={StoreResult}/>
        <Route path="/updateResults/:id" component={UpdateResult}/>
        <Route path="/createUsers" component={CreateUserAccount}/>
        <Route path="/manageResults" component={ManageResults}/>
        <Route path="/manageClassTimetable" component={ManageClassTimetable}/>
        <Route path="/manageExamTimetable" component={ManageExamTimetable}/>
        <Route path="/generateResultReport" component={GenerateResultReport}/>
        <Route path="/userProfile" component={UserProfile}/>
      </Switch>
    </Router>
}

export default App;
