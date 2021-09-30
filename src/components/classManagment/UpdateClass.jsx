import React, {Component} from 'react';
import {Box, Grid, MenuItem} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import "../../styles/classManagment/Class.css";
import {toast, ToastContainer} from "material-react-toastify";
import ClassService from "../../services/ClassService";
import TeacherService from "../../services/TeacherService";
import ClassTypeService from "../../services/ClassTypeService";

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

class UpdateClass extends Component {
    constructor(props){
        super(props);
        this.state= {
            classID:this.props.match.params.id,

            rClass:'',
            rClassType:[],
            rTeacher:[],

            classTypes:[],
            teachers:[],
        }
    }

    componentDidMount(){
        if(localStorage.getItem('userToken') === null){
            this.props.history.push('/');
        }

        ClassService.getClassByID(this.state.classID)
            .then(res => {
                this.setState({
                    rClass:res.class,
                    rClassType:res.classType,
                    rTeacher:res.teacher
                })
            }).catch(err => {
            console.error(err)
        })

        TeacherService.getTeachers()
            .then(res => {
                this.setState({teachers:res})
            }).catch(err => {
            console.error(err)
        })

        ClassTypeService.getClassTypes()
            .then(res => {
                this.setState({classTypes:res})
            }).catch(err => {
            console.error(err)
        })

    }

    restAllValuesInForm(){
        this.componentDidMount()
    }

    updateClass(event){
        event.preventDefault();
        let Classes = {
            class: this.state.rClass,
            classType: this.state.rClassType,
            teacher: this.state.rTeacher
        }
        if(Classes.class === ''){
            toast.warn("Enter Class",options)
        }else if(Classes.classType === ''){
            toast.warn("Select the Class type",options)
        }else if(Classes.teacher === ''){
            toast.warn("Select the Subject Teacher",options)
        }else{
            ClassService.updateClass(this.state.classID,Classes)
                .then(res =>{
                    if (res.status === 200) {
                        toast.success("Class Update Successfully", options)
                        setTimeout(()=>{this.props.history.push("/view-class")},3000)
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
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return <div className="class-section">
            <ToastContainer/>
            <div className={"class-container"}>

                <div className={"class-row"}>
                    <div className={"class-section-title"}>
                        <h2 className={"class-custom-underline"}> UPDATE CLASS </h2>
                    </div>
                </div>

                <div className={"class-row"}>
                    <div className={"class-item"}>
                        <div className={"class-item-inner outer-shadow-class"}>
                            <form>

                                <div className="class-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={"class"} > Class </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            {/*<TextField type={"text"} id="filled-basic"  name={"rClass"} value={this.state.rClass}*/}
                                            {/*           placeholder={"Enter Class"} onChange={event => this.onChange(event)} style={{ width: 220 }} disabled />*/}
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={"rClass"}
                                                    value={this.state.rClass} className={"classSize"} onChange={event => this.onChange(event)} >
                                                <MenuItem value={this.state.rClass}> {this.state.rClass} </MenuItem>
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="class-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={"classType"}> Class Type </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={"rClassType"}
                                                    value={this.state.rClassType} className={"classSize"} onChange={event => this.onChange(event)} >
                                                <MenuItem value={this.state.rClassType}> {this.state.rClassType.name} </MenuItem>
                                                {
                                                    this.state.classTypes.map(type =>
                                                        <MenuItem key={type} value={type._id}> {type.name} </MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="class-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={"teacher"}> Teacher  </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={"rTeacher"}
                                                    value={this.state.rTeacher} className={"classSize"} onChange={event => this.onChange(event)} >
                                                <MenuItem value={this.state.rTeacher} > {this.state.rTeacher.teacherName} </MenuItem>
                                                {
                                                    this.state.teachers.map(Teacher =>
                                                        <MenuItem key={Teacher._id} value={Teacher._id}> {Teacher.teacherName} </MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="class-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <input type={"reset"} className={"Btn-Class-reset"} value={"Reset"} onClick={this.restAllValuesInForm.bind(this)} />
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <input type={"submit"} className={"Btn-Class-Sub"} value={"Update Class"} onClick={this.updateClass.bind(this)}/>
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

export default UpdateClass;
