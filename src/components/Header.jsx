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
                            <li><a href="/">Home</a></li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-1'} className={'toggle'}>Authors +</label>
                                <a href="#">Authors</a>
                                <input type={'checkbox'} id={'drop-1'}/>
                                <ul>
                                    <li><a href="/callForPaper">Call For Papers</a></li>
                                    <li><a href="/paperSubmission">Submission Instructions</a></li>
                                    <li><a href="/importantDates">ImportantDates</a></li>
                                </ul>

                            </li>
                            <li>

                                {/* First Tier Drop Down */}
                                <label htmlFor={'drop-2'} className={'toggle'}>Workshop +</label>
                                <a href="#">Workshop</a>
                                <input type={'checkbox'} id={'drop-2'}/>
                                <ul>
                                    <li><a href="/workShopAllView">Workshops</a></li>
                                    <li><a href="/WorkshopSubmission">Submission Instructions</a></li>
                                </ul>
                            </li>
                            <li>
                                {/*First Tier Drop Down*/}
                                <label htmlFor={'drop-3'} className={'toggle'}>Attendees +</label>
                                <a href="#">Attendees</a>
                                <input type={'checkbox'} id={'drop-3'}/>

                                <ul>
                                    <li><a href="/attendeesRegistration">Registrations</a></li>
                                    <li><a href="/attendeesPayment">By Ticket</a></li>
                                    <li><a href="/attendeesTickets">View Tickets</a></li>
                                </ul>
                            </li>
                            <li><a href="/templatesDownload">Templates</a></li>
                            <li><a href="/about">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    }
}

export default Header;