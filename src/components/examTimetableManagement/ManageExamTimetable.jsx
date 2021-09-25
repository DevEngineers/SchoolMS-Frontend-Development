import React, {useEffect, useState} from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, FormControl, MenuItem,
    TextField,
} from "@material-ui/core";
import ExamTimetableListHolder from "./ExamTimetabelListHolder";
import ExamTimetableService from "../../services/ExamTimetableService";
import {useHistory} from "react-router-dom";
import "../../styles/timetableAndResultStyles/CommonManage.css";
import {toast, ToastContainer} from "material-react-toastify";
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

function ManageExamTimetable() {
    const history = useHistory();
    const [examTimetables, setExamTimetables] = useState([]);
    const [open, setOpen] = useState(false);
    const [deleteExamTimetableObj, setDeleteExamTimetableObj] = useState("");
    const [searchType, setSearchType] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [visibility, setVisibility] = useState(false);

    /**
     * handler to open the alter dialog box and setting up the
     * relevant exam timetable that we going to remove in deleteExamTimetableObj state variable
     */
    const handleClickOpen = (examTimetable) => {
        setOpen(true);
        setDeleteExamTimetableObj(examTimetable);
    };

    /**
     * handler to close the alter dialog box
     */
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchExamTimetable().then();
    }, []);

    async function fetchExamTimetable() {
        await ExamTimetableService.getExamTimetable()
        .then((examTimetable) => {
            console.log(examTimetable);
            setExamTimetables(examTimetable);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    async function fetchSearchResult(event) {
        event.preventDefault()
        if (searchValue === '') {
            toast.warning("Please enter search value", options);
        } else if (searchType === '') {
            toast.warning("Please select search type", options);
        } else {
            await ExamTimetableService.searchExamTimetable(searchType, searchValue)
            .then((examTimetables) => {
                console.log(examTimetables)
                if (examTimetables.length === 0) {
                    setExamTimetables([]);
                } else {
                    setExamTimetables(examTimetables);
                }
            })
            .catch((err) => {
                console.error(err);
            });
        }
    }

    function updateExamTimetable(examTimetable) {
        let id = examTimetable._id;
        history.push(`/updateExamTimetable/${id}`);
    }

    function viewExamTimetable(examTimetable) {
        let id = examTimetable._id;
        history.push(`/viewExamTimetable/${id}`);
    }

    function deleteExamTimetable() {
        let id = deleteExamTimetableObj._id;
        ExamTimetableService.removeExamTimetable(id).then((res) => {
            if (res.status === 200) {
                handleClose();
                toast.error("Exam Timetable is Removed", options);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
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
                  <label className={"custom-underline"}>EXAM TIMETABLES</label>
              </div>
          </div>
          <div>
              <div id={"searchMDiv"}>
                  <div id={"searchTxtMRDiv"}>
                      <TextField
                        type={"text"}
                        id={"searchInputResult"}
                        variant="outlined"
                        onChange={event => setSearchValue(event.target.value)}
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
                              <MenuItem value={"term"}>
                                  <span className={"selectRName"}>Term</span>
                              </MenuItem>
                              <MenuItem value={"year"}>
                                  <span className={"selectRName"}>Year</span>
                              </MenuItem>
                          </Select>
                      </FormControl>
                  </div>
                  <div id={"searchBtnMRDiv"}>
                      <input type={"submit"} value={"Search"} id={"searchBtn"}
                             onClick={event => fetchSearchResult(event)}/>
                  </div>
              </div>
          </div>
          <div>
              {/*<div>
                <label id={'headingLabel'}>{ExamTimetable.class.class}</label>
            </div>*/}
              {
                  visibility === true ? (
                    (examTimetables.length === 0 || examTimetables === []) && searchValue !== '' ?
                      (
                        <div id={'resNotDiv'}>
                            <label id={'resNotLabel'}>Sorry No Results is Found....</label>
                        </div>
                      ) : (
                        examTimetables.map((examTimetable) => {
                            return (
                              <ExamTimetableListHolder
                                ExamTimetable={examTimetable}
                                handleOpenDeleteAlert={handleClickOpen}
                                viewExamTimetable={viewExamTimetable}
                                editExamTimetable={updateExamTimetable}
                              />
                            );
                        })
                      )
                  ) : (
                    <div id={"loadingButtonDiv"}>
                        <Button id={"loadingButton"} onClick={() => setVisibility(true)}>Load All Exam
                            Timetables</Button>
                    </div>
                  )

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
                    onClick={deleteExamTimetable}
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

export default ManageExamTimetable;
