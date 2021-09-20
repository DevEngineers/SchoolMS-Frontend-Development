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

// const students =[
//     { Id: '0001', name: 'Nimal Kumar', class:'10' , classType:'A', Att:true },
//     { Id: '0002', name: 'Pasan Bandara', class:'10' , classType:'A', Att:true },
//     { Id: '0003', name: 'Kasun kumar', class:'10' , classType:'A', Att:true },
//     { Id: '0004', name: 'Sunil sunil', class:'10' , classType:'A', Att:true },
//     { Id: '0005', name: 'Tharuni bandara', class:'10' , classType:'A', Att:false },
//     { Id: '0006', name: 'Kasun Vimal', class:'10' , classType:'A', Att:true },
// ]

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

    // const [ClassID,setClassID] = useState('');
    // const [ClassTypeID,setClassTypeID] = useState('');

    const [attendance,setAttendance] = useState([]);
    const [student,setStudent] = useState([]);

    const [classes,setClasses] = useState([]);
    const [classTypes,setClassTypes] = useState([]);


    useEffect(() =>{
        componentDidMount();
    },[]);

    function componentDidMount() {
        AttendanceService.getAttendanceByID(props.match.params.id)
            .then(stu => {
                setStudent(stu);
                setDate(stu.date);
                setClass(stu.class);
                setClassType(stu.classType);
                let ClassID = stu.class._id;
                let ClassTypeID = stu.classType._id;
                fetchStudentByClassType(ClassID,ClassTypeID);
                console.log("stu", stu);
            }).catch(err => {
            console.error(err)
        })
    }

    function fetchStudentByClassType(ClassID,ClassTypeID){
        console.log("student.class id : ",ClassID)
        console.log("student.classType id : ",ClassTypeID)
        if(Class !== [''] && ClassType !== ['']){
            let ClassType = {
                class:ClassID,
                classType:ClassTypeID
            }
            StudentService.getStudentByClass(ClassType)
                .then(res =>{
                    setAttendance(res)
                    console.log("fetch student",res)
                }).catch(err => {
                console.error(err)
            })
        }
    }

        // console.log("rClass: ",this.state.rClass);
        // console.log("rClassType: ",this.state.rClassType);

        // if(this.state.rClass !== '' && this.state.rClassType !== ''){
        //     let ClassType = {
        //         class:this.state.rClass,
        //         classType:this.state.rClassType
        //     }
        //     StudentService.getStudentByClass(ClassType)
        //         .then(res =>{
        //             this.setState({students:res})
        //             console.log("fetch student",res)
        //         }).catch(err => {
        //         console.error(err)
        //     })
        // }

    // }

    function onCheckBox(event){
    //     const{value} = event.target;
    //     console.log(value);
    //     const student = students;
    //     console.log(' students',student);
    //     console.log(' students ID',student[0].Id);
    //     const iArr = ['1','2','3','4','5','6'];
    //
    //     for(let i=0 ; i<6 ; i++){
    //         if(student[i].Id.includes(value) === true){
    //             let index = student.indexOf(value);
    //             student.splice(index,1)
    //             // student[i].Att.push("false");
    //             console.log('true students',student[i].Att);
    //             console.log('true index',index);
    //             return
    //         }
    //     }
    //
    //
    //
    //     if((student.Id).includes(value) === false){
    //         this.state.students.push(value);
    //         console.log('false students',student);
    //     }
    //
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

                                        {/*{*/}
                                        {/*    student.map(Stu => (*/}
                                        {/*        <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >*/}
                                        {/*            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 135 }} >*/}
                                        {/*                <label htmlFor={'classType'}> {Stu.name} </label>*/}
                                        {/*            </Box>*/}
                                        {/*            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 135 }} >*/}
                                        {/*                <Checkbox name="checkedB" color="primary" checked={Stu.Att}*/}
                                        {/*                          value={Stu.Id} key={Stu.Id} onChange={event => onCheckBox(event) }*/}
                                        {/*                />*/}
                                        {/*            </Box>*/}
                                        {/*        </Grid>*/}
                                        {/*    ))*/}
                                        {/*}*/}

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