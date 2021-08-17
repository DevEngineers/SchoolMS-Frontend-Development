import React from "react";
import Select from "@material-ui/core/Select";
import {MenuItem, TextField} from "@material-ui/core";
import '../../styles/usersStyles/Users.css'

class CreateUserAccount extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            username:'',
            email:'',
            password:'',
            rePassword:'',
            sBranch:[],
            userType:['Administrative Staff', 'Examination Staff'],
        }
    }

    /**
     * this function is to capture data in the input fields
     */
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }


    submitResearchPaper(event) {
        event.preventDefault();
        console.log(this.state.email)
        console.log(this.state.checkedTimeSlot)
    }


    render() {
        console.log(this.state.examMarks)
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>CREATE USER ACCOUNTS</label>
                </div>
            </div>
            <div id={'largeResultDiv'}>
                <form>
                    <div id={'form-style-user'}>
                        <div id={'examLabelEDiv'}>
                            <label className={'classELabel'}>Branch</label>
                            <label className={'classELabel'}>Username</label>
                            <label className={'classELabel'}>Email</label>
                            <label className={'classELabel'}>Account Type</label>
                            <label className={'classELabel'}>Password</label>
                            <label className={'classELabel'}>Re-Password</label>
                        </div>
                        <div id={'classSelectOpt'}>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectRName'}>Select Class</span></MenuItem>
                                {
                                    this.state.sBranch.map(branch =>
                                        <MenuItem key={branch} value={branch} className={'selectRName'}>{branch}</MenuItem>
                                    )
                                }
                            </Select>
                            <TextField type={'text'} className={'classSize'}/>
                            <TextField type={'text'} className={'classSize'}/>

                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectRName'}>Select Year</span></MenuItem>
                                {
                                    this.state.userType.map(type =>
                                        <MenuItem key={type} value={type} className={'selectRName'}>{type}</MenuItem>
                                    )
                                }
                            </Select>
                            <TextField type={'text'} className={'classSize'}/>
                            <TextField type={'text'} className={'classSize'}/>
                        </div>
                    </div>
                    <div className={'btnEDiv'}>
                        <input type={'submit'} id={'submitRBtn'} value={'Store Results'}/>
                        <input type={'reset'} id={'restRBtn'} value={'Reset'}/>
                    </div>

                </form>
            </div>
        </div>
    }
}

export default CreateUserAccount;