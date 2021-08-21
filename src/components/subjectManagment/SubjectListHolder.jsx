import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import '../../styles/subjectManagment/ViewSubject.css';

export default function SubjectListHolder(props){
    const {Class,editClass,deleteClass} = props

    return <div className="SubjectListHolder">
        <div id={'viewMain'}>

            <div id={'viewDiv'}>
                <div id={'viewSmall'}>
                    <label id="ClassLabel">Class : 10 </label>
                    <label id={'SubjectLabel'}>Subject : ICT </label>
                    <label id={'TeacherLabel'}>Teacher : Sunil </label>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                onClick={() => deleteClass(Class)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                onClick={() => editClass(Class)}>
                        <EditIcon/>
                    </IconButton>
                </div>
            </div>
        </div>

    </div>

}