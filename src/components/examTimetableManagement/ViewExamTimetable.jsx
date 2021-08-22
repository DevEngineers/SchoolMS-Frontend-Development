import React, {useEffect, useState} from "react";
import ClassTimetableService from "../../services/ClassTimetableService";
import ResultService from "../../services/ResultService";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import {IconButton, MenuItem} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";


function ViewExamTimetable(props) {
    const [eClass,setEClass] = useState('');
    const [eClassType,setEClassType] = useState('');
    const [year,setYear] = useState('');
    const [term,setTerm] = useState('');
    const [startSlot,setStartSlot] = useState([])
    const [endSlot,setEndSlot] = useState([])
    const [examDates,setExamDates] = useState([])
    const [examSubjects,setExamSubjects] = useState([])

    useEffect(()=>{
        fetchExamTimetable().then()
    },[])

    async function fetchExamTimetable(){
        await ResultService.getResultsByID('612021f9301790055ccb0573')
            .then(examTimetable =>{
                console.log(examTimetable)
                setEClass(examTimetable.class.class)
                setEClassType(examTimetable.classType)
                setYear(examTimetable.year)
                setTerm(examTimetable.term)
                setStartSlot(examTimetable.startSlot)
                setEndSlot(examTimetable.endSlot)
                setExamDates(examTimetable.examDates)
                setExamSubjects(examTimetable.examSubjects)
            }).catch(err =>{
            console.error(err)
        })
    }

    return <div>
        <div id={'secondDiv'}>
            <div id={'form-style-examR'}>
                <label id={'timeSlotETitle'}>Dates</label>
                {
                    examDates.map(date =>
                        <div className={'dateInput'} key={date}>
                            <label>{date}</label>
                        </div>
                    )
                }
            </div>
            <div id={'form-style-timeSlotE'}>
                <label id={'timeSlotTitle'}>Time</label>
                {
                    startSlot.map((el,i) =>
                        <div key={i}>
                            <TextField type="time" value={el||''}/>
                            <TextField  type="time" value={endSlot[i] || ''}/>
                        </div>
                    )
                }
            </div>
            <div id={'form-style-examR'} >
                <div id={'form-style-examR-inside'}>
                    <label id={'timeSlotTitle'}>Subjects</label>
                    {
                        examSubjects.map((el, i) =>
                            <div key={i}>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                        value={el || ''} className={'daySize'} >
                                </Select>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
}

export default ViewExamTimetable;