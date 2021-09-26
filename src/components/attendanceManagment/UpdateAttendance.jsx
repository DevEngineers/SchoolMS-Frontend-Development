import React, {Component, useEffect, useState} from "react";
import {Box, Checkbox, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "../../styles/AttendanceManagment/Attendance.css";
import {toast, ToastContainer} from "material-react-toastify";
import AttendanceService from "../../services/AttendanceService";
import moment from "moment";
import StudentService from "../../services/StudentService";

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

function UpdateAttendance(props){
    const [Date,setDate] = useState('');
    const [Class,setClass] = useState([]);
    const [ClassType,setClassType] = useState([]);

    const [attendance,setAttendance] = useState([]);
    const [student,setStudent] = useState([]);

    // const [classes,setClasses] = useState([]);
    // const [classTypes,setClassTypes] = useState([]);


    useEffect(() =>{
        fetchAttendance();
    },[]);

    function fetchAttendance() {
        AttendanceService.getAttendanceByID(props.match.params.id)
            .then(Attendance => {
                setAttendance(Attendance.student);
                setDate(Attendance.date);
                setClass(Attendance.class);
                setClassType(Attendance.classType);
                let ClassID = Attendance.class._id;
                let ClassTypeID = Attendance.classType._id;
                let [attendance] = [Attendance.student];
                fetchStudentByClassType(ClassID,ClassTypeID,attendance);
                console.log("Attendance stu", Attendance.student);
            }).catch(err => {
            console.error(err)
        })
    }

    function fetchStudentByClassType(ClassID,ClassTypeID,attendance){
        // console.log("student.class id : ",ClassID)
        // console.log("student.classType id : ",ClassTypeID)

        if(Class !== [''] && ClassType !== ['']){
            let ClassType = {
                class:ClassID,
                classType:ClassTypeID
            }
            StudentService.getStudentByClass(ClassType)
                .then(student =>{
                    setStudent(student);
                    compareAttendanceStudent(attendance,student);
                    console.log("fetch all student",student)
                }).catch(err => {
                console.error(err)
            })
        }
    }

    function compareAttendanceStudent(attendance,student){
        console.log("hello compareAttendanceStudent function")
        // console.log("hello loop 01 ",attendance)
        // console.log("hello loop 02 ",student)
        if(attendance !== [''] && student !== [''] ){

            // for(let i=0; i<attendance.length; i++){
            //     // console.log("for loop student"+[i]+":",student[i]._id)
            //     // console.log("for loop attendance"+[i]+":",attendance[i]._id)
            //
            //     for(let j=0; j<student.length; j++){
            //         console.log("for loop student "+[j]+":",student[j]._id)
            //             if(student[j]._id === attendance[i]._id){
            //                 console.log("true "+[j]+":",attendance[j]._id);
            //             }
            //             else{
            //                 console.log("else",student[j]._id);
            //             }
            //     }
            // }


        }
    }


    function onCheckBox(event){
        // let value = event.target.value;
        // console.log("event value check box : ",value);
        //
        // if(attendance.includes(value) === true){
        //     let index = attendance.indexOf(value);
        //     attendance.splice(index,1)
        //     console.log('true students',attendance);
        //     return
        // }
        //
        // if(attendance.includes(value) === false){
        //     attendance.push(value);
        //     console.log('false students',attendance);
        // }
    }

    function updateAttendance(event){
    //     event.preventDefault();
    //     let Att = {
    //         date:this.state.rDate,
    //         class:this.state.rClass,
    //         classType: this.state.rClassType,
    //         student:this.state.student,
    //         // attendance:this.state.attendance
    //     }
    //     if(Att.date === ''){
    //         toast.warn('Select a Date',options)
    //     }else if(Att.class === ''){
    //         toast.warn('Select the Class',options)
    //     }else if(Att.classType === ''){
    //         toast.warn('Select the Class Type',options)
    //     }else{
    //         AttendanceService.updateAttendance(this.state.AttendanceID,Att)
    //             .then(res =>{
    //                 if (res.status === 200) {
    //                     toast.success("Attendance Update Successfully ", options)
    //                     setTimeout(()=>{this.props.history.push("/view-attendance")},3000)
    //                 } else {
    //                     throw Error('Something went wrong!! Try again.' + res);
    //                 }
    //             })
    //             .catch((error) => {
    //                 toast.error(error.message, options)
    //             })
    //     }
    }

    /**
     * this function is to capture data in the input fields
     */
    function onChange(event){
        // const { name, value } = event.target;
        // this.setState({ [name] : value });
    }


        return <div className="attendance-section">
            <ToastContainer/>
            <div className={"attendance-container"}>

                <div className={"attendance-row"}>
                    <div className={"attendance-section-title"}>
                        <h2 className={"attendance-custom-underline"}> UPDATE ATTENDANCE </h2>
                    </div>
                </div>

                <div className={"attendance-row"}>
                    <div className={"attendance-item"}>
                        <div className={"attendance-item-big-inner outer-shadow-attendance"}>
                            <form>
                                <div className="attendance-form-div">
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'date'} > Date </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField type={'text'} id="filled-basic"  name={'rDate'} value={moment(Date).format("YYYY-MM-DD")}
                                                       onChange={event => onChange(event)} style={{ width: 220 }} disabled/>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="attendance-form-div">
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'class'} > Class </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField type={'text'} id="filled-basic"  name={'rClass'} value={Class.class}
                                                       onChange={event => onChange(event)} style={{ width: 220 }} disabled/>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="attendance-form-div" id="attendance-big-item-end">
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'classType'}> Class Type </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField type={'text'} id="filled-basic"  name={'rClassType'} value={ClassType.name}
                                                       onChange={event => onChange(event)} style={{ width: 220 }} disabled/>
                                        </Box>
                                    </Grid>
                                </div>

                            </form>

                            {/*--------------------------------------------------- Check box form ---------------------------------------------------*/}

                            <form>
                                <div className={"attendance-item-inner outer-shadow-attendance"}>

                                    <div className="attendance-form-div">

                                        {
                                            student.map((stu,i) =>

                                                // console.log("Stu ID" ,attendance[i].studentID),

                                                stu._id === attendance[i] ? (
                                                    <div> {stu.studentID} </div>
                                                ) : (
                                                    <div> {stu.studentName} </div>
                                                )
                                            )
                                        }

                                    </div>

                                </div>

                                <div className="attendance-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'reset'} className={'Btn-Att-reset'} value={'Reset'} />
                                            {/*onClick={this.restAllValuesInForm.bind(this)}*/}
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'submit'} className={'Btn-Att-Sub'} value={'Update Attendance'} onClick={updateAttendance.bind()}/>
                                        </Box>

                                    </Grid>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>

}

export default UpdateAttendance;
