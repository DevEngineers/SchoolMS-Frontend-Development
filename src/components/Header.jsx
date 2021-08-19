import React, {Component} from 'react';
import {Card, Paper} from "@material-ui/core";
import '../styles/HeaderFooter.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            type:'Administrator',
        }
    }

    forAdministratorView(){
        return <div>
            <div id="HeadDiv">

            </div>
        </div>
    }

    render() {
        return <div>
            <div  id={'HeadDiv'}>
                <label id={'HeadTitle'}>Gateway International School</label>
                <div id={'logRDiv'}>
                    <a href={'#'} id={'regLink'}>User Profile</a>
                    <a href={'#'} id={'logLink'} onClick={event => this.logout(event)} >Logout</a>
                </div>

            </div>
            <div>
                <div>
                    <nav id={'bigDiv'}>

                        <label htmlFor={'drop'} className={'toggle'}>Menu</label>
                        <input type={'checkbox'} id={'drop'}/>
                        <ul className={'menu'}>
                            <li id={"homeID"}><a href="/">Home</a></li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-1'} className={'toggle'}>Student +</label>
                                <a href="#">Student</a>
                                <input type={'checkbox'} id={'drop-1'}/>
                                <ul>
                                    <li><a href="#">Add Student</a></li>
                                    <li><a href="#">Student List</a></li>
                                </ul>
                            </li>
                            <li>
                                {/* First Tier Drop Down */}
                                <label htmlFor={'drop-2'} className={'toggle'}>Teacher +</label>
                                <a href="#">Teacher</a>
                                <input type={'checkbox'} id={'drop-2'}/>
                                <ul>
                                    <li><a href="#">Teachers List</a></li>
                                    <li><a href="#">Add Teacher</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-3'} className={'toggle'}>Class +</label>
                                <a href="#">Class</a>
                                <input type={'checkbox'} id={'drop-3'}/>
                                <ul>
                                    <li><a href="/#">View Class's</a></li>
                                    <li><a href="/#">Add Class</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-4'} className={'toggle'}>Subject +</label>
                                <a href="#">Subject</a>
                                <input type={'checkbox'} id={'drop-4'}/>
                                <ul>
                                    <li><a href="/#">View Subject</a></li>
                                    <li><a href="/#">Add Subject</a></li>
                                </ul>
                            </li>
                            <li id={"liBigID"}>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-5'} className={'toggle'}>Class Timetable +</label>
                                <a href="#">Class Timetable</a>
                                <input type={'checkbox'} id={'drop-5'}/>
                                <ul>
                                    <li><a href="/#">View Class Timetable</a></li>
                                    <li><a href="/#">Add Class Timetable</a></li>
                                </ul>
                            </li>
                            <li id={"liBigID"}>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-6'} className={'toggle'}>Exam Timetable +</label>
                                <a href="#">Exam Timetable</a>
                                <input type={'checkbox'} id={'drop-6'}/>
                                <ul>
                                    <li><a href="/#">View Exam Timetable</a></li>
                                    <li><a href="/#">Add Exam Timetable</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-7'} className={'toggle'}>Results +</label>
                                <a href="#">Results</a>
                                <input type={'checkbox'} id={'drop-7'}/>
                                <ul>
                                    <li><a href="/#">View Results</a></li>
                                    <li><a href="/#">Add Results</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-8'} className={'toggle'}>Attendance +</label>
                                <a href="#">Attendance</a>
                                <input type={'checkbox'} id={'drop-8'}/>
                                <ul>
                                    <li><a href="/#">View Attendance</a></li>
                                    <li><a href="/#">Add Attendance</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-9'} className={'toggle'}>Fees +</label>
                                <a href="#">Fees</a>
                                <input type={'checkbox'} id={'drop-9'}/>
                                <ul>
                                    <li><a href="/#">View Fees</a></li>
                                    <li><a href="/#">Add Fees</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }
}

export default Header;