import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";
import AttendanceListHolder from "./AttendanceListHolder";
import '../../styles/AttendanceManagment/ViewAttendance.css';
import Button from "@material-ui/core/Button";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

function ManageAttendance(props){
    const history = useHistory();
    const [attendance,setAttendance] = useState([]);
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

    return <div className={"ManageAttendance-Section"}>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}> LIST OF ATTENDANCE </label>
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
                attendance.map(Atte =>{
                    return <AttendanceListHolder key={Atte._id} attendance={Atte} editAttendance={updateAttendance}
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

export default ManageAttendance;