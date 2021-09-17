import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import moment from "moment"
import '../../styles/AttendanceManagment/ViewAttendance.css';

export default function SubjectListHolder(props){
    const {attendance,editAttendance,handleOpenDeleteAlert} = props

    return <div className="AttendanceListHolder">
        <div id={'viewMain'}>

            <div id={'viewDiv'}>
                <div id={'viewSmall'}>
                    <label id="ClassLabel"> {attendance.class.class} </label>
                    <label id={'SubjectLabel'}> {attendance.classType.name} </label>
                    <label id={'TeacherLabel'}>Date : {moment(attendance.date).format("DD/MM/YYYY")} </label>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                onClick={() => handleOpenDeleteAlert(attendance)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                onClick={() => editAttendance(attendance)}>
                        <EditIcon/>
                    </IconButton>
                </div>
            </div>
        </div>

    </div>

}