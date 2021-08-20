import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import ClassTimetableListHolder from "./ClassTimetableListHolder";
import ClassTimetableService from "../../services/ClassTimetableService";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageClassTimetable(props){
    const [classTimetable,setClassTimetable] = useState([]);

    useEffect(() =>{
        fetchClassTimetable();
    },[]);

    function fetchClassTimetable(){
        ClassTimetableService.getClassTimetable()
            .then(classTimetable =>{
                console.log(classTimetable,)
                setClassTimetable(classTimetable);
            }).catch(err =>{
            console.error(err)
        })
    }

    return <div>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>CLASS TIMETABLES</label>
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
                classTimetable.map(classTimetable =>{
                    return  <ClassTimetableListHolder key={classTimetable._id} ClassTimetable={classTimetable}/>
                })
            }

        </div>

    </div>
}


export default ManageClassTimetable;