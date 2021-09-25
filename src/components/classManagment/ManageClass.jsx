import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";
import ClassListHolder from "./ClassListHolder";
import "../../styles/classManagment/ViewClass.css";
import {useHistory} from "react-router-dom";
import ClassService from "../../services/ClassService";
import Button from "@material-ui/core/Button";
import {toast, ToastContainer} from "material-react-toastify";

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

function ManageClass(props){
    const history = useHistory();
    const [Classes,setClass] = useState([]);
    const [open, setOpen] = useState(false);
    const [deleteClassObj, setDeleteClassObj] = useState('');

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
        fetchClass().then();
    },[]);

    async function fetchClass(){
        await ClassService.getClasses()
            .then(Classes =>{
                setClass(Classes);
            }).catch(err =>{
            console.error(err)
        })
    }

    function updateClass(Classes){
        let id = Classes._id;
        history.push(`/update-class/${id}`);
    }

    function deleteClass(){
        let id = deleteClassObj._id;
        ClassService.removeClass(id)
            .then(res =>{
                if(res.status === 200){
                    handleClose();
                    toast.error("Class Details is Removed",options)
                    setTimeout(()=>{history.push("/view-class")},3000)
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
            ClassService.getClassBySearch(search)
                .then(Class =>{
                    setClass(Class);
                }).catch(err =>{
                    console.error(err)
                })
        }else{
            fetchClass().then();
        }
    }

    return <div className={"ManageClass-Section"}>
        <ToastContainer/>
        <div>
            <div className={"box"}>
                <label className={"custom-underline"}> LIST OF CLASSES </label>
            </div>
        </div>
        <div>
            <div id={"searchDiv"}>
                <TextField type={"text"}  id={"searchInput"} variant="outlined" onChange={(e)=>onSearchHandling(e)} />
                <input type={"submit"} value={"Search"} id={"searchBtn"} />
            </div>
        </div>
        <div>
            {Classes.length > 0 ?

                Classes.map(Class =>{
                    return <ClassListHolder key={Class._id} Class={Class} editClass={updateClass}
                                            handleOpenDeleteAlert={handleClickOpen}/>
                })

                : <div id={"ClassNoRecord"}>
                    <div id={"ClassNoRecordBody"}>
                        <div id={"NoRecordLabel"}> No Record Found </div>
                    </div>
                </div>
            }
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Remove Class</DialogTitle>
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

export default ManageClass;