import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import ExamTimetableListHolder from "./ExamTimetabelListHolder";
import ExamTimetableService from "../../services/ExamTimetableService";
import { useHistory } from "react-router-dom";
import '../../styles/timetableAndResultStyles/CommonManage.css';
import {toast, ToastContainer} from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

//Toast Message Configuration
const options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false
}

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

    function viewExamTimetable(examTimetable){
        let id = examTimetable._id;
        history.push(`/viewExamTimetable/${id}`);
    }

    function deleteExamTimetable(examTimetable){
        let id = examTimetable._id;
        ExamTimetableService.removeExamTimetable(id)
            .then(res =>{
                if(res.status === 200){
                    toast.error("Exam Timetable is Removed",options)
                    setTimeout(()=>{this.props.history.push("/manageExamTimetable")},3000)
                }else{
                    toast.warning("Something went wrong!!,Try again.",options)
                }
            })
    }

    return <div>
        <ToastContainer/>
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
            {/*<div>
                <label id={'headingLabel'}>{ExamTimetable.class.class}</label>
            </div>*/}
            {
                examTimetables.map(examTimetable =>{
                    return <ExamTimetableListHolder ExamTimetable={examTimetable} deleteExamTimetable={deleteExamTimetable}
                                            viewExamTimetable={viewExamTimetable} editExamTimetable={updateExamTimetable} />
                })
            }

        </div>
    </div>
}


export default ManageExamTimetable;