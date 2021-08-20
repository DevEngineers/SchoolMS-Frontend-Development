import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageViewIcon from "@material-ui/icons/Pageview";
import React from "react";
import '../../styles/timetableAndResultStyles/CommonView.css'

export default function ClassTimetableListHolder(props) {
    const {ClassTimetable,editClassTimetable,viewClassTimetable,deleteClassTimetable} = props

    return <div>
        <div id={'viewMain'}>
            <div id={'viewDiv'}>
                <div id={'viewSmall'}>
                    <label>Grade 11 {ClassTimetable.classType} Timetable</label>
                    <label id={'yearLabel'}>Year : {ClassTimetable.year}</label>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="pageView" style={{backgroundColor:"transparent"}}
                                onClick={() => deleteClassTimetable(ClassTimetable)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                onClick={() => editClassTimetable(ClassTimetable)}>
                        <EditIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                onClick={() => viewClassTimetable(ClassTimetable)}>
                        <PageViewIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    </div>
}