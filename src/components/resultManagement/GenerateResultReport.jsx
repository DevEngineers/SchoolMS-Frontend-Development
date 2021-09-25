import React, {useEffect, useState} from "react";
import {Container, MenuItem, } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import "../../styles/timetableAndResultStyles/Results.css";
import ClassService from "../../services/ClassService";
import ClassTypeService from "../../services/ClassTypeService";
import StudentService from "../../services/StudentService";

const years = (new Date()).getFullYear();
const yearArray = Array.from(new Array(30),( val, index) => index + years);

function GenerateResultReport() {
    const [sClass, setSClass] = useState("");
    const [sClassType, setSClassType] = useState("");
    const [studentID, setStudentID] = useState("");
    const [year, setYear] = useState("");
    const [term, setTerm] = useState("");
    const [sClassArray, setSClassArray] = useState([]);
    const [sClassTypeArray, setSClassTypeArray] = useState([]);
    const [studentArray, setStudentArray] = useState([]);

    useEffect(() => {
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

    return (
      <div>
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
                      />
                      <input type={"reset"} id={"restUBtn"} value={"Reset"}/>
                  </div>
              </form>
          </div>
      </div>
    );
}

export default GenerateResultReport;
