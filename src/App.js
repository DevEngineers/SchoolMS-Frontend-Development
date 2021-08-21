import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

import ListStudents from "./components/StudentManagement/ListStudents";
import CreateStudent from "./components/StudentManagement/CreateStudent";
import UpdateStudent from "./components/StudentManagement/UpdateStudent";
import CreatePayment from "./components/StudentPaymentManagement/CreatePayment";
import ListPayments from "./components/StudentPaymentManagement/ListPayments";
import UpdatePayment from "./components/StudentPaymentManagement/UpdatePayment";
import ListTeachers from "./components/TeacherManagement/ListTeachers";
import CreateTeacher from "./components/TeacherManagement/CreateTeacher";
import UpdateTeacher from "./components/TeacherManagement/UpdateTeacher";
import ViewPayments from "./components/StudentPaymentManagement/ViewPayments";
import ViewStudents from "./components/StudentManagement/ViewStudents";
import ViewTeachers from "./components/TeacherManagement/ViewTeachers";

function App() {
  return <div>
    <Router>
      <Switch>
        <Route path = "/" exact component = {ListPayments}></Route>
        <Route path = "/payments" component = {ListPayments}></Route>
        <Route path = "/add-payment/:id" component = {CreatePayment}></Route>
        <Route path = "/update-payment/:id" component = {UpdatePayment}></Route>
        <Route path = "/add-student/:id" component = {CreateStudent}></Route>
        <Route path = "/update-student/:id" component = {UpdateStudent}></Route>
        <Route path = "/students" component = {ListStudents}></Route>
        <Route path = "/add-teacher/:id" component = {CreateTeacher}></Route>
        <Route path = "/update-teacher/:id" component = {UpdateTeacher}></Route>
        <Route path = "/teachers" component = {ListTeachers}></Route>
        <Route path = "/view-payment/:id" component = {ViewPayments}></Route>
        <Route path = "/view-student/:id" component = {ViewStudents}></Route>
        <Route path = "/view-teacher/:id" component = {ViewTeachers}></Route>

      </Switch>
    </Router>
  </div>
}

export default App;
