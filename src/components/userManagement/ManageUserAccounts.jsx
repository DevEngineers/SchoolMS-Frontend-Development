import React from "react";
import Button from "@material-ui/core/Button";
import '../../styles/usersStyles/Users.css';


/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageUserAccounts(props){

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
                    <tr>
                        <td className={'tdUData'}>Kamal K</td>
                        <td className={'tdUData'}>Kamal@gmail.com</td>
                        <td className={'tdUData'}>Kandy</td>
                        <td className={'tdUData'}>Administration staff</td>
                        <td className={'tdUData'}>Active</td>
                        <td className={'tdUDataBtn'}>
                            <Button variant="contained" color="primary">Reset Password</Button>&nbsp;&nbsp;
                            <Button variant="contained" color="primary">Deactivate</Button>&nbsp;&nbsp;
                            <Button variant="contained" color="secondary">Remove</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className={'tdUData'}>Saman </td>
                        <td className={'tdUData'}>Saman@gmail.com</td>
                        <td className={'tdUData'}>Colombo</td>
                        <td className={'tdUData'}>Examination staff</td>
                        <td className={'tdUData'}>Deactivate</td>
                        <td className={'tdUDataBtn'}>
                            <Button variant="contained" color="primary">Reset Password</Button>&nbsp;&nbsp;
                            <Button variant="contained" color="primary">Deactivate</Button>&nbsp;&nbsp;
                            <Button variant="contained" color="secondary">Remove</Button>
                        </td>
                    </tr>
                    <tr>
                        <td className={'tdUData'}>Nimal N</td>
                        <td className={'tdUData'}>Nimal@gmail.com</td>
                        <td className={'tdUData'}>Kandy</td>
                        <td className={'tdUData'}>Examination staff</td>
                        <td className={'tdUData'}>Active</td>
                        <td className={'tdUDataBtn'}>
                            <Button variant="contained" color="primary">Reset Password</Button>&nbsp;&nbsp;
                            <Button variant="contained" color="primary">Deactivate</Button>&nbsp;&nbsp;
                            <Button variant="contained" color="secondary">Remove</Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
}

export default ManageUserAccounts;