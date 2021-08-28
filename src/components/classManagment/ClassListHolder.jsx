import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import '../../styles/classManagment/ViewClass.css';

export default function ClassListHolder(props){
    const {Class,editClass,deleteClass} = props

    return <div className="ClassListHolder">
        <div id={'viewMain'}>

            <div id={'viewDiv'}>
                <div id={'viewSmall'}>
                    <label id="ClassLabel">Class : {Class.class} </label>
                    <label id={'TypeLabel'}>Class Type : {Class.classType} </label>
                    <label id={'TeacherLabel'}>Teacher : {Class.teacher} </label>
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