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
import GeneratePaymentReport from "./components/StudentPaymentManagement/GeneratePaymentReport";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return <div>
    <Router>
      <Header/>
      <Switch>
        <Route path = "/" exact component = {ListStudents}/>
        <Route path = "/students"  component = {ListStudents}/>
        <Route path = "/add-student/:id" component = {CreateStudent}/>
        <Route path = "/update-student/:id" component = {UpdateStudent}/>
        <Route path = "/view-student/:id" component = {ViewStudents}/>
        <Route path = "/add-teacher/:id" component = {CreateTeacher}/>
        <Route path = "/update-teacher/:id" component = {UpdateTeacher}/>
        <Route path = "/teachers" component = {ListTeachers}/>
        <Route path = "/view-teacher/:id" component = {ViewTeachers}/>
        <Route path = "/add-payment/:id" component = {CreatePayment}/>
        <Route path = "/update-payment/:id" component = {UpdatePayment}/>
        <Route path = "/view-payment/:id" component = {ViewPayments}/>
        <Route path = "/payments" component = {ListPayments}/>
        <Route path = "/payment-report/" component = {GeneratePaymentReport}/>

      </Switch>
      <Footer/>
    </Router>
  </div>
}

export default App;
