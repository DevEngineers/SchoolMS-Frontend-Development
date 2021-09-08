import React, {useEffect, useState} from "react";
import {Box, Checkbox, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import "../../styles/AttendanceManagment/Attendance.css";
import {toast, ToastContainer} from "material-react-toastify";
import AttendanceService from "../../services/AttendanceService";
import ClassTypeService from "../../services/ClassTypeService";
import ClassService from "../../services/ClassService";
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

function AddAttendance(props){
    const [Date,setDate] = useState('');
    const [Class,setClass] = useState('');
    const [ClassType,setClassType] = useState('');

    const [attendance,setAttendance] = useState([]);
    const [student,setStudent] = useState([]);

    const [classes,setClasses] = useState([]);
    const [classTypes,setClassTypes] = useState([]);

    useEffect(() =>{
        componentDidMount();
    },[]);

    function componentDidMount() {
        ClassService.getClasses()
            .then(classes => {
                setClasses(classes);
                console.log("fetch class",classes)
            }).catch(err => {
            console.error(err)
        })

        ClassTypeService.getClassTypes()
            .then(classTypes =>{
                setClassTypes(classTypes);
                console.log("fetch classTypes",classTypes)
            }).catch(err => {
            console.error(err)
        })

        console.log("Class",classes);
        console.log("Class Types",classTypes);

    }

    function fetchStudents(type){
        console.log("class",Class)
        console.log("type",type)
        let ClassType = {
            class:Class,
            classType:type
        }
        StudentService.getStudentByClass(ClassType)
            .then(student =>{
                setStudent(student);
                console.log("fetch student",student)
            }).catch(err => {
            console.error(err)
        })
        console.log("student",student)
    }

    function setDefaultValuesInState(){
        // this.setState({
        //     rDate:'',
        //     rClass:'',
        //     rClassType:'',
        // })
        //
        // Date:useState('');
        // Class:useState('');
        setDate('');
        setClass('');
        setClassType('');
        setStudent('');
        setAttendance('');
        // [ClassType,setClassType] = useState('');
    }

    function restAllValuesInForm(){
        setDefaultValuesInState()
    }

    function onCheckBox(event){
        const{value} = event.target;
        console.log(value);
        // let {student} = students.Id;
        // let {studentID} = this.state;

        // if(student.includes(value) === true){
        //     let index = student.indexOf(value);
        //     student.splice(index,1)
        //     console.log('true students',student);
        //     return
        // }
        //
        // if(student.includes(value) === false){
        //     student.push(value);
        //     console.log('false students',student);
        // }

    }

    function storeAttendance(event){
        event.preventDefault();
        let Att = {
            date:Date,
            class:Class,
            classType: ClassType,
            student:student,
            attendance:attendance
        }
        if(Att.date === ''){
            toast.warn("Select a Date",options)
        }else if(Att.class === ''){
            toast.warn("Select the Class",options)
        }else if(Att.classType === ''){
            toast.warn("Select the Class Type",options)
        }else{
            AttendanceService.storeAttendance(Att)
                .then(res =>{
                    if (res.status === 200) {
                        toast.success("Attendance store Successfully ", options)
                        setTimeout(()=>{this.props.history.push("/view-attendance")},3000)
                    } else {
                        throw Error("Something went wrong!! Try again." + res);
                    }
                })
                .catch((error) => {
                    toast.error(error.message, options)
                })
        }
    }

    /**
     * this function is to capture data in the input fields
     */
    // function onChange(event){
    //     const { name, value } = event.target;
    //     this.setState({ [name] : value });
    // }

    function handleDateChange(event){
        setDate(event.target.value);
    }
    function handleClassChange(event){
        setClass(event.target.value);
    }
    function handleClassTypeChange(event){
        setClassType(event.target.value);
        fetchStudents(event.target.value);
    }


    // render() {

        // const onChangeHandling = (e) => {
        //     if (this.state.rClass !== '' && this.state.rClassType !== '') {
        //         console.log("class", this.state.rClass);
        //         console.log("class", this.state.rClassType);
        //         this.componentWillMount();
        //         console.log("Students", this.state.student);
        //     }
        // // }

        // const onChangeHandling = (e) =>{
        //     const value = e.target.value;
        //     const Class = this.state.rClass;
        //     if(value){
        //         console.log("class",Class);
        //         console.log("class",value);
        //         StudentService.getStudentByClass(Class,value)
        //             .then(res => {
        //                 this.setState({student: res.data})
        //                 console.log("Student Array ",res.data);
        //             })
        //         console.log("Students",this.state.student);
        //     }else{
        //         console.log("No Student");
        //     }
        // }

        return <div className="attendance-section">
            <ToastContainer/>
            <div className={"attendance-container"}>

                <div className={"attendance-row"}>
                    <div className={"attendance-section-title"}>
                        <h2 className={"attendance-custom-underline"}> ADD ATTENDANCE </h2>
                    </div>
                </div>

                <div className={"attendance-row"}>
                    <div className={"attendance-item"}>
                        <div className={"attendance-item-big-inner outer-shadow-attendance"}>
                                <form>
                                    <div className="attendance-form-div">
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                                <label htmlFor={"date"} > Date </label>
                                            </Box>
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                                <TextField type={"date"} id="filled-basic"  name={"Date"} value={Date}
                                                           onChange={handleDateChange} style={{ width: 220 }} />
                                                {/*onChange={event => onChange(event)}*/}
                                            </Box>
                                        </Grid>
                                    </div>

                                    <div className="attendance-form-div">
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                                <label htmlFor={"class"} > Class </label>
                                            </Box>
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={'Class'}
                                                        value={Class} className={"classSize"} onChange={handleClassChange} displayEmpty>
                                                    <MenuItem value={''}> Select Class </MenuItem>
                                                    {
                                                        classes.map(Class =>
                                                            <MenuItem key={Class._id} value={Class._id}> {Class.class} </MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            </Box>
                                        </Grid>
                                    </div>

                                    <div className="attendance-form-div" id="attendance-big-item-end">
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                                <label htmlFor={"classType"}> Class Type </label>
                                            </Box>
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={'ClassType'}
                                                        value={ClassType} className={"classSize"}
                                                        onChange={handleClassTypeChange}
                                                        // onChange={(e)=>onChangeHandling(e)}
                                                        displayEmpty>
                                                    <MenuItem value={''}> Select Class Type </MenuItem>
                                                    {
                                                        classTypes.map(classType =>
                                                            <MenuItem key={classType._id} value={classType._id}> {classType.name} </MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            </Box>
                                        </Grid>
                                    </div>

                                </form>

{/*--------------------------------------------------- Check box form ---------------------------------------------------*/}

                            <form>
                                <div className={"attendance-item-inner outer-shadow-attendance"}>

                                        <div className="attendance-form-div">


                                            {student.length > 0 ?

                                                student.map(Stu => (
                                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 135 }} >
                                                            <label htmlFor={"classType"}> {Stu.studentName} </label>
                                                        </Box>
                                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 135 }} >
                                                            <Checkbox name="checkedB" color="primary" //checked={this.state.isTrue}
                                                                      value={Stu._Id} key={Stu._Id} onChange={event => onCheckBox(event) }
                                                            />
                                                        </Box>
                                                    </Grid>
                                                ))

                                                : <div>No Data available</div>
                                            }

                                        </div>

                                </div>

                                <div className="attendance-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <input type={"reset"} className={"Btn-Att-reset"} value={"Reset"} onClick={restAllValuesInForm.bind(this)} />
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <input type={"submit"} className={"Btn-Att-Sub"} value={"Store Attendance"} onClick={storeAttendance.bind(this)}/>
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

export default AddAttendance;