import React, {useEffect, useState} from "react";
import ExamTimetableService from "../../services/ExamTimetableService";
import '../../styles/timetableAndResultStyles/CommonView.css';


function ViewExamTimetable(props) {
    const examID = props.match.params.id
    const [eClass,setEClass] = useState('');
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
        await ExamTimetableService.getExamTimetableByID(examID)
            .then(examTimetable =>{
                setEClass(examTimetable.class.class)
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
        <div id={'largeVExamDiv'}>
            <div id={'viewETopTitleDiv'}>
                <label id={'schoolName'}>Gateway International School</label><br/>
                <label id={'vGrade'}>{eClass}</label><br/>
                <label id={'vYear'}>Year {year} - {term}</label>
            </div>
            <div id={'secondEViewDiv'}>
                <div id={'viewEData'}>
                    <label id={'REFirstViewTitle'}>Dates</label>
                    {
                        examDates.map(date =>
                            <div id={'viewEDDataInside'}>
                                <label>{date}</label>
                            </div>
                        )
                    }
                </div>
                <div id={'viewTimeData'}>
                    <label id={'REViewTitle'}>Time</label>
                    {
                        startSlot.map((start,i) =>
                            <div key={i}  className={'viewEDataInside'}>
                                <label>{start}</label>
                                <label> - </label>
                                <label>{endSlot[i]}</label>
                            </div>
                        )
                    }
                </div>
                <div id={'viewEData'} >
                        <label id={'REViewTitle'}>Subjects</label>
                        {
                            examSubjects.map(subject =>
                                <div  className={'viewEDataInside'}>
                                    <label>{subject}</label>
                                </div>
                            )
                        }
                </div>
            </div>
        </div>
    </div>
}

export default ViewExamTimetable;