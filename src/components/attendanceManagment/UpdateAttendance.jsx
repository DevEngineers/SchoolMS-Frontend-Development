import React, {Component} from 'react';
import {Box, Checkbox, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import '../../styles/AttendanceManagment/Attendance.css';
import {toast} from "material-react-toastify";
import AttendanceService from "../../services/AttendanceService";

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

class UpdateAttendance extends Component {
    constructor(props){
        super(props);
        this.state= {
            AttendanceID:this.props.match.params.id,

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
                    rClass:res.class,
                    rClassType:res.classType,
                    rAttendance:res.attendance,
                    rStudent:res.student
                })
                console.log('Att', this.state.rStudent);
                console.log('Att', this.state.rAttendance);
            })
    }

    onCheckBox(event){
        const{value} = event.target;
        console.log(value);

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

    updateAttendance(event){
        event.preventDefault();

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
                                                    this.state.classType.map(type =>
                                                        <MenuItem key={type} value={type}> {type} </MenuItem>
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

                                        {
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
                                            <input type={'submit'} className={'Btn-Att-Sub'} value={'Store Attendance'} onClick={this.updateAttendance.bind(this)}/>
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