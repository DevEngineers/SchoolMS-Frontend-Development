import React, {useEffect, useState} from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    MenuItem,
    TextField,
} from "@material-ui/core";
import "../../styles/timetableAndResultStyles/CommonManage.css";
import ResultListHolder from "./ResultListHolder";
import ResultService from "../../services/ResultService";
import {useHistory} from "react-router-dom";
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

function ManageResults() {
    const history = useHistory();
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);
    const [deleteResultObj, setDeleteResultObj] = useState('');
    const [searchType, setSearchType] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [visibility, setVisibility] = useState(false);

    /**
     * handler to open the alter dialog box and setting up the
     * relevant result that we going to remove in deleteResultObj state variable
     */
    const handleClickOpen = (result) => {
        setOpen(true);
        setDeleteResultObj(result);
    };

    /**
     * handler to close the alter dialog box
     */
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchResults().then();
    }, []);

    async function fetchResults() {
        await ResultService.getResults()
            .then((results) => {
                setResults(results);
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
            await ResultService.searchResults(searchType, searchValue)
                .then((results) => {
                    if (results.length === 0) {
                        setResults([]);
                    } else {
                        setResults(results);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }

    function updateResult(result) {
        let id = result._id;
        history.push(`/updateResults/${id}`);
    }

    function viewResult(result) {
        let id = result._id;
        history.push(`/viewResult/${id}`);
    }

    function deleteResult() {
        let id = deleteResultObj._id;
        ResultService.removeResult(id).then((res) => {
            if (res.status === 200) {
                handleClose();
                toast.error("Student Result is Removed", options);
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
                    <label className={"custom-underline"}>STUDENTS RESULTS</label>
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
                        <input type={"submit"} value={"Search"} id={"searchBtn"}
                               onClick={event => fetchSearchResult(event)}/>
                    </div>
                </div>
            </div>
            <div>
                {/*<div>
                <label id={'headingLabel'}>Student ID: ST0012</label><br/>
                <label id={'headingLabel'}>Student Name: Nimal Kumara </label>
            </div>*/}
                {
                    visibility === true?(
                      results.length === 0 || results === []) && searchValue !== '' ?
                        (
                          <div id={'resNotDiv'}>
                              <label id={'resNotLabel'}>Sorry No Results is Found....</label>
                          </div>
                        ) : (
                          results.map((result) => {
                              return (
                                <ResultListHolder
                                  key={result._id}
                                  Result={result}
                                  handleOpenDeleteAlert={handleClickOpen}
                                  viewResult={viewResult}
                                  editResult={updateResult}
                                />
                              );
                          })
                    ):(
                      <div id={"loadingButtonDiv"}>
                          <Button id={"loadingButton"} onClick={() => setVisibility(true)}>Load All Student Results</Button>
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
                        onClick={deleteResult}
                        color="secondary"
                        style={{fontWeight: "bold"}}
                    >
                        Proceed
                    </Button>
                </DialogActions>
            </Dialog>
            <div style={{'margin-top':'290px'}}/>
        </div>
    );
}

export default ManageResults;
