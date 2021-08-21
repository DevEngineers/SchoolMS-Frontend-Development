import React, {Component} from 'react';
import {Box, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import SubjectService from "../../services/SubjectService";
import {toast} from "material-react-toastify";

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

class UpdateSubject extends Component {
    constructor(props){
        super(props);
        this.state= {
            subjectID:this.props.match.params.id,

            rSubject:'',
            rClass:'',
            rTeacher:'',

            subject:'',
            class:'',
            teacher:'',

            grade:['5','6','7'],
        }
    }

    componentDidMount(){
        SubjectService.getSubjectByID(this.state.subjectID)
            .then(res => {
                this.setState({
                    rSubject:res.subject,
                    rClass:res.class,
                    rTeacher:res.teacher
                })
            })
    }

    updateSubject(event){
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
            SubjectService.updateSubject(this.state.subjectID,Subject)
                .then(res =>{
                    if (res.status === 200) {
                        toast.success("Class Update Successfully", options)
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
            <div className={"subject-container"}>

                <div className={"subject-row"}>
                    <div className={"subject-section-title"}>
                        <h2 className={"subject-custom-underline"}> UPDATE SUBJECT </h2>
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
                                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                                <MenuItem value={this.state.rClass}> {this.state.rClass} </MenuItem>
                                                {
                                                    this.state.grade.map(Class =>
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
                                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                                <MenuItem value={this.state.rTeacher} > {this.state.rTeacher} </MenuItem>
                                                {
                                                    this.state.grade.map(Teacher =>
                                                        <MenuItem key={Teacher} value={Teacher}> {Teacher} </MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="subject-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'reset'} className={'Btn-Subject-reset'} value={'Reset'} />
                                            {/*onClick={this.restAllValuesInForm.bind(this)}*/}
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'submit'} className={'Btn-Subject-Sub'} value={'Update Subject'} onClick={this.updateSubject.bind(this)}/>
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

export default UpdateSubject;