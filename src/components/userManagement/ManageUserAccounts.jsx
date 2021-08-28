import React, {useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import '../../styles/usersStyles/Users.css';
import ResultService from "../../services/ResultService";
import UserService from "../../services/UserService";


/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageUserAccounts(props){
    const [users,setUsers] = useState({});

    useEffect(() =>{
        fetchUsers().then();
    },[]);

    async function fetchUsers(){
        await UserService.getUsers()
            .then(users =>{
                console.log('inside',users)
                setUsers(users);
            }).catch(err =>{
                console.error(err)
            })
    }

    console.log(users)

    return <div>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>USER ACCOUNTS</label>
            </div>
        </div>
        <div id={'tblDiv'}>
            <table id={'styled-table'}>
                <thead>
                <tr>
                    <td className={'thUData'}>Username</td>
                    <td className={'thUData'}>Email</td>
                    <td className={'thUData'}>School Branch</td>
                    <td className={'thUData'}>Account Type</td>
                    <td className={'thUData'}>Status</td>
                    <td className={'thUDataBtn'}>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user =>
                        <tr key={user._id}>
                            <td className={'tdUData'}>{user.username}</td>
                            <td className={'tdUData'}>{user.email}</td>
                            <td className={'tdUData'}>{user.branch}</td>
                            <td className={'tdUData'}>{user.userType}</td>
                            <td className={'tdUData'}>{user.status}</td>
                            <td className={'tdUDataBtn'}>
                                <Button variant="contained" color="primary">Reset Password</Button>&nbsp;&nbsp;
                                <Button variant="contained" color="primary">Deactivate</Button>&nbsp;&nbsp;
                                <Button variant="contained" color="secondary">Remove</Button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    </div>
}

export default ManageUserAccounts;