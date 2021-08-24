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
    constructor(props){
        super(props);
        this.state= {
            rDate:'',
            rClass:'',
            rClassType:'',

            allAttendance:[],
            studentID:['0001', '0002', '0003','0004', '0005','0006' ],
            student:['Nimal Kumar', 'Pasan Bandara', 'Kasun kumar','Sunil sunil', 'Tharuni bandara','Kasun Vimal' ],
            attendance:[1, 1, 1, 1, 0, 1],

            classType:['A','B','C','D','E'],
            class:['8', '9', '10', '11', '12']
        }
    }

    onCheckBox(event){
        const{value} = event.target;
        console.log(value);

        // if(student.includes(value) === true){
        //     let index = student.indexOf(value);
        //     student.splice(index,1)
        //     console.log('true students',student);
        //     return
        // }
        //
        // if(student.includes(value) === false){
        //     student.push(value);
        //     console.log('false students',student);
        // }

    }

    /**
     * this function is to capture data in the input fields
     */
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UpdateAttendance;