import React, {Component} from 'react';
import {Box, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class UpdateSubject extends Component {
    constructor(props){
        super(props);
        this.state= {
            grade:['5','6','7'],
            teacher:['Nimal', 'Kumar', 'Kasun']
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
                                    <Grid container direction="row" direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'name'} > Name </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField id="filled-basic" label="Subject Name" variant="filled" style={{ width: 220 }} />
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="subject-form-div">
                                    <Grid container direction="row" direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'classType'}> Grade </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }}
                                                    className={'classSize'} onChange={event => this.onChange(event)}>
                                                {
                                                    this.state.grade.map(type =>
                                                        <MenuItem key={type} value={type}>{type}</MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="subject-form-div">
                                    <Grid container direction="row" direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'teacher'}> Teacher </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }}
                                                    className={'classSize'} onChange={event => this.onChange(event)}>
                                                {
                                                    this.state.teacher.map(Teacher =>
                                                        <MenuItem key={Teacher} value={Teacher}>{Teacher}</MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="subject-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <Button variant="contained" color="secondary">
                                                Reset
                                            </Button>
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <Button variant="contained" color="primary">
                                                Add Subject
                                            </Button>
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