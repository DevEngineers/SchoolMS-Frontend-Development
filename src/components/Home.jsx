import React from "react";
import '../styles/Home.css'


/*
*  IT 19167442
*  Author Nusky M.A.M
* */

class AHome extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        if (localStorage.getItem('userToken') === null) {
            this.props.history.push('/');
        }
        localStorage.setItem("homeValue", "value");
    }

    componentWillUnmount() {
        localStorage.removeItem('homeValue');
    }

    render() {
        return <div id="bodyDiv">
            <div>
            <h2 id={"head2"}>Welcome to Gateway Collage</h2>
            </div>
            <div className="divB">

                <div className="icondiv">
                    <a href={"/students"}>
                        <img className={'functionlogo'} alt={'homeIcons'}
                             src={require('../images/home/student.jpg')}/>
                        <label>Student Management </label>
                    </a>
                </div>

                {
                    localStorage.getItem('userType') !== 'Examination Staff' ? (
                      <div className="icondiv">
                          <a href={"/teachers"}>
                              <img className={'functionlogo'} alt={'homeIcons'}
                                   src={require('../images/home/teacher.png')}/>
                              Teacher Management
                          </a>
                      </div>
                    ) : null
                }

                {
                    localStorage.getItem('userType') !== 'Examination Staff' ? (
                      <div className="icondiv">
                          <a href={"/view-class"}>
                              <img className={'functionlogo'} alt={'homeIcons'}
                                   src={require('../images/home/class.jpg')}/>
                              Class Management
                          </a>
                      </div>
                    ) : null
                }
                <div className="icondiv">
                    <a href={"/view-subject"}>
                        <img className={'functionlogo'} alt={'homeIcons'} src={require('../images/home/subject.jpg')}/>
                        Subject Management
                    </a>
                </div>
                {
                    localStorage.getItem('userType') !== 'Examination Staff' ? (
                      <div className="icondiv">
                          <a href={"/manageClassTimetable"}>
                              <img className={'functionlogo'} alt={'homeIcons'}
                                   src={require('../images/home/timetable.jpg')}/>
                              Class Timetable Management
                          </a>
                      </div>
                    ) : null
                }

                {
                    localStorage.getItem('userType') === 'Examination Staff' ? (
                      <div className="icondiv">
                          <a href={"/manageExamTimetable"}>
                              <img className={'functionlogo'} alt={'homeIcons'} src={require('../images/home/exam.jpg')}/>
                              Exam Timetable Management
                          </a>
                      </div>
                    ) : null
                }

                {
                    localStorage.getItem('userType') === 'Examination Staff' ? (
                      <div className="icondiv">
                          <a href={"/manageResults"}>
                              <img className={'functionlogo'} alt={'homeIcons'} src={require('../images/home/results.jpg')}/>
                              Results Management
                          </a>
                      </div>
                    ) : null
                }

                {
                    localStorage.getItem('userType') !== 'Examination Staff' ? (
                      <div className="icondiv">
                          <a href={"/view-attendance"}>
                              <img className={'functionlogo'} alt={'homeIcons'}
                                   src={require('../images/home/attendance.jpg')}/>
                              Attendance Management
                          </a>
                      </div>
                    ) : null
                }

                {
                    localStorage.getItem('userType') !== 'Examination Staff' ? (
                      <div className="icondiv">
                          <a href={"/payments"}>
                              <img className={'functionlogo'} alt={'homeIcons'} src={require('../images/home/Fees.png')}/>
                              Fees Management
                          </a>
                      </div>
                    ) : null
                }

                {
                    localStorage.getItem('userType') !== 'Examination Staff' && localStorage.getItem('userType') !== 'Administrative Staff' ? (
                      <div className="icondiv">
                          <a href={"/manageUserAccount"}>
                              <img className={'functionlogo'} alt={'homeIcons'} src={require('../images/home/user.jpg')}/>
                              User Management
                          </a>
                      </div>
                    ) : null
                }

            </div>
        </div>

    }
}

export default AHome;
