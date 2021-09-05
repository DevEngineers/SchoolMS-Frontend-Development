import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";
import '../../styles/classManagment/ViewClass.css'
import {useHistory} from "react-router-dom";
import SubjectService from "../../services/SubjectService";
import SubjectListHolder from "./SubjectListHolder";
import {ToastContainer} from "material-react-toastify";
import Button from "@material-ui/core/Button";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
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

function ManageSubjects(props){
    const history = useHistory();
    const [Subjects,setSubject] = useState([])

    /**
     * handler to open the alter dialog box and setting up the
     * relevant Class that we going to remove in deleteClassObj state variable
     */
    const handleClickOpen = (Class) => {
        setOpen(true);
        setDeleteClassObj(Class);
    };

    /**
     * handler to close the alter dialog box
     */
    const handleClose = () => {
        setOpen(false);
    };

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
        <ToastContainer/>
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
                    return <SubjectListHolder key={subject._id} subject={subject} editSubject={updateSubject}
                                              handleOpenDeleteAlert={handleClickOpen}/>
                })
            }
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Alert</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to remove this record
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" style={{fontWeight:'bold'}}>
                    Cancel
                </Button>
                <Button onClick={deleteClass} color="secondary" style={{fontWeight:'bold'}}>
                    Proceed
                </Button>
            </DialogActions>
        </Dialog>

    </div>

}

export default ManageSubjects;