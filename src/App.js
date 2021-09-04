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
import ViewAttendance from "./components/attendanceManagment/ManageAttendance";
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

          <Route path="/create-class" component={AddClass}/>
          <Route path="/update-class/:id" component={UpdateClass}/>
          <Route path="/view-class" component={ViewClass}/>
          <Route path="/create-subject" component={AddSubject}/>
          <Route path="/update-subject/:id" component={UpdateSubject}/>
          <Route path="/view-subject" component={ViewSubject}/>
          <Route path="/store-attendance" component={StoreAttendance}/>
          <Route path="/update-attendance/:id" component={UpdateAttendance}/>
          <Route path="/view-attendance" component={ViewAttendance}/>
          <Route path="/report-attendance" component={ReportAttendance}/>

          <Route path = "/students"  component = {ListStudents}/>
          <Route path = "/add-student/" component = {CreateStudent}/>
          <Route path = "/update-student/:id" component = {UpdateStudent}/>
          <Route path = "/view-student/:id" component = {ViewStudents}/>
          <Route path = "/add-teacher/" component = {CreateTeacher}/>
          <Route path = "/update-teacher/:id" component = {UpdateTeacher}/>
          <Route path = "/teachers" component = {ListTeachers}/>
          <Route path = "/view-teacher/:id" component = {ViewTeachers}/>
          <Route path = "/add-payment/" component = {CreatePayment}/>
          <Route path = "/update-payment/:id" component = {UpdatePayment}/>
          <Route path = "/view-payment/:id" component = {ViewPayments}/>
          <Route path = "/payments" component = {ListPayments}/>
          <Route path = "/payment-report" component = {GeneratePaymentReport}/>
      </Switch>
      <Footer/>
    </Router>
}

export default App;
