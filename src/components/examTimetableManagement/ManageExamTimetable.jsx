import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import ExamTimetableListHolder from "./ExamTimetabelListHolder";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageClassTimetable(props){
    const [examTimetable,setExamTimetable] = useState([])

    return <div>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>EXAM TIMETABLES</label>
            </div>
        </div>
        <div>
            <div id={'searchDiv'}>
                <TextField type={'text'}  id={'searchInput'} variant="outlined"/>
                <input type={'submit'} value={'Search'} id={'searchBtn'}/>
            </div>
        </div>
        <div>
            <ExamTimetableListHolder />
        </div>

    </div>
}


export default ManageClassTimetable;