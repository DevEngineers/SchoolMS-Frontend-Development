import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageViewIcon from "@material-ui/icons/Pageview";
import React from "react";
import '../../styles/timetableAndResultStyles/CommonManage.css';


export default function ResultListHolder(props) {
    const {Result,editResult,viewResult,deleteResult} = props

    return <div>
        <div id={'viewMain'}>
            <div>
                <label id={'headingLabel'}>Student ID:</label><br/>
                <label id={'headingLabel'}>Student Name:</label>
            </div>
            <div id={'viewDiv'}>
                <div id={'viewSmall'}>
                    <label>Grade 11 Class Timetable</label>
                    <label id={'yearLabel'}>Year : 2021</label>
                    <label id={'termLabel'}>Term : 1st Term</label>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="pageView" style={{backgroundColor:"transparent"}}
                                onClick={() => deleteResult(Result)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                onClick={() => editResult(Result)}>
                        <EditIcon/>
                    </IconButton>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                onClick={() => viewResult(Result)}>
                        <PageViewIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    </div>
}