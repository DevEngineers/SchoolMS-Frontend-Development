import React, {Component} from 'react';
import {Box, Checkbox, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import '../../styles/AttendanceManagment/Attendance.css';
import {toast} from "material-react-toastify";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

const students =[
    { Id: '0001', name: 'Nimal Kumar', class:'10' , classType:'A' },
    { Id: '0002', name: 'Pasan Bandara', class:'10' , classType:'A'},
    { Id: '0003', name: 'Kasun kumar', class:'10' , classType:'A' },
    { Id: '0004', name: 'Sunil sunil', class:'10' , classType:'A'},
    { Id: '0005', name: 'Tharuni bandara', class:'10' , classType:'A'},
    { Id: '0006', name: 'Kasun Vimal', class:'10' , classType:'A'},
]

//Toast Message Configuration
const options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false
}

class UpdateAttendance extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UpdateAttendance;