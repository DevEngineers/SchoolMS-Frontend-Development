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
import ManageUserAccounts from "./components/userManagement/ManageUserAccounts";
import ViewClassTimetable from "./components/classTimetableManagement/ViewClassTimetable";
import ViewExamTimetable from './components/examTimetableManagement/ViewExamTimetable';
import ViewResult from "./components/resultManagement/ViewResult";


function App() {
  return <Router>
    <Header/>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/createClassTimetable" component={CreateClassTimetable}/>
        <Route path="/updateClassTimetable/:id" component={UpdateClassTimetable}/>
        <Route path="/manageClassTimetable" component={ManageClassTimetable}/>
        <Route path="/viewClassTimetable/:id" component={ViewClassTimetable}/>
        <Route path="/createExamTimetable" component={CreateExamTimetable}/>
        <Route path="/updateExamTimetable/:id" component={UpdateExamTimetable}/>
        <Route path="/manageExamTimetable" component={ManageExamTimetable}/>
        <Route path="/viewExamTimetable/:id" component={ViewExamTimetable}/>
        <Route path="/storeResults" component={StoreResult}/>
        <Route path="/updateResults/:id" component={UpdateResult}/>
        <Route path="/manageResults" component={ManageResults}/>
        <Route path="/viewResult/:id" component={ViewResult}/>
        <Route path="/createUsers" component={CreateUserAccount}/>
        <Route path="/userProfile" component={UserProfile}/>
        <Route path="/manageUserAccount" component={ManageUserAccounts}/>
        <Route path="/generateResultReport" component={GenerateResultReport}/>
      </Switch>
    </Router>
}

export default App;
