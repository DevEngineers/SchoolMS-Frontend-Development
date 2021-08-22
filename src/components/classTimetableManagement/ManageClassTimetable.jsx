import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import ClassTimetableListHolder from "./ClassTimetableListHolder";
import ClassTimetableService from "../../services/ClassTimetableService";
import '../../styles/timetableAndResultStyles/CommonManage.css';
import { useHistory } from "react-router-dom";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageClassTimetable(props){
    const history = useHistory();
    const [classTimetables,setClassTimetables] = useState([]);

    useEffect(() =>{
        fetchClassTimetable().then();
    },[]);

    async function fetchClassTimetable(){
        await ClassTimetableService.getClassTimetable()
            .then(classTimetable =>{
                setClassTimetables(classTimetable);
            }).catch(err =>{
            console.error(err)
        })
    }

    function updateClassTimetable(classTimetable){
        let id = classTimetable._id;
        history.push(`/updateClassTimetable/${id}`);
    }

    function viewClassTimetable(classTimetable){
        let id = classTimetable._id;
        history.push(`/viewClassTimetable/${id}`);
    }

    function deleteClassTimetable(classTimetable){
        let id = classTimetable._id;
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
                /*classTimetable.map(classT =>{
                    let name = classT.class;
                    classTimetable.map(classTimetable =>{
                        if(classTimetable.class === name){
                            return <ClassTimetableListHolder key={classTimetable._id} ClassTimetable={classTimetable}/>
                        }
                    })
                })*/
                classTimetables.map(classTimetable =>{
                    return  <ClassTimetableListHolder key={classTimetable._id} ClassTimetable={classTimetable} deleteClassTimetable={deleteClassTimetable}
                                                      editClassTimetable={updateClassTimetable} viewClassTimetable={viewClassTimetable}/>
                })
            }
        </div>

    </div>
}


export default ManageClassTimetable;