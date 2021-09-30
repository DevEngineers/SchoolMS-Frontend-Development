import React, {Component} from "react";
import HomeIcon from "@material-ui/icons/Home";
import "../styles/HeaderFooter.css";
import {withRouter} from 'react-router-dom';

/**
 * @authors : A.M Zumry & M.N.M Akeel
 * Registration Numbers : IT19175126 & IT19153414
 */

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            type:'',
        }
    }

    componentDidMount() {
        this.setState({type:localStorage.getItem("userType")})
        console.log("type",localStorage.getItem("userType"))
    }

    componentWillUnmount() {
        localStorage.removeItem("headerValue");
    }

    logout(event){
        event.preventDefault()
        localStorage.clear();
        this.props.history.push("/");
    }

    forAdministratorView(){
        return <div>
            <div  id={"HeadDiv"}>
                <label id={"HeadTitle"}>𝙂𝙖𝙩𝙚𝙬𝙖𝙮 𝙄𝙣𝙩𝙚𝙧𝙣𝙖𝙩𝙞𝙤𝙣𝙖𝙡 𝙎𝙘𝙝𝙤𝙤𝙡</label>
                <div id={"logRDiv"}>
                    <a href={"/userProfile"} id={"regLink"}>User Profile</a>
                    <a href={"#"} id={"logLink"} onClick={event => this.logout(event)} >Logout</a>
                </div>
            </div>
            {
                localStorage.getItem("homeValue") !== "value" ?
                (
                    <div>
                        <nav id={"bigDiv"}>
                            <label htmlFor={"drop"} className={"toggle"}>Menu</label>
                            <input type={"checkbox"} id={"drop"}/>
                            <ul className={"menu"}>
                                <li id={"homeID"}>
                                    <a href={"/home"}><HomeIcon id={'homeIcon'}/></a>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-1"} className={"toggle"}>Student</label>
                                    <a href="#">Student</a>
                                    <input type={"checkbox"} id={"drop-1"}/>
                                    <ul>
                                        <li><a href={"/add-student/"}>Add Student</a></li>
                                        <li><a href={"/students"}>View Students</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/* First Tier Drop Down */}
                                    <label htmlFor={"drop-2"} className={"toggle"}>Teacher</label>
                                    <a href="#">Teacher</a>
                                    <input type={"checkbox"} id={"drop-2"}/>
                                    <ul>
                                        <li><a href={"/add-teacher/"}>Add Teacher</a></li>
                                        <li><a href={"/teachers"}>View Teachers</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-3"} className={"toggle"}>Class</label>
                                    <a href="#">Class</a>
                                    <input type={"checkbox"} id={"drop-3"}/>
                                    <ul>
                                        <li><a href={"/create-class"}>Add Class</a></li>
                                        <li><a href={"/view-class"}>View Class's</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-4"} className={"toggle"}>Subject</label>
                                    <a href="#">Subject</a>
                                    <input type={"checkbox"} id={"drop-4"}/>
                                    <ul>
                                        <li><a href={"/create-subject"}>Add Subject</a></li>
                                        <li><a href={"/view-subject"}>View Subject</a></li>
                                    </ul>
                                </li>
                                <li className={"liChange"}>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-5"} className={"toggle"}>Class Timetable</label>
                                    <a href="#">Class Timetable</a>
                                    <input type={"checkbox"} id={"drop-5"}/>
                                    <ul>
                                        <li><a href={"/createClassTimetable"}>Create Class Timetable</a></li>
                                        <li><a href={"/manageClassTimetable"}>View Class Timetable</a></li>
                                    </ul>
                                </li>
                                <li className={"liChange"}>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-6"} className={"toggle"}>Exam Timetable</label>
                                    <a href="#">Exam Timetable</a>
                                    <input type={"checkbox"} id={"drop-6"}/>
                                    <ul>
                                        <li><a href={"/createExamTimetable"}>Create Exam Timetable</a></li>
                                        <li><a href={"/manageExamTimetable"}>View Exam Timetable</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-7"} className={"toggle"}>Results</label>
                                    <a href="#">Results</a>
                                    <input type={"checkbox"} id={"drop-7"}/>
                                    <ul>
                                        <li><a href={"/storeResults"}>Add Results</a></li>
                                        <li><a href={"/manageResults"}>View Results</a></li>
                                        <li><a href={"/generateResultReport"}>Generate Results Report</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-8"} className={"toggle"}>Users</label>
                                    <a href="#">Users</a>
                                    <input type={"checkbox"} id={"drop-8"}/>
                                    <ul>
                                        <li><a href={"/createUsers"}>Add User</a></li>
                                        <li><a href={"/manageUserAccount"}>View Users</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-9"} className={"toggle"}>Fees</label>
                                    <a href="#">Fees</a>
                                    <input type={"checkbox"} id={"drop-9"}/>
                                    <ul>
                                        <li><a href={"/add-payment/"}>Add Fees</a></li>
                                        <li><a href={"/payments"}>View Fees</a></li>
                                        <li><a href={"/payment-report"}>Generate Fees Report</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                ):(localStorage.removeItem("homeValue"))
            }
        </div>
    }

    forAdministratorStaffView(){
        return <div>
            <div  id={"HeadDiv"}>
                <label id={"HeadTitle"}>𝙂𝙖𝙩𝙚𝙬𝙖𝙮 𝙄𝙣𝙩𝙚𝙧𝙣𝙖𝙩𝙞𝙤𝙣𝙖𝙡 𝙎𝙘𝙝𝙤𝙤𝙡</label>
                <div id={"logRDiv"}>
                    <a href={"/userProfile"} id={"regLink"}>User Profile</a>
                    <a href={"#"} id={"logLink"} onClick={event => this.logout(event)} >Logout</a>
                </div>
            </div>
            {
                localStorage.getItem("homeValue") !== "value" ?
                (
                    <div>
                        <nav id={"bigDiv"}>
                            <label htmlFor={"drop"} className={"toggle"}>Menu</label>
                            <input type={"checkbox"} id={"drop"}/>
                            <ul className={"menu"}>
                                <li id={"homeID"}>
                                    <a href="#"><HomeIcon id={"homeIcon"}/></a>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-1"} className={"toggle"}>Student</label>
                                    <a href="#">Student</a>
                                    <input type={"checkbox"} id={"drop-1"}/>
                                    <ul>
                                        <li><a href={"/add-student/"}>Add Student</a></li>
                                        <li><a href={"/students"}>View Students</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/* First Tier Drop Down */}
                                    <label htmlFor={"drop-2"} className={"toggle"}>Teacher</label>
                                    <a href="#">Teacher</a>
                                    <input type={"checkbox"} id={"drop-2"}/>
                                    <ul>
                                        <li><a href={"/add-teacher/"}>Add Teacher</a></li>
                                        <li><a href={"/teachers"}>View Teachers</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-3"} className={"toggle"}>Class</label>
                                    <a href="#">Class</a>
                                    <input type={"checkbox"} id={"drop-3"}/>
                                    <ul>
                                        <li><a href={"/create-class"}>Add Class</a></li>
                                        <li><a href={"/view-class"}>View Class's</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-4"} className={"toggle"}>Subject</label>
                                    <a href="#">Subject</a>
                                    <input type={"checkbox"} id={"drop-4"}/>
                                    <ul>
                                        <li><a href={"/create-subject"}>Add Subject</a></li>
                                        <li><a href={"/view-subject"}>View Subject</a></li>
                                    </ul>
                                </li>
                                <li className={"liChange"}>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-5"} className={"toggle"}>Class Timetable</label>
                                    <a href="#">Class Timetable</a>
                                    <input type={"checkbox"} id={"drop-5"}/>
                                    <ul>
                                        <li><a href={"/createClassTimetable"}>Create Class Timetable</a></li>
                                        <li><a href={"/manageClassTimetable"}>View Class Timetable</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-6"} className={"toggle"}>Attendance</label>
                                    <a href="#">Attendance</a>
                                    <input type={"checkbox"} id={"drop-6"}/>
                                    <ul>
                                        <li><a href={"/store-attendance"}>Add Attendance</a></li>
                                        <li><a href={"/view-attendance"}>View Attendance</a></li>
                                        <li><a href={"/report-attendance"}>Attendance Report</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-7"} className={"toggle"}>Fees</label>
                                    <a href="#">Fees</a>
                                    <input type={"checkbox"} id={"drop-7"}/>
                                    <ul>
                                        <li><a href={"/add-payment/"}>Add Fees</a></li>
                                        <li><a href={"/payments"}>View Fees</a></li>
                                        <li><a href={"/payment-report"}>Generate Fees Report</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                ):(localStorage.removeItem("homeValue"))
            }
        </div>
    }

    forExaminationStaffView(){
        return <div>
            <div  id={"HeadDiv"}>
                <label id={"HeadTitle"}>𝙂𝙖𝙩𝙚𝙬𝙖𝙮 𝙄𝙣𝙩𝙚𝙧𝙣𝙖𝙩𝙞𝙤𝙣𝙖𝙡 𝙎𝙘𝙝𝙤𝙤𝙡</label>
                <div id={"logRDiv"}>
                    <a href={"/userProfile"} id={"regLink"}>User Profile</a>
                    <a href={"#"} id={"logLink"} onClick={event => this.logout(event)} >Logout</a>
                </div>
            </div>
            {
                localStorage.getItem("homeValue") !== "value" ?
                (
                    <div>
                        <nav id={"bigDiv"}>
                            <label htmlFor={"drop"} className={"toggle"}>Menu</label>
                            <input type={"checkbox"} id={"drop"}/>
                            <ul className={"menu"}>
                                <li id={"homeID"}>
                                    <a href="#"><HomeIcon id={"homeIcon"}/></a>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-1"} className={"toggle"}>Student</label>
                                    <a href="#">Student</a>
                                    <input type={"checkbox"} id={"drop-1"}/>
                                    <ul>
                                        <li><a href={"/students"}>View Students</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-2"} className={"toggle"}>Subject</label>
                                    <a href="#">Subject</a>
                                    <input type={"checkbox"} id={"drop-2"}/>
                                    <ul>
                                        <li><a href={"/view-subject"}>View Subject</a></li>
                                    </ul>
                                </li>
                                <li className={"liChange"}>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-3"} className={"toggle"}>Exam Timetable</label>
                                    <a href="#">Exam Timetable</a>
                                    <input type={"checkbox"} id={"drop-3"}/>
                                    <ul>
                                        <li><a href={"/createExamTimetable"}>Create Exam Timetable</a></li>
                                        <li><a href={"/manageExamTimetable"}>View Exam Timetable</a></li>
                                    </ul>
                                </li>
                                <li>
                                    {/*First Tier Drop Down*/}
                                    <label htmlFor={"drop-4"} className={"toggle"}>Results</label>
                                    <a href="#">Results</a>
                                    <input type={"checkbox"} id={"drop-4"}/>
                                    <ul>
                                        <li><a href={"/storeResults"}>Add Results</a></li>
                                        <li><a href={"/manageResults"}>View Results</a></li>
                                        <li><a href={"/generateResultReport"}>Generate Results Report</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                ):(localStorage.removeItem("homeValue"))
            }
        </div>
    }

    render() {
        return <div>
            {
                localStorage.getItem("headerValue") !== "value" ?
                (
                    (
                        this.state.type === "Administrator"?
                            (this.forAdministratorView())
                        :this.state.type === "AdministratorStaff"?
                            (this.forAdministratorStaffView())
                        :this.state.type === "ExaminationStaff"?
                            (this.forExaminationStaffView())
                        :(this.forAdministratorView())
                    )
                ):(localStorage.removeItem("headerValue"))

            }
        </div>
    }
}

export default withRouter(Header);
