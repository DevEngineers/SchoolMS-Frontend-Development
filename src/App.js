import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import AddClass from "./components/classManagment/CreateClass";
import UpdateClass from "./components/classManagment/UpdateClass";
import ViewClass from "./components/classManagment/ManageClass";
import AddSubject from "./components/subjectManagment/CreateSubject";
import UpdateSubject from "./components/subjectManagment/UpdateSubject";
import ViewSubject from "./components/subjectManagment/ManageSubjects";
import StoreAttendance from "./components/attendanceManagment/AddAttendance";
import UpdateAttendance from "./components/attendanceManagment/UpdateAttendance";
import ReportAttendance from "./components/attendanceManagment/AttendanceReport";


function App() {
  return <Router>
      <Header/>
      <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/create-class" component={AddClass}/>
          <Route path="/update-class/:id" component={UpdateClass}/>
          <Route path="/view-class" component={ViewClass}/>
          <Route path="/create-subject" component={AddSubject}/>
          <Route path="/update-subject/:id" component={UpdateSubject}/>
          <Route path="/view-subject" component={ViewSubject}/>
          <Route path="/store-attendance" component={StoreAttendance}/>
          <Route path="/update-attendance/:id" component={UpdateAttendance}/>
          <Route path="/report-attendance" component={ReportAttendance}/>
      </Switch>
      <Footer/>
    </Router>
}

export default App;
