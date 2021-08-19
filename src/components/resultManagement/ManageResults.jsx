import React, {useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PageViewIcon from '@material-ui/icons/Pageview';
import EditIcon from '@material-ui/icons/Edit';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageResults(props){
    const [classTimetable,setClassTimetable] = useState([])

    return <div>
        <div id={'searchDiv'}>
            <TextField type={'text'}/>
            <input type={'submit'} value={'Search'}/>
        </div>
        <div id={'viewDiv'}>
            <div>
                    <label>Grade 11 Class Timetable</label>
                    <label>Year : 2021</label>
            </div>
            <div>
                <IconButton aria-label="pageView" style={{backgroundColor:"transparent"}}>
                    <PageViewIcon/>
                </IconButton>
            </div>
            <div>
                <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}>
                    <EditIcon/>
                </IconButton>
            </div>
            <div>
                <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}>
                    <DeleteIcon/>
                </IconButton>
            </div>
        </div>

        </div>
}

export default ManageResults;