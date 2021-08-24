import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";
import AttendanceListHolder from "./AttendanceListHolder";
import '../../styles/AttendanceManagment/ViewAttendance.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

function ManageAttendance(props){
    const history = useHistory();
    const [attendance,setAttendance] = useState([])

    useEffect(() =>{
        fetchAttendance();
    },[]);

    function fetchAttendance(){
        AttendanceService.getAttendances()
            .then(attendance =>{
                setAttendance(attendance);
            }).catch(err =>{
            console.error(err)
        })
    }

    function updateAttendance(attendance){
        let id = attendance._id;
        history.push(`/update-attendance/${id}`);
    }

    return <div className={"ManageAttendance-Section"}>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}> LIST OF ATTENDANCE </label>
            </div>
        </div>
        <div>
            <div id={'searchDiv'}>
                <TextField type={'text'}  id={'searchInput'} variant="outlined"/>
                <input type={'submit'} value={'Search'} id={'searchBtn'}/>
            </div>
        </div>
        <div>
            {
                attendance.map(Atte =>{
                    return <AttendanceListHolder key={Atte._id} attendance={Atte} editAttendance={updateAttendance}/>
                })
            }
        </div>
    </div>

}

export default ManageAttendance;