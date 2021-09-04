import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import '../../styles/subjectManagment/ViewSubject.css';

export default function SubjectListHolder(props){
    const {subject,editSubject,deleteSubject} = props

    return <div className="SubjectListHolder">
        <div id={'viewMain'}>

            <div id={'viewDiv'}>
                <div id={'viewSmall'}>
                    <label id="ClassLabel">Class : {subject.class.class} </label>
                    <label id={'SubjectLabel'}>Subject : {subject.subject} </label>
                    <label id={'TeacherLabel'}>Teacher : {subject.teacher.teacherName} </label>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                onClick={() => deleteSubject(subject)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                onClick={() => editSubject(subject)}>
                        <EditIcon/>
                    </IconButton>
                </div>
            </div>
        </div>

    </div>

}