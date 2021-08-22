import React, {useEffect, useState} from "react";
import ResultService from "../../services/ResultService";

function ViewResult(props) {
    const resultID = props.match.params.id
    const [eClass,setEClass] = useState('');
    const [eClassType,setEClassType] = useState('');
    const [year,setYear] = useState('');
    const [term,setTerm] = useState('');
    const [examMarks,setExamMarks] = useState([])
    const [examSubjects,setExamSubjects] = useState([])
    const [sGrades,setSGrades] = useState([])

    useEffect(()=>{
        fetchResult().then()
    },[])

    async function fetchResult(){
        await ResultService.getResultsByID(resultID)
            .then(result =>{
                setEClass(result.class.class)
                setEClassType(result.classType.name)
                setYear(result.year)
                setTerm(result.term)
                setExamMarks(result.examMarks)
                setSGrades(result.grades)
                setExamSubjects(result.examSubjects)
            }).catch(err =>{
                console.error(err)
            })
    }

    return <div>
        <div id={'largeVResultDiv'}>
            <div id={'viewRTopTitleDiv'}>
                <label id={'schoolName'}>Gateway International School</label><br/>
                <label id={'vGrade'}>{eClass} {eClassType}</label><br/>
                <label id={'vYear'}>Year {year} - {term}</label>
            </div>
            <div id={'viewStudentDDiv'}>
                <label id={'studentDID'}>StudentID:</label><br/>
                <label id={'studentDID'}>Student Name:</label>
            </div>
            <div id={'secondRViewDiv'}>
                <div id={'ViewVResult'} >
                    <label id={'REFirstViewTitle'}>Subjects</label>
                    {
                        examSubjects.map(subject =>
                            <div id={'viewRDDataInside'}>
                                <label>{subject}</label>
                            </div>
                        )
                    }
                </div>
                <div id={'form-style-marksR'}>
                    <label id={'REViewTitle'}>Marks</label>
                    {
                        examMarks.map(mark =>
                            <div className={'viewRDataInside'}>
                                <label>{mark}</label>
                            </div>
                        )
                    }
                </div>
                <div id={'form-style-examR'} >
                    <label id={'REViewTitle'}>Grade</label>
                    {
                        sGrades.map(grade =>
                            <div className={'viewRDataInside'}>
                                <label>{grade}</label>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
}

export default ViewResult;