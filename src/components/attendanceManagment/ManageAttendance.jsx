import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";
import AttendanceListHolder from "./AttendanceListHolder";
import "../../styles/AttendanceManagment/ViewAttendance.css";
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

function ManageAttendance(props){
    const history = useHistory();
    const [attendance,setAttendance] = useState([]);
    const [open, setOpen] = useState(false);
    const [deleteAttendanceObj, setDeleteAttendanceObj] = useState('');

    /**
     * handler to open the alter dialog box and setting up the
     * relevant Class that we going to remove in delete Attendance Object state variable
     */
    const handleClickOpen = (attendance) => {
        setOpen(true);
        setDeleteAttendanceObj(attendance);
    };

    /**
     * handler to close the alter dialog box
     */
    const handleClose = () => {
        setOpen(false);
    };


    useEffect(() =>{
        fetchAttendance();
    },[]);

    function fetchAttendance(){
        AttendanceService.getAttendances()
            .then(attendance =>{
                setAttendance(attendance);
            }).catch(err =>{
            console.error(err)
        })
    }

    function updateAttendance(attendance){
        let id = attendance._id;
        history.push(`/update-attendance/${id}`);
    }

    function deleteAttendance(){
        let id = deleteAttendanceObj._id;
        AttendanceService.removeAttendance(id)
            .then(res =>{
                if(res.status === 200){
                    handleClose();
                    toast.error("Attendance Details is Removed",options)
                    setTimeout(()=>{history.push("/view-attendance")},3000)
                }else{
                    handleClose();
                    toast.warning("Something went wrong!!,Try again.",options)
                }
            })
    }


    return <div className={"ManageAttendance-Section"}>
        <ToastContainer/>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}> LIST OF ATTENDANCE </label>
            </div>
        </div>
        <div>
            <div id={"searchDiv"}>
                <TextField type={"text"}  id={"searchInput"} variant="outlined"/>
                <input type={"submit"} value={"Search"} id={"searchBtn"}/>
            </div>
        </div>
        <div>
            {attendance.length > 0 ?

                attendance.map(Atte =>{
                    return <AttendanceListHolder key={Atte._id} attendance={Atte} editAttendance={updateAttendance}
                                                 handleOpenDeleteAlert={handleClickOpen}/>
                })

                : <div id={"AttendanceNoRecord"}>
                    <div id={"AttendanceNoRecordBody"}>
                        <div id={"AttendanceNoRecordLabel"}> No Record Found </div>
                    </div>
                </div>
            }
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Remove Attendance</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure to remove this record
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" style={{fontWeight:"bold"}}>
                    Cancel
                </Button>
                <Button onClick={deleteAttendance} color="secondary" style={{fontWeight:"bold"}}>
                    Proceed
                </Button>
            </DialogActions>
        </Dialog>

    </div>

}

export default ManageAttendance;