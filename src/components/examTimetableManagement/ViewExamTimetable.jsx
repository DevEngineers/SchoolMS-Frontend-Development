import React, {useEffect, useState} from "react";
import ClassTimetableService from "../../services/ClassTimetableService";
import ResultService from "../../services/ResultService";


function ViewExamTimetable(props) {
    const [eClass,setEClass] = useState('');
    const [eClassType,setEClassType] = useState('');
    const [year,setYear] = useState('');
    const [term,setTerm] = useState('');
    const [startSlot,setStartSlot] = useState([])
    const [endSlot,setEndSlot] = useState([])
    const [examDates,setExamDates] = useState([])
    const [examSubjects,setExamSubjects] = useState([])
    const [subjects,setSubjects] = useState([])

    useEffect(()=>{

    })

    async function fetchClassTimetable(){
        await ResultService.getResultsByID('612021f9301790055ccb0573')
            .then(classTimetable =>{
                setEClass(classTimetable.class.class)
                setEClassType(classTimetable.classType)
                setYear(classTimetable.year)
                setTerm(c)
                setStartSlot(classTimetable.startSlot)
                setEndSlot(classTimetable.endSlot)
                setMonday(classTimetable.monday)
                setTuesday(classTimetable.tuesday)
                setWednesday(classTimetable.wednesday)
                setThursday(classTimetable.thursday)
                setFriday(classTimetable.friday)
            }).catch(err =>{
            console.error(err)
        })
    }
}

export default ViewExamTimetable;