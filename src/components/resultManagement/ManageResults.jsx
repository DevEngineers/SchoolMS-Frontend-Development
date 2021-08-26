import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import '../../styles/timetableAndResultStyles/CommonManage.css';
import ResultListHolder from "./ResultListHolder";
import ResultService from "../../services/ResultService";
import {useHistory} from "react-router-dom";
import {toast, ToastContainer} from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

//Toast Message Configuration
const options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false
}

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
        ResultService.removeResult(id)
            .then(res =>{
                if(res.status === 200){
                    toast.error("Student Result is Removed",options)
                    setTimeout(()=>{this.props.history.push("/manageResults")},3000)
                }else{
                    toast.warning("Something went wrong!!,Try again.",options)
                }
            })
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
            {/*<div>
                <label id={'headingLabel'}>Student ID: ST0012</label><br/>
                <label id={'headingLabel'}>Student Name: Nimal Kumara </label>
            </div>*/}
            {
                results.map(result =>{
                    return <ResultListHolder key={result._id} Result={result} deleteResult={deleteResult}
                                             viewResult={viewResult} editResult={updateResult}/>
                })
            }
        </div>
        <div style={{height:'150px'}}/>
        </div>
}

export default ManageResults;