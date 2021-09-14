import React, {useEffect, useState} from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl, MenuItem,
    TextField,
} from "@material-ui/core";
import ClassTimetableListHolder from "./ClassTimetableListHolder";
import ClassTimetableService from "../../services/ClassTimetableService";
import "../../styles/timetableAndResultStyles/CommonManage.css";
import {useHistory} from "react-router-dom";
import {ToastContainer, toast} from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

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
    draggable: false,
};

function ManageClassTimetable() {
    const history = useHistory();
    const [classTimetables, setClassTimetables] = useState([]);
    const [open, setOpen] = useState(false);
    const [deleteClassTimetableObj, setDeleteClassTimetableObj] = useState("");
    const [searchType, setSearchType] = useState("");
    /**
     * handler to open the alter dialog box and setting up the
     * relevant class timetable that we going to remove in deleteClassTimetableObj state variable
     */
    const handleClickOpen = (classTimetable) => {
        setOpen(true);
        setDeleteClassTimetableObj(classTimetable);
    };

    /**
     * handler to close the alter dialog box
     */
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchClassTimetable().then();
    }, []);

    /**
     * fetching exam timetable form database
     */
    async function fetchClassTimetable() {
        await ClassTimetableService.getClassTimetable()
            .then((classTimetable) => {
                setClassTimetables(classTimetable);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function updateClassTimetable(classTimetable) {
        let id = classTimetable._id;
        history.push(`/updateClassTimetable/${id}`);
    }

    function viewClassTimetable(classTimetable) {
        let id = classTimetable._id;
        history.push(`/viewClassTimetable/${id}`);
    }

    function deleteClassTimetable() {
        let id = deleteClassTimetableObj._id;
        ClassTimetableService.removeClassTimetable(id).then((res) => {
            if (res.status === 200) {
                handleClose();
                toast.error("Class Timetable is Removed", options);
                setTimeout(() => {
                    history.push("/manageClassTimetable");
                }, 2000);
            } else {
                handleClose();
                toast.warning("Something went wrong!!,Try again.", options);
            }
        });
    }

    return (
        <div>
            <ToastContainer/>
            <div>
                <div className={"box"}>
                    <label className={"custom-underline"}>CLASS TIMETABLES</label>
                </div>
            </div>
            <div>
                <div id={"searchDiv"}>
                    <div id={"searchTxtMRDiv"}>
                        <TextField
                            type={"text"}
                            id={"searchInputResult"}
                            variant="outlined"
                        />
                    </div>
                    <div id={"searchTypeDiv"}>
                        <FormControl variant="outlined">
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                className={"seTypeSel"}
                                name={"searchType"}
                                value={searchType}
                                onChange={(event) => setSearchType(event.target.value)}
                                displayEmpty
                            >
                                <MenuItem value={""}>
                                    <span className={"selectRName"}>Select Search Type</span>
                                </MenuItem>
                                <MenuItem value={"class"}>
                                    <span className={"selectRName"}>Class</span>
                                </MenuItem>
                                <MenuItem value={"studentName"}>
                                    <span className={"selectRName"}>Student Name</span>
                                </MenuItem>
                                <MenuItem value={"studentID"}>
                                    <span className={"selectRName"}>Student ID</span>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div id={"searchBtnMRDiv"}>
                        <input type={"submit"} value={"Search"} id={"searchBtn"}/>
                    </div>
                </div>
            </div>
            <div>
                {
                    /*classTimetable.map(classT =>{
                              let name = classT.class;
                              classTimetable.map(classTimetable =>{
                                  if(classTimetable.class === name){
                                      return <ClassTimetableListHolder key={classTimetable._id} ClassTimetable={classTimetable}/>
                                  }
                              })
                          })*/
                    /*<div>
                              <label id={'headingLabel'}>{ClassTimetable.class.class}</label>
                          </div>*/
                    classTimetables.map((classTimetable) => {
                        return (
                            <ClassTimetableListHolder
                                key={classTimetable._id}
                                ClassTimetable={classTimetable}
                                handleOpenDeleteAlert={handleClickOpen}
                                editClassTimetable={updateClassTimetable}
                                viewClassTimetable={viewClassTimetable}
                            />
                        );
                    })
                }
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Alert</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure to remove this record
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        style={{fontWeight: "bold"}}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={deleteClassTimetable}
                        color="secondary"
                        style={{fontWeight: "bold"}}
                    >
                        Proceed
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ManageClassTimetable;
