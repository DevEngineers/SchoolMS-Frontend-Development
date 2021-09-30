import React, {useEffect, useState} from "react";
import {Container, MenuItem, } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import "../../styles/timetableAndResultStyles/Results.css";
import ClassService from "../../services/ClassService";
import ClassTypeService from "../../services/ClassTypeService";
import StudentService from "../../services/StudentService";
import {toast, ToastContainer} from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import ResultService from "../../services/ResultService";
import {useHistory} from "react-router-dom";

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


const years = (new Date()).getFullYear();
const yearArray = Array.from(new Array(30),( val, index) => index + years);

function GenerateResultReport() {
    const history = useHistory();
    const [sClass, setSClass] = useState("");
    const [sClassType, setSClassType] = useState("");
    const [studentID, setStudentID] = useState("");
    const [year, setYear] = useState("");
    const [term, setTerm] = useState("");
    const [sClassArray, setSClassArray] = useState([]);
    const [sClassTypeArray, setSClassTypeArray] = useState([]);
    const [studentArray, setStudentArray] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('userToken') === null){
            history.push('/');
        }
        fetchClassAndClassType();
    },[])

    const fetchClassAndClassType = () => {
        ClassService.getClasses()
        .then((res) => {
            setSClassArray(res);
        })
        .catch((err) => {
            console.error(err);
        });

        ClassTypeService.getClassTypes()
        .then((res) => {
            setSClassTypeArray(res);
        })
        .catch((err) => {
            console.error(err);
        });
    }

    const onChangeClassType = (value) =>{
        setSClassType(value)
        let classType ={
            class:sClass,
            classType:value
        }

        StudentService.getStudentByClass(classType)
        .then((res) =>{
            setStudentArray(res);
        })
    }

    const generateReport = (event) =>{
        event.preventDefault();
        if ( sClass === "") {
            toast.warn("Select the Class", options);
        } else if (sClassType === "") {
            toast.warn("Select the ClassType", options);
        } else if (studentID === "") {
            toast.warn("Select Student", options);
        } else if (year === "") {
            toast.warn("Select Year", options);
        } else if ( term === "") {
            toast.warn("Select Term", options);
        } else {
            let report={
                class:sClass,
                classType:sClassType,
                studentID:studentID,
                year:year,
                term:term
            }
            ResultService.generateResultReport(report)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Report Successfully Generated", options);
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                } else {
                    throw Error("Something went wrong!! Try again.");
                }
            })
            .catch((error) => {
                toast.error(error.message, options);
            });
        }
    }

    return (
      <div>
          <ToastContainer/>
          <div>
              <div className={"box"}>
                  <label className={"custom-underline"}>
                      GENERATE STUDENT RESULTS REPORT
                  </label>
              </div>
          </div>
          <div id={"largeReportDiv"}>
              <form>
                  <Container id={"form-style-report"}>
                      <div id={"reportLabelDiv"}>
                          <label className={"repLabel"}>Class</label>
                          <label className={"repLabel"}>Class Type</label>
                          <label className={"repLabel"}>Student ID</label>
                          <label className={"repLabel"}>Year</label>
                          <label className={"repLabel"}>Term</label>
                      </div>
                      <div id={"reportSelectOpt"}>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name={"smBranch"}
                            className={"reportSize"}
                            onChange={(event) => setSClass(event.target.value)}
                            displayEmpty
                          >
                              <MenuItem value={""}>
                                  <span className={"selectRepName"}>Select Class</span>
                              </MenuItem>
                              {sClassArray.map(sClass =>
                                    <MenuItem key={sClass} value={sClass._id} className={'selectUName'}>{sClass.class}</MenuItem>
                                )}
                          </Select>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name={"uType"}
                            className={"reportSize"}
                            onChange={(event) => onChangeClassType(event.target.value)}
                            displayEmpty
                          >
                              <MenuItem value={""}>
                                  <span className={"selectRepName"}>Select Class Type</span>
                              </MenuItem>
                              {sClassTypeArray.map(type =>
                                        <MenuItem key={type} value={type._id}><span className={'selectUName'}>{type.name}</span></MenuItem>
                                    )}
                          </Select>

                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name={"uType"}
                            className={"reportSize"}
                            onChange={(event) => setStudentID(event.target.value)}
                            displayEmpty
                          >
                              <MenuItem value={""}>
                                  <span className={"selectRepName"}>Select Student</span>
                              </MenuItem>
                              {studentArray.map(student =>
                                        <MenuItem key={student} value={student._id}><span className={'selectUName'}>{student.studentID}</span></MenuItem>
                                    )}
                          </Select>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name={"uType"}
                            className={"reportSize"}
                            onChange={(event) => setYear(event.target.value)}
                            displayEmpty
                          >
                              <MenuItem value={""}>
                                  <span className={"selectRepName"}>Select Year</span>
                              </MenuItem>
                              {yearArray.map(type =>
                                    <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                )}
                          </Select>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name={"uType"}
                            className={"reportSize"}
                            onChange={(event) => setTerm(event.target.value)}
                            displayEmpty
                          >
                              <MenuItem value={""}>
                                  <span className={"selectRepName"}>Select Term</span>
                              </MenuItem>
                              <MenuItem value={"1st Term"}>
                                  <span className={"selectRepName"}>1st Term</span>
                              </MenuItem>
                              <MenuItem value={"2nd Term"}>
                                  <span className={"selectRepName"}>2nd Term</span>
                              </MenuItem>
                              <MenuItem value={"3rd Term"}>
                                  <span className={"selectRepName"}>3rd Term</span>
                              </MenuItem>
                          </Select>
                      </div>
                  </Container>
                  <div className={"btnEDiv"}>
                      <input
                        type={"submit"}
                        id={"submitUBtn"}
                        value={"Generate Report"}
                        onClick={event => generateReport(event)}
                      />
                      <input type={"reset"} id={"restUBtn"} value={"Reset"}/>
                  </div>
              </form>
          </div>
      </div>
    );
}

export default GenerateResultReport;
