import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageViewIcon from "@material-ui/icons/Pageview";
import React from "react";
import '../../styles/timetableAndResultStyles/CommonManage.css';


export default function ResultListHolder(props) {
    const {Result,editResult,viewResult,handleOpenDeleteAlert} = props

    return <div>
        <div id={'viewMain'}>
            <div id={'viewDiv'}>
                <div id={'viewSmall'}>
                    <label>{Result.class.class} {Result.classType.name}</label>
                    <label id={'yearLabel'}>Year : {Result.year}</label>
                    <label id={'termLabel'}>Term : {Result.term}</label>
                </div>
                <div className={'buttonDiv'}>
                    <IconButton aria-label="pageView" style={{backgroundColor:"transparent"}}
                                onClick={() => handleOpenDeleteAlert(Result)}>
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