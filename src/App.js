import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import CreateStudent from "./components/StudentManagement/CreateStudent";
import ListStudents from "./components/StudentManagement/ListStudents";
import CreateTeacher from "./components/TeacherManagement/CreateTeacher";
import CreatePayment from "./components/StudentPaymentManagement/CreatePayment";
//import ListPayments from "./components/StudentPaymentManagement/ListPayments";
//import ListTeachers from "./components/TeacherManagement/ListTeachers";


function App() {
  return <div>
    <Router>
      <Switch>
        <Route path = "/" exact component = {ListStudents}></Route>
        <Route path = "/students" component = {ListStudents}></Route>
        <Route path = "/add-student/:id" component = {CreateStudent}></Route>
        <Route path = "/add-teacher/:id" component = {CreateTeacher}></Route>
        <Route path = "/add-payment/:id" component = {CreatePayment}></Route>


      </Switch>
    </Router>
  </div>
}

export default App;
