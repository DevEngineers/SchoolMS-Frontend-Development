import React from "react";
import '../styles/Home.css'


/*
*  IT 19167442
*  Author Nusky M.A.M
* */

class AHome extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return <div id="bodyDiv">
            <h2>Welcome to Gateway Collage  </h2>
            <div className="divB">
                <div className="icondiv">
                    <a href="/students">
                        <img className={'functionlogo'} src={require('../images/home/student.jpg')} />
                        <label>Student Management </label>
                    </a>
                </div>
                <div className="icondiv">
                    <a href="/teachers">
                        <img className={'functionlogo'} src={require('../images/home/teacher.png')} />
                        Teacher Management
                    </a>
                </div>
                <div className="icondiv">
                    <a href="/view-class">
                        <img className={'functionlogo'} src={require('../images/home/class.jpg')} />
                        Class Management
                    </a>
                </div>
                <div className="icondiv">
                    <a href="/view-subject">
                        <img className={'functionlogo'} src={require('../images/home/subject.jpg')} />
                        Subject Management
                    </a>
                </div>
                <div className="icondiv">
                    <a href="/manageClassTimetable">
                        <img className={'functionlogo'} src={require('../images/home/timetable.jpg')} />
                        Class Timetable Management
                    </a>
                </div>
                <div className="icondiv">
                    <a href="/manageExamTimetable">
                        <img className={'functionlogo'} src={require('../images/home/exam.jpg')} />
                        Exam Timetable Management
                    </a>
                </div>
                <div className="icondiv">
                    <a href="/manageResults">
                        <img className={'functionlogo'} src={require('../images/home/results.jpg')} />
                        Results Management
                    </a>
                </div>
                <div className="icondiv">
                    <a href="/view-attendance">
                        <img className={'functionlogo'} src={require('../images/home/attendance.jpg')} />
                        Attendance Management
                    </a>
                </div>
                <div className="icondiv">
                    <a href="/payments">
                        <img className={'functionlogo'} src={require('../images/home/Fees.png')} />
                        Fees Management
                    </a>
                </div>
            </div>
        </div>

    }
}

export default AHome;
