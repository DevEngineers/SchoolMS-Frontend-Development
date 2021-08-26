import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageViewIcon from "@material-ui/icons/Pageview";
import React from "react";
import '../../styles/timetableAndResultStyles/CommonManage.css';

export default function ExamTimetableListHolder(props) {
    const {ExamTimetable,editExamTimetable,viewExamTimetable,deleteExamTimetable} = props

    return <div>
        <div id={'viewMain'}>
            <div id={'viewDiv'}>
                <div id={'viewSmall'}>
                    <label>{ExamTimetable.class.class} Exam Timetable</label>
                    <label id={'yearLabel'}>Year : {ExamTimetable.year}</label>
                    <label id={'termLabel'}>Term : {ExamTimetable.term}</label>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="pageView" style={{backgroundColor:"transparent"}}
                                onClick={() => deleteExamTimetable(ExamTimetable)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                onClick={() => editExamTimetable(ExamTimetable)}>
                        <EditIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                onClick={() => viewExamTimetable(ExamTimetable)}>
                        <PageViewIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    </div>
}