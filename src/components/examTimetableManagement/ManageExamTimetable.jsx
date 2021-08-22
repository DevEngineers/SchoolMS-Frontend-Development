import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import ExamTimetableListHolder from "./ExamTimetabelListHolder";
import ExamTimetableService from "../../services/ExamTimetableService";
import { useHistory } from "react-router-dom";
import '../../styles/timetableAndResultStyles/CommonManage.css';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageExamTimetable(props){
    const history = useHistory();
    const [examTimetables,setExamTimetables] = useState([])

    useEffect(() =>{
        fetchExamTimetable().then();
    },[]);

    async function fetchExamTimetable(){
        await ExamTimetableService.getExamTimetable()
            .then(examTimetable =>{
                console.log(examTimetable)
                setExamTimetables(examTimetable);
            }).catch(err =>{
            console.error(err)
        })
    }

    function updateExamTimetable(examTimetable){
        let id = examTimetable._id;
        history.push(`/updateExamTimetable/${id}`);
    }

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
            {
                examTimetables.map(examTimetable =>{
                    return <ExamTimetableListHolder ExamTimetable={examTimetable} editExamTimetable={updateExamTimetable} />
                })
            }

        </div>

    </div>
}


export default ManageExamTimetable;