import React, {Component} from 'react';
import {Box, Checkbox, FormControlLabel, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import '../../styles/AttendanceManagment/Attendance.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class AddAttendance extends Component {
    constructor(props){
        super(props);
        this.state= {
            rDate:'',
            rClass:'',
            rClassType:'',

            attendance:[],
            student:[],

            classType:['A','B','C'],
            class:['8', '9', '10', '11', '12']
        }
    }

    storeAttendance(event){
        event.preventDefault();
        let Att = {

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
                                            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                                                <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                                    <label htmlFor={'classType'}> Nimal Kumar </label>
                                                </Box>
                                                <Box ccomponent="div" display="inline" >
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox // checked={true} onChange={handleChange}
                                                                name="checkedB" color="primary" />
                                                        } />
                                                </Box>
                                            </Grid>
                                        </div>

                                </div>

                                <div className="attendance-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <input type={'reset'} className={'Btn-Att-reset'} value={'Reset'} />
                                            {/*onClick={this.restAllValuesInForm.bind(this)}*/}
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