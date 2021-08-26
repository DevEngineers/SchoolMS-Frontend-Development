import React, {useState} from "react";
import {Container, MenuItem, TextField} from "@material-ui/core";
import '../../styles/usersStyles/Users.css';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function UserProfile() {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [branch,setBranch] = useState('');

    return <div>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>USER PROFILE</label>
            </div>
        </div>
        <div id={'largeUserPDiv'}>
            <form>
                <Container id={'form-style-user'}>
                    <div id={'userLabelEDiv'}>
                        <label className={'UpLabel'}>Username</label>
                        <label className={'UpLabel'}>Email</label>
                        <label className={'UpLabel'}>Branch</label>
                        <label className={'UpLabel'}>Account Type</label>
                    </div>
                    <div id={'userPro'}>
                        <div className={'textFieldAc'}>
                            <TextField type={'password'} className={'userSize'}  name={'username'} value={username}/>
                        </div>
                        <div className={'textFieldAc'}>
                            <TextField type={'password'} className={'userSize'}  name={'email'} value={email}/>
                        </div>
                            <label className={'upValLabel'}>Colombo</label><br/>
                            <label className={'upValLabel'}>Administration Staff</label>
                    </div>
                </Container>
            </form>
        </div>
        <div id={'passwordHDiv'}>
            <label id={'passHLabel'}>Change Password</label>
        </div>
        <div id={'largeUserPBDiv'}>
            <form>
                <Container id={'form-style-user'}>
                    <div id={'userProLabelDiv'}>
                        <label className={'UpLabel'}>New Password</label>
                        <label className={'UpLabel'}>Re-enter Password</label>
                    </div>
                    <div id={'userPro'}>
                        <div className={'textFieldAc'}>
                            <TextField type={'password'} className={'userSize'}  name={'username'} value={username}/>
                        </div>
                        <div className={'textFieldAc'}>
                            <TextField type={'password'} className={'userSize'}  name={'email'} value={email}/>
                        </div>
                    </div>
                </Container>
            </form>
        </div>
        <br/>
    </div>
}

export default UserProfile;