import React, {Component} from 'react';
import {Box, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import '../../styles/subjectManagment/subjects.css';
import {toast, ToastContainer} from "material-react-toastify";
import SubjectService from "../../services/SubjectService";
import TeacherService from "../../services/TeacherService";
import ClassService from "../../services/ClassService";

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

class CreateSubject extends Component {
    constructor(props){
        super(props);
        this.state= {
            rSubject:'',
            rClass:'',
            rTeacher:'',

            classes:['9','10','11','12'],
            teachers:[]
        }
    }

    componentDidMount(){
        TeacherService.getTeachers()
            .then(res => {
                this.setState({teachers:res})
            }).catch(err => {
                console.error(err)
        })

        ClassService.getClasses()

    }

    setDefaultValuesInState(){
        this.setState({
            rSubject:'',
            rClass:'',
            rTeacher:'',
        })
    }

    restAllValuesInForm(){
        this.setDefaultValuesInState()
    }

    /**
     * This function is to submit Create Class proposal
     */
    insertSubject(event) {
        event.preventDefault();
        let Subject = {
            subject: this.state.rSubject,
            class: this.state.rClass,
            teacher: this.state.rTeacher
        }
        if(Subject.subject === ''){
            toast.warn('Enter Subject Name',options)
        }else if(Subject.class === ''){
            toast.warn('Select the Class',options)
        }else if(Subject.teacher === ''){
            toast.warn('Select the Subject Teacher',options)
        }else{
            SubjectService.createSubject(Subject)
                .then(res =>{
                    if (res.status === 200) {
                        toast.success("Class Created Successfully", options)
                        setTimeout(()=>{this.props.history.push("/view-subject")},3000)
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
        return <div className={"subject-section"}>
            <ToastContainer/>
            <div className={"subject-container"}>

                <div className={"subject-row"}>
                    <div className={"subject-section-title"}>
                        <h2 className={"subject-custom-underline"}> CREATE SUBJECT </h2>
                    </div>
                </div>

                <div className={"subject-row"}>
                    <div className={"subject-item"}>
                        <div className={"subject-item-inner outer-shadow-class"}>
                            <form>

                                <div className="subject-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'name'} > Name </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField type={'text'} id="filled-basic"  name={'rSubject'} value={this.state.rSubject}
                                                       placeholder={"Enter Subject Name"} onChange={event => this.onChange(event)} style={{ width: 220 }} />
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="subject-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'class'}> Class </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={'rClass'}
                                                    value={this.state.rClass} className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                                <MenuItem value={''}> Select Class </MenuItem>
                                                {
                                                    this.state.classes.map(Class =>
                                                        <MenuItem key={Class} value={Class}> {Class} </MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="subject-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'teacher'}> Teacher </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={'rTeacher'}
                                                    value={this.state.rTeacher} className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                                <MenuItem value={''}> Select Subject Teacher </MenuItem>
                                                {
                                                    this.state.teachers.map(Teacher =>
                                                        <MenuItem key={Teacher._id} value={Teacher._id}> {Teacher.teacherName} </MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="subject-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'reset'} className={'Btn-Subject-reset'} value={'Reset'} onClick={this.restAllValuesInForm.bind(this)}/>
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'submit'} className={'Btn-Subject-Sub'} value={'Add Subject'} onClick={this.insertSubject.bind(this)}/>
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

export default CreateSubject;