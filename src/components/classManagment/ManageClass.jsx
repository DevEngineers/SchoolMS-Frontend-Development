import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import ClassListHolder from "./ClassListHolder";
import '../../styles/classManagment/ViewClass.css'
import {useHistory} from "react-router-dom";
import ClassService from "../../services/ClassService";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

function ManageClass(props){
    const history = useHistory();
    const [Classes,setClass] = useState([])

    useEffect(() =>{
        fetchClass();
    },[]);

    function fetchClass(){
        ClassService.getClasses()
            .then(Classes =>{
                setClass(Classes);
            }).catch(err =>{
            console.error(err)
        })
    }

    function updateClass(Classes){
        console.log("class",Classes);
        let id = Classes._id;
        history.push(`/update-class/${id}`);
    }

    return <div className={"ManageClass-Section"}>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}> LIST OF CLASSES </label>
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
                Classes.map(Class =>{
                    return <ClassListHolder key={Class._id} Class={Class} editClass={updateClass}/>
                })
            }
        </div>
    </div>

}

export default ManageClass;