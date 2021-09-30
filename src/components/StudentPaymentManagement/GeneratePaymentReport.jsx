import React, {useEffect, useState} from "react";
import {Container, MenuItem, } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import "../../styles/PaymentStyles/PaymentReport.css";
import ClassService from "../../services/ClassService";
import ClassTypeService from "../../services/ClassTypeService";
import StudentService from "../../services/StudentService";
import {toast} from "material-react-toastify";
import ResultService from "../../services/ResultService";
import StudentPaymentService from "../../services/StudentPaymentService";

/**
 * @author : M.A.M Nusky
 * Registration Number : IT19167442
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

function GenaratePaymentReport() {
    const [sClass, setSClass] = useState("");
    const [sClassType, setSClassType] = useState("");
    const [studentID, setStudentID] = useState("");
    const [year, setYear] = useState("");
    const [term, setTerm] = useState("");
    const [paymentType, setpaymentType] = useState("");
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

    const generateReport = (event) =>{
        event.preventDefault();
        if ( sClass === "") {
            toast.warn("Select the Class", options);
        } else if (sClassType === "") {
            toast.warn("Select the ClassType", options);
        } else if (studentID === "") {
            toast.warn("Select Student", options);
        }  else if ( paymentType === "") {
            toast.warn("Select Payment Type", options);
        } else {
            let report={
                class:sClass,
                classType:sClassType,
                studentID:studentID,
                // year:year,
                // term:term,
                paymentType:paymentType
            }
            StudentPaymentService.generatePaymentReport(report)
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
            <div>
                <div className={"box"}>
                    <label className={"custom-underline"}>
                        GENERATE STUDENT PAYMENT REPORT
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
                            {/*<label className={"repLabel"}>Year</label>*/}
                            <label className={"repLabel"}>Payment Type</label>
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
                            {/*<Select*/}
                            {/*    labelId="demo-simple-select-label"*/}
                            {/*    id="demo-simple-select"*/}
                            {/*    name={"uType"}*/}
                            {/*    className={"reportSize"}*/}
                            {/*    onChange={(event) => setYear(event.target.value)}*/}
                            {/*    displayEmpty*/}
                            {/*>*/}
                            {/*    <MenuItem value={""}>*/}
                            {/*        <span className={"selectRepName"}>Select Year</span>*/}
                            {/*    </MenuItem>*/}
                            {/*    {yearArray.map(type =>*/}
                            {/*        <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>*/}
                            {/*    )}*/}
                            {/*</Select>*/}
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name={"uType"}
                                className={"reportSize"}
                                onChange={(event) => setpaymentType(event.target.value)}
                                displayEmpty
                            >
                                <MenuItem value={""}>
                                    <span className={"selectRepName"}>Select Payment Type</span>
                                </MenuItem>
                                <MenuItem value={"Admission Fees"}>
                                    <span className={"selectRepName"}>Admission Fees</span>
                                </MenuItem>
                                <MenuItem value={"Exam Fees"}>
                                    <span className={"selectRepName"}>Exam Fees</span>
                                </MenuItem>
                                <MenuItem value={"Service Fees"}>
                                    <span className={"selectRepName"}>Service Fees</span>
                                </MenuItem>
                                <MenuItem value={"Term Fees"}>
                                    <span className={"selectRepName"}>Term Fees</span>
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

export default GenaratePaymentReport;
