import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";
import "../../styles/classManagment/ViewClass.css"
import {useHistory} from "react-router-dom";
import SubjectService from "../../services/SubjectService";
import SubjectListHolder from "./SubjectListHolder";
import {toast, ToastContainer} from "material-react-toastify";
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
    const [open, setOpen] = useState(false);
    const [deleteSubjectObj, setDeleteSubjectObj] = useState('');

    /**
     * handler to open the alter dialog box and setting up the
     * relevant Class that we going to remove in deleteClassObj state variable
     */
    const handleClickOpen = (subject) => {
        setOpen(true);
        setDeleteSubjectObj(subject);
    };

    /**
     * handler to close the alter dialog box
     */
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() =>{
        fetchSubject().then();
    },[]);

    async function fetchSubject(){
        await SubjectService.getSubjects()
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

    function deleteSubject(){
        let id = deleteSubjectObj._id;
        SubjectService.removeSubject(id)
            .then(res =>{
                if(res.status === 200){
                    handleClose();
                    toast.error("Subject Details is Removed",options)
                    setTimeout(()=>{history.push("/view-subject")},3000)
                }else{
                    handleClose();
                    toast.warning("Something went wrong!!,Try again.",options)
                }
            })
    }

    /**
     * handler to search classes
     */
    function onSearchHandling(e){
        const search = e.target.value;
        if(search){
            SubjectService.getSubjectBySearch(search)
                .then(Subject =>{
                    setSubject(Subject);
                }).catch(err =>{
                console.error(err)
            })
        }else{
            fetchSubject().then();
        }
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
                <TextField type={'text'}  id={'searchInput'} variant="outlined" onChange={(e)=>onSearchHandling(e)} />
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
                <Button onClick={deleteSubject} color="secondary" style={{fontWeight:'bold'}}>
                    Proceed
                </Button>
            </DialogActions>
        </Dialog>

    </div>

}

export default ManageSubjects;