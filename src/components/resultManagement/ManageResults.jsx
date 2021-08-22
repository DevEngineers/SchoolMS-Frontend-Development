import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import '../../styles/timetableAndResultStyles/CommonManage.css';
import ResultListHolder from "./ResultListHolder";
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
        fetchResults().then();
    },[]);

    async function fetchResults(){
        await ResultService.getResults()
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

    function viewResult(result){
        let id = result._id;
        history.push(`/viewResult/${id}`);
    }

    function deleteResult(result){
        let id = result._id;
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
                    return <ResultListHolder key={result._id} Result={result} deleteResult={deleteResult}
                                             viewResult={viewResult} editResult={updateResult}/>
                })
            }
        </div>

        </div>
}

export default ManageResults;