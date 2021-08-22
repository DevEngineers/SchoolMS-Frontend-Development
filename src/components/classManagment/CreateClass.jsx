import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import {Box, Grid, MenuItem} from "@material-ui/core";
import {toast} from "material-react-toastify";
import '../../styles/classManagment/Class.css';
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

class CreateClass extends Component {
    constructor(props){
        super(props);
        this.state= {
            rClass:'',
            rClassType:'',
            rTeacher:'',

            classType:['A','B','C'],
            teacher:['611e68fc07b4bf1f64f88e89', 'Kumar', 'Kasun']
        }
    }

    restAllValuesInForm(){

    }

    /**
     * This function is to submit Create Class proposal
     */
    insertClass(event) {
        event.preventDefault();
        let Class = {
            class: this.state.rClass,
            classType: this.state.rClassType,
            teacher: this.state.rTeacher
        }
        if(Class.class === ''){
            toast.warn('Enter Class',options)
        }else if(Class.classType === ''){
            toast.warn('Select the Class Type',options)
        }else if(Class.teacher === ''){
            toast.warn('Select the Class Teacher',options)
        }else{
            ClassService.createClass(Class)
                .then(res =>{
                    if (res.status === 200) {
                        toast.success("Class Created Successfully", options)
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
        return <div className="class-section">
            <div className={"class-container"}>

                <div className={"class-row"}>
                    <div className={"class-section-title"}>
                        <h2 className={"class-custom-underline"}> CREATE CLASS </h2>
                    </div>
                </div>

                <div className={"class-row"}>
                    <div className={"class-item"}>
                        <div className={"class-item-inner outer-shadow-class"}>
                            <form>

                                <div className="class-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'class'} > Class </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField type={'text'} id="filled-basic"  name={'rClass'} value={this.state.rClass}
                                                       placeholder={"Enter Class"} onChange={event => this.onChange(event)} style={{ width: 220 }} />
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="class-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
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

                                <div className="class-form-div">
                                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'teacher'}> Teacher  </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }} name={'rTeacher'}
                                                    value={this.state.rTeacher} className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                                <MenuItem value={''}> Select Teacher </MenuItem>
                                                {
                                                    this.state.teacher.map(Teacher =>
                                                        <MenuItem key={Teacher} value={Teacher}> {Teacher} </MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="class-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'reset'} className={'Btn-Class-reset'} value={'Reset'} onClick={this.restAllValuesInForm.bind(this)}/>
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'submit'} className={'Btn-Class-Sub'} value={'Add Class'} onClick={this.insertClass.bind(this)}/>
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

export default CreateClass;