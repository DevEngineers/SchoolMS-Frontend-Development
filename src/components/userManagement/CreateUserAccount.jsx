import React from "react";
import Select from "@material-ui/core/Select";
import {MenuItem, TextField} from "@material-ui/core";
import '../../styles/usersStyles/Users.css'

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


class CreateUserAccount extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            smBranch:'',
            username:'',
            email:'',
            uType:'',
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
        console.log(this.state.uType)
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>CREATE USER ACCOUNTS</label>
                </div>
            </div>
            <div id={'largeUserDiv'}>
                <form>
                    <div id={'form-style-user'}>
                        <div id={'userLabelEDiv'}>
                            <label className={'classULabel'}>Branch</label>
                            <label className={'classULabel'}>Username</label>
                            <label className={'classULabel'}>Email</label>
                            <label className={'classULabel'}>Account Type</label>
                            <label className={'classULabel'}>Password</label>
                            <label className={'classULabel'}>Renter-Password</label>
                        </div>
                        <div id={'userSelectOpt'}>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'smBranch'} value={this.state.smBranch}
                                    className={'userSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectUName'}>Select Class</span></MenuItem>
                                {
                                    this.state.sBranch.map(branch =>
                                        <MenuItem key={branch} value={branch} className={'selectUName'}>{branch}</MenuItem>
                                    )
                                }
                            </Select>
                            <div className={'textFieldAc'}>
                                <TextField type={'text'} className={'userSize'}  name={'username'} value={this.state.username} onChange={event => this.onChange(event)}/>
                            </div>
                            <div className={'textFieldAc'}>
                                <TextField type={'text'} className={'userSize'}  name={'email'} value={this.state.email} onChange={event => this.onChange(event)}/>
                            </div>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'} value={this.state.uType}
                                    className={'userSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectUName'}>Select Account Type</span></MenuItem>
                                {
                                    this.state.userType.map(type =>
                                        <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                    )
                                }
                            </Select>
                            <div className={'textFieldAc'}>
                                <TextField type={'text'} className={'userSize'} name={'password'} value={this.state.password}  onChange={event => this.onChange(event)}/>
                            </div>
                            <div className={'textFieldAc'}>
                                <TextField type={'text'} className={'userSize'} name={'rePassword'} value={this.state.rePassword} onChange={event => this.onChange(event)}/>
                            </div>
                        </div>
                    </div>
                    <div className={'btnEDiv'}>
                        <input type={'submit'} id={'submitUBtn'} value={'Store Results'}/>
                        <input type={'reset'} id={'restUBtn'} value={'Reset'}/>
                    </div>

                </form>
            </div>
        </div>
    }
}

export default CreateUserAccount;