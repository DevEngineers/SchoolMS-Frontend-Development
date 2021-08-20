import React, {useState} from "react";
import {TextField} from "@material-ui/core";
import '../../styles/timetableAndResultStyles/CommonView.css';
import ResultListHolder from "./ResultListHolder";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageResults(props){
    const [classTimetable,setClassTimetable] = useState([])

    return <div>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>STUDENTS RESULTS</label>
            </div>
        </div>
        <div>
            <div id={'searchDiv'}>
                <TextField type={'text'}  id={'searchInput'} variant="outlined"/>
                <input type={'submit'} value={'Search'} id={'searchBtn'}/>
            </div>
        </div>
        <div>
            <ResultListHolder/>
        </div>

        </div>
}

export default ManageResults;