import React, {Component} from 'react';
import {Box, Checkbox, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import '../../styles/AttendanceManagment/Attendance.css';
import {toast, ToastContainer} from "material-react-toastify";
import AttendanceService from "../../services/AttendanceService";
import ClassTypeService from "../../services/ClassTypeService";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

const students =[
        { Id: '0001', name: 'Nimal Kumar', class:'10' , classType:'A' },
        { Id: '0002', name: 'Pasan Bandara', class:'10' , classType:'A'},
        { Id: '0003', name: 'Kasun kumar', class:'10' , classType:'A' },
        { Id: '0004', name: 'Sunil sunil', class:'10' , classType:'A'},
        { Id: '0005', name: 'Tharuni bandara', class:'10' , classType:'A'},
        { Id: '0006', name: 'Kasun Vimal', class:'10' , classType:'A'},
]

//Toast Message Configuration
const options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false
}


class AddAttendance extends Component {
    constructor(props){
        super(props);
        this.state= {
            isTrue: false,
            rDate:'',
            rClass:'',
            rClassType:'',

            allAttendance:[],
            studentID:['0001', '0002', '0003','0004', '0005','0006' ],
            student:['Nimal Kumar', 'Pasan Bandara', 'Kasun kumar','Sunil sunil', 'Tharuni bandara','Kasun Vimal' ],
            attendance:[1, 1, 1, 1, 0, 1],

            classTypes:[],
            class:['9', '10', '11', '12']
        }
    }
    componentDidMount() {
        // this.setDefaultValuesInState();
        ClassTypeService.getClassTypes()
            .then(res =>{
                this.setState({classTypes:res})
            }).catch(err => {
            console.error(err)
        })
    }

    setDefaultValuesInState(){
        this.setState({
            rDate:'',
            rClass:'',
            rClassType:'',
        })
    }

    restAllValuesInForm(){
        this.setDefaultValuesInState()
    }

    onCheckBox(event){
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

    storeAttendance(event){
        event.preventDefault();
        let Att = {
            date:this.state.rDate,
            class:this.state.rClass,
            classType: this.state.rClassType,
            student:this.state.student,
            attendance:this.state.attendance
        }
        if(Att.date === ''){
            toast.warn('Select a Date',options)
        }else if(Att.class === ''){
            toast.warn('Select the Class',options)
        }else if(Att.classType === ''){
            toast.warn('Select the Class Type',options)
        }else{
            AttendanceService.storeAttendance(Att)
                .then(res =>{
                    if (res.status === 200) {
                        toast.success("Attendance store Successfully ", options)
                        setTimeout(()=>{this.props.history.push("/view-attendance")},3000)
                    } else {
                        throw Error('Something went wrong!! Try again.' + res);
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
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
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
                                                <label htmlFor={'date'} > Date </label>
                                            </Box>
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                                <TextField type={'date'} id="filled-basic"  name={'rDate'} value={this.state.rDate}
                                                           onChange={event => this.onChange(event)} style={{ width: 220 }} />
                                            </Box>
                                        </Grid>
                                    </div>

                                    <div className="attendance-form-div">
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                                <label htmlFor={'class'} > Class </label>
                                            </Box>
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={'rClass'}
                                                        value={this.state.rClass} className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                                    <MenuItem value={''}> Select Class </MenuItem>
                                                    {
                                                        this.state.class.map(cls =>
                                                            <MenuItem key={cls} value={cls}>{cls}</MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            </Box>
                                        </Grid>
                                    </div>

                                    <div className="attendance-form-div" id="attendance-big-item-end">
                                        <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                                <label htmlFor={'classType'}> Class Type </label>
                                            </Box>
                                            <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={'rClassType'}
                                                        value={this.state.rClassType} className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                                    <MenuItem value={''}> Select Class Type </MenuItem>
                                                    {
                                                        this.state.classTypes.map(classType =>
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


                                            {this.state.rClassType === 'A' ?

                                                students.map(Stu => (
                                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 135 }} >
                                                            <label htmlFor={'classType'}> {Stu.name} </label>
                                                        </Box>
                                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 135 }} >
                                                            <Checkbox name="checkedB" color="primary" //checked={this.state.isTrue}
                                                                      value={Stu.Id} key={Stu.Id} onChange={event => this.onCheckBox(event) }
                                                            />
                                                        </Box>
                                                    </Grid>
                                                ))

                                             : null}

                                        </div>

                                </div>

                                <div className="attendance-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'reset'} className={'Btn-Att-reset'} value={'Reset'} onClick={this.restAllValuesInForm.bind(this)} />
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'submit'} className={'Btn-Att-Sub'} value={'Store Attendance'} onClick={this.storeAttendance.bind(this)}/>
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
}

export default AddAttendance;