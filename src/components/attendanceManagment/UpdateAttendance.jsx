import React, {Component} from 'react';
import {Box, Checkbox, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import '../../styles/AttendanceManagment/Attendance.css';
import {toast, ToastContainer} from "material-react-toastify";
import AttendanceService from "../../services/AttendanceService";
import moment from "moment";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

const students =[
    { Id: '0001', name: 'Nimal Kumar', class:'10' , classType:'A', Att:true },
    { Id: '0002', name: 'Pasan Bandara', class:'10' , classType:'A', Att:true },
    { Id: '0003', name: 'Kasun kumar', class:'10' , classType:'A', Att:true },
    { Id: '0004', name: 'Sunil sunil', class:'10' , classType:'A', Att:true },
    { Id: '0005', name: 'Tharuni bandara', class:'10' , classType:'A', Att:false },
    { Id: '0006', name: 'Kasun Vimal', class:'10' , classType:'A', Att:true },
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

class UpdateAttendance extends Component {
    constructor(props){
        super(props);
        this.state= {
            AttendanceID:this.props.match.params.id,
            isCheck:false,

            rDate:'',
            rClass:'',
            rClassType:'',
            rAttendance:[],
            rStudent:[],

            studentID:['0001', '0002', '0003','0004', '0005','0006' ],
            student:['Nimal Kumar', 'Pasan Bandara', 'Kasun kumar','Sunil sunil', 'Tharuni bandara','Kasun Vimal' ],
            attendance:[1, 1, 1, 1, 0, 1],

            classType:['A','B','C','D','E'],
            class:['8', '9', '10', '11', '12']
        }
    }

    componentDidMount(){
        AttendanceService.getAttendanceByID(this.state.AttendanceID)
            .then(res => {
                this.setState({
                    rDate:res.date,
                    rClass:res.class.class,
                    rClassType:res.classType.name,
                    rAttendance:res.attendance,
                    rStudent:res.student
                })
            }).catch(err => {
            console.error(err)
        })
    }

    onCheckBox(event){
        const{value} = event.target;
        console.log(value);
        const student = students;
        console.log(' students',student);
        console.log(' students ID',student[0].Id);
        const iArr = ['1','2','3','4','5','6'];

        for(let i=0 ; i<6 ; i++){
            if(student[i].Id.includes(value) === true){
                let index = student.indexOf(value);
                student.splice(index,1)
                // student[i].Att.push("false");
                console.log('true students',student[i].Att);
                console.log('true index',index);
                return
            }
        }



        if((student.Id).includes(value) === false){
            students.push(value);
            console.log('false students',student);
        }

    }

    updateAttendance(event){
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
            AttendanceService.updateAttendance(this.state.AttendanceID,Att)
                .then(res =>{
                    if (res.status === 200) {
                        toast.success("Attendance Update Successfully ", options)
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
                                            <TextField type={'text'} id="filled-basic"  name={'rDate'} value={moment(this.state.rDate).format("YYYY-MM-DD")}
                                                       onChange={event => this.onChange(event)} style={{ width: 220 }} disabled/>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="attendance-form-div">
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'class'} > Class </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField type={'text'} id="filled-basic"  name={'rClass'} value={this.state.rClass}
                                                       onChange={event => this.onChange(event)} style={{ width: 220 }} disabled/>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="attendance-form-div" id="attendance-big-item-end">
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'classType'}> Class Type </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField type={'text'} id="filled-basic"  name={'rClassType'} value={this.state.rClassType}
                                                       onChange={event => this.onChange(event)} style={{ width: 220 }} disabled/>
                                        </Box>
                                    </Grid>
                                </div>

                            </form>

                            {/*--------------------------------------------------- Check box form ---------------------------------------------------*/}

                            <form>
                                <div className={"attendance-item-inner outer-shadow-attendance"}>

                                    <div className="attendance-form-div">

                                        {
                                            students.map(Stu => (
                                                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                                    <Box ccomponent="div" display="inline" style={{ padding: 2, width: 135 }} >
                                                        <label htmlFor={'classType'}> {Stu.name} </label>
                                                    </Box>
                                                    <Box ccomponent="div" display="inline" style={{ padding: 2, width: 135 }} >
                                                        <Checkbox name="checkedB" color="primary" checked={Stu.Att}
                                                                  value={Stu.Id} key={Stu.Id} onChange={event => this.onCheckBox(event) }
                                                        />
                                                    </Box>
                                                </Grid>
                                            ))
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
                                            <input type={'submit'} className={'Btn-Att-Sub'} value={'Update Attendance'} onClick={this.updateAttendance.bind(this)}/>
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

export default UpdateAttendance;