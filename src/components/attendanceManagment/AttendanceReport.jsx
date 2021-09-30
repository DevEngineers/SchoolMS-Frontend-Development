import React, {useEffect, useState} from "react";
import {Container, MenuItem} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import '../../styles/AttendanceManagment/AttendanceReport.css';
import ClassService from "../../services/ClassService";
import ClassTypeService from "../../services/ClassTypeService";
import {toast, ToastContainer} from "material-react-toastify";
import {useHistory} from "react-router-dom";
import AttendanceService from "../../services/AttendanceService";

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
    draggable: false,
};

const Months =[
    { id: '01', name:'January'}, { id: '02', name:'February'},
    { id: '03', name:'March'}, { id: '04', name:'April'},
    { id: '05', name:'May'}, { id: '06', name:'June'},
    { id: '07', name:'July'}, { id: '08', name:'August'},
    { id: '09', name:'September'}, { id: '10', name:'October'},
    { id: '11', name:'November'}, { id: '12', name:'December'},
]

function GenerateResultReport(props) {
    const history = useHistory();
    const [sClass, setSClass] = useState("");
    const [sClassType, setSClassType] = useState("");
    const [sMonth, setSMonth] = useState("");
    const [classArray,setSClassArray] = useState([])
    const [classTypeArray,setSClassTypeArray] = useState([])

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = () => {
        ClassTypeService.getClassTypes()
            .then((res) => {
                setSClassTypeArray(res);
            })
            .catch((err) => {
                console.error(err);
            });

        ClassService.getClasses()
            .then((res) => {
                setSClassArray(res);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const generateReport = (event) =>{
        event.preventDefault();
        if ( sClass === "") {
            toast.warn("Select the Class", options);
        } else if (sClassType === "") {
            toast.warn("Select the ClassType", options);
        } else if (sMonth === "") {
            toast.warn("Select Month", options);
        } else {
            let report ={
                class:sClass,
                classType:sClassType,
                month:sMonth,
            }
            AttendanceService.generateAttendanceReport(report)
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


    return <div className={"Att-Report-Section"}>
        <ToastContainer/>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>GENERATE STUDENT MONTHLY ATTENDANCE REPORT</label>
            </div>
        </div>
        <div id={'largeUserDiv'}>
            <form>
                <Container id={'form-style-user'}>
                    <div id={'userLabelEDiv'}>
                        <label className={'classULabel'}>Class </label>
                        <label className={'classULabel'}>Class Type</label>
                        <label className={'classULabel'}>Month </label>
                    </div>
                    <div id={'userSelectOpt'}>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'smBranch'}
                                className={'userSize'} onChange={(event) => setSClass(event.target.value)} displayEmpty>
                            <MenuItem value={''}><span className={'selectUName'}>Select Class</span></MenuItem>
                            {
                                classArray.map(sClass =>
                                     <MenuItem key={sClass} value={sClass._id} className={'selectUName'}> {sClass.class} </MenuItem>
                                 )
                            }
                        </Select>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                className={'userSize'} onChange={(event) => setSClassType(event.target.value)} displayEmpty>
                            <MenuItem value={''}><span className={'selectUName'}>Select Class Type</span></MenuItem>
                            {
                                classTypeArray.map(type =>
                                    <MenuItem key={type} value={type._id}><span className={'selectUName'}> {type.name} </span></MenuItem>
                                )
                            }
                        </Select>

                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                className={'userSize'} onChange={(event) => setSMonth(event.target.value)} displayEmpty>
                            <MenuItem value={''}><span className={'selectUName'}>Select Month</span></MenuItem>
                            {
                                Months.map(month =>
                                    <MenuItem key={month} value={month.id}><span className={'selectUName'}> {month.name} </span></MenuItem>
                                )
                            }
                        </Select>
                    </div>
                </Container>
                <div className={'btnEDiv'}>
                    <input type={'submit'} id={'submitUBtn'} value={'Generate Report'} onClick={event => generateReport(event)} />
                    <input type={'reset'} id={'restUBtn'} value={'Reset'}/>
                </div>

            </form>
        </div>
    </div>
}

export default GenerateResultReport;
