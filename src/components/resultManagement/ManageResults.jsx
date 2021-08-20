import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import '../../styles/timetableAndResultStyles/CommonView.css';
import ResultListHolder from "./ResultListHolder";
import ExamTimetableService from "../../services/ExamTimetableService";
import ResultService from "../../services/ResultService";
import {useHistory} from "react-router-dom";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


function ManageResults(props){
    const history = useHistory();
    const [results,setResults] = useState([])

    useEffect(() =>{
        fetchResults();
    },[]);

    function fetchResults(){
        ResultService.getResults()
            .then(results =>{
                setResults(results);
            }).catch(err =>{
            console.error(err)
        })
    }

    function updateResult(result){
        let id = result._id;
        history.push(`/updateResults/${id}`);
    }

    return <div>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>STUDENTS RESULTS</label>
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
                results.map(result =>{
                    return <ResultListHolder key={result._id} Result={result} editResult={updateResult}/>
                })
            }
        </div>

        </div>
}

export default ManageResults;