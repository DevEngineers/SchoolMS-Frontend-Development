import React, {useState} from "react";
import {Container, IconButton, MenuItem, TextField} from "@material-ui/core";
import '../../styles/usersStyles/Users.css';
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function UserProfile() {
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [branch,setBranch] = useState('');
    const [enableEdit,setEnableEdit] = useState(false)


    function enableEditFunction(value){
        setEnableEdit(value)
    }

    return <div>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>USER PROFILE</label>
            </div>
        </div>
        <div id={'largeUserPDiv'}>
            <form>
                {
                    enableEdit === false?(
                        <div id={'uPEdit'}>
                            <IconButton aria-label="edit" style={{backgroundColor:"transparent"}} onClick={() => enableEditFunction(true)}>
                                <EditIcon/>
                            </IconButton>
                        </div>
                    ):(
                        <div id={'uPEdit'}>
                            <IconButton aria-label="edit" style={{backgroundColor:"transparent"}} onClick={() => enableEditFunction(false)}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    )
                }
                <Container id={'form-style-userProfile'}>
                    <div id={'userLabelEDiv'}>
                        <label className={'UpLabel'}>Username</label>
                        <label className={'UpLabel'}>Email</label>
                        <label className={'UpLabel'}>Branch</label>
                        <label className={'UpLabel'}>Account Type</label>
                    </div>
                    <div id={'userPro'}>
                        {
                            enableEdit === true?(
                                <div>
                                    <div className={'textFieldUp'}>
                                        <TextField type={'text'} className={'userSize'}  name={'username'} value={username}
                                                   onChange={event => setUsername(event.target.value)}/>
                                    </div>
                                    <div className={'textFieldUp'}>
                                        <TextField type={'text'} className={'userSize'}  name={'email'} value={email}
                                                   onChange={event => setEmail(event.target.value)}/>
                                    </div>
                                    <label className={'upValLabel'}>Colombo</label><br/>
                                    <label className={'upValLabel'}>Administration Staff</label>
                                    <div id={'uPEditBtn'}>
                                        <Button variant="contained" color="secondary" style={{backgroundColor:'#36988c'}}>
                                            Update Profile
                                        </Button>
                                    </div>
                                </div>
                            ):(
                                <div id={'viewDeUpDiv'}>
                                    <label className={'upVal2Label'}>Saman Kuamra</label>
                                    <label className={'upVal2Label'}>Saman@gmail.com</label>
                                    <label className={'upVal2Label'}>Colombo</label>
                                    <label className={'upVal2Label'}>Administration Staff</label>
                                </div>
                            )
                        }
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
                        <label className={'UpPLabel'}>New Password</label>
                        <label className={'UpPLabel'}>Re-enter Password</label>
                    </div>
                    <div id={'userPro'}>
                        <div className={'textFieldUp'}>
                            <TextField type={'password'} className={'userSize'}  name={'password'} onChange={event => setPassword(event.target.value)} value={password}/>
                        </div>
                        <div className={'textFieldUp'}>
                            <TextField type={'password'} className={'userSize'}  name={'rePassword'}/>
                        </div>
                        <div id={'uPEditPBtn'}>
                            <Button variant="contained" color="secondary" style={{backgroundColor:'#36988c'}}>
                                Update Password
                            </Button>
                        </div>
                    </div>
                </Container>
            </form>
        </div>
        <br/>
    </div>
}

export default UserProfile;