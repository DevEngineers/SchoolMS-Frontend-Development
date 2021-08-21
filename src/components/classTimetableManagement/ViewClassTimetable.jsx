import React, {useEffect, useState} from "react";
import ClassTimetableService from "../../services/ClassTimetableService";
import '../../styles/timetableAndResultStyles/CommonView.css';

function ViewClassTimetable(props) {
    const [timetableID,setTimetableID] = useState('')
    const [startSlot,setStartSlot] = useState([])
    const [endSlot,setEndSlot] = useState([])
    const [monday,setMonday] = useState([])
    const [tuesday,setTuesday] = useState([])
    const [wednesday,setWednesday] = useState([])
    const [thursday,setThursday] = useState([])
    const [friday,setFriday] = useState([])
    const [sClass,setSClass] = useState('')
    const [sClassType,setSClassType] = useState('')
    const [year,setYear] = useState('')

    useEffect(() =>{
            fetchClassTimetable()
    },[]);

     function fetchClassTimetable(){
         ClassTimetableService.getClassTimetableByID('611ded3b4cac520950887a5c')
            .then(classTimetable =>{
                console.log(classTimetable)
                setSClass(classTimetable.class.class)
                setSClassType(classTimetable.classType)
                setYear(classTimetable.year)
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

    return <div>
        <div id={'largeViewDiv'}>
            <div id={'viewTopTitleDiv'}>
                <label id={'schoolName'}>Gateway International School</label>
                <label>{sClass} {sClassType}</label>
                <label>Year {year}</label>
            </div>
            <div id={'viewCTTimeSlot'}>
            <label id={'timeSlotTitle'}>Time Slot</label>
            {
                startSlot.map((sTime,i) =>
                    <div key={i}>
                        {
                            (sTime === '10:30' && i === 4)?(
                                <div id={'timesCTView'}>
                                    <label>{sTime}</label>
                                    <label> - </label>
                                    <label>{endSlot[i]}</label>
                                </div>
                            ):(
                                <div id={'timeSlotLabelsDiv'}>
                                    <label>{sTime}</label>
                                    <label> - </label>
                                    <label>{endSlot[i]}</label>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
            <div id={'viewCTDaySubMain'}>
            <div id={'viewCTDaySub'}>
                <label id={'dayViewTitle'}>Monday</label>
                {
                    monday.map((monday, i) =>
                        <div key={i}>
                            {
                                (monday === 'interval')?(
                                    <div>
                                        <div id={'intervalCTView'}>interval</div>
                                        <div id={'intervalCTViewDiv'}>INTERVAL</div>
                                    </div>
                                ):(
                                    <div id={'subjectLabelsDiv'}>
                                        <label>{monday}</label>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div id={'viewCTDaySub'}>
                <label id={'dayViewTitle'}>Tuesday</label>
                {
                    tuesday.map((tuesday, i) =>
                        <div key={i}>
                            {
                                (tuesday === 'interval')?(
                                    <div>
                                        <div id={'intervalCTView'}>interval</div>
                                    </div>
                                ):(
                                    <div id={'subjectLabelsDiv'}>
                                        <label>{tuesday}</label>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div id={'viewCTDaySub'}>
                <label id={'dayViewTitle'}>Wednesday</label>
                {
                    wednesday.map((wednesday, i) =>
                        <div key={i}>
                            {
                                (wednesday === 'interval')?(
                                    <div>
                                        <div id={'intervalCTView'}>interval</div>
                                    </div>
                                ):(
                                    <div id={'subjectLabelsDiv'}>
                                        <label>{wednesday}</label>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div id={'viewCTDaySub'}>
                <label id={'dayViewTitle'}>Thursday</label>
                {
                    thursday.map((thursday, i) =>
                        <div key={i}>
                            {
                                (thursday === 'interval')?(
                                    <div>
                                        <div id={'intervalCTView'}>interval</div>
                                    </div>
                                ):(
                                    <div id={'subjectLabelsDiv'}>
                                        <label>{thursday}</label>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
            <div id={'viewCTDaySub'}>
                <label id={'dayViewTitle'}>Friday</label>
                {
                    friday.map((friday, i) =>
                        <div key={i}>
                            {
                                (friday === 'interval')?(
                                    <div>
                                        <div id={'intervalCTView'}>interval</div>
                                    </div>
                                ):(
                                    <div id={'subjectLabelsDiv'}>
                                        <label>{friday}</label>
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </div>
        </div>
        </div>
    </div>
}
export default ViewClassTimetable;