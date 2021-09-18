import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import "../../styles/classManagment/ViewClass.css";

export default function ClassListHolder(props){
    const {Class,editClass,handleOpenDeleteAlert} = props

    return <div className="ClassListHolder">
        <div id={"viewMain"}>

            <div id={"viewDiv"}>
                <div id={"viewSmall"}>
                    <label id="ClassLabel"> {Class.class} </label>
                    <label id={"TypeLabel"}> {Class.classType.name} </label>
                    <label id={"TeacherLabel"}>Teacher : {Class.teacher.teacherName} </label>
                </div>
                <div className={"buttonDiv"}>
                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                onClick={() => handleOpenDeleteAlert(Class)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={"buttonDiv"}>
                    <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                onClick={() => editClass(Class)}>
                        <EditIcon/>
                    </IconButton>
                </div>
            </div>
        </div>

    </div>
}