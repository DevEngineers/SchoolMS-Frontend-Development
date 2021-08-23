import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import '../../styles/classManagment/ViewClass.css'
import {useHistory} from "react-router-dom";
import SubjectService from "../../services/SubjectService";
import SubjectListHolder from "./SubjectListHolder";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

function ManageSubjects(props){
    const history = useHistory();
    const [Subjects,setSubject] = useState([])

    useEffect(() =>{
        fetchSubject();
    },[]);

    function fetchSubject(){
        SubjectService.getSubjects()
            .then(Subjects =>{
                setSubject(Subjects);
            }).catch(err =>{
            console.error(err)
        })
    }

    function updateSubject(Subjects){
        let id = Subjects._id;
        history.push(`/update-subject/${id}`);
    }

    return <div className={"ManageSubject-Section"}>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}> LIST OF SUBJECTS </label>
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
                Subjects.map(subject =>{
                    return <SubjectListHolder key={subject._id} subject={subject} editSubject={updateSubject}/>
                })
            }
        </div>
    </div>

}

export default ManageSubjects;