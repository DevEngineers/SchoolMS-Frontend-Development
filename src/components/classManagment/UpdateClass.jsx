import React, {Component} from 'react';
import {Box, Grid, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import '../../styles/classManagment/Class.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class UpdateClass extends Component {
    constructor(props){
        super(props);
        this.state= {
            classType:['A','B','C'],
            teacher:['Nimal', 'Kumar', 'Kasun']
        }
    }

    render() {
        return <div className="class-section">
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
                                    <Grid container direction="row" direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'class'} > Class </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <TextField id="filled-basic" label="Class" variant="filled" style={{ width: 220 }} />
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="class-form-div">
                                    <Grid container direction="row" direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'classType'}> Class Type </label>
                                        </Box>
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 250 }} >
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{ width: 220 }}
                                                    className={'classSize'} onChange={event => this.onChange(event)}>
                                                {
                                                    this.state.classType.map(type =>
                                                        <MenuItem key={type} value={type}>{type}</MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </Box>
                                    </Grid>
                                </div>

                                <div className="class-form-div">
                                    <Grid container direction="row" direction="row" justifyContent="space-evenly" alignItems="center" >
                                        <Box ccomponent="div" display="inline" style={{ padding: 2, width: 100 }} >
                                            <label htmlFor={'teacher'}> Teacher  </label>
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

                                <div className="class-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <Button variant="contained" color="secondary">
                                                Reset
                                            </Button>
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <Button variant="contained" color="primary">
                                                Update Class
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

export default UpdateClass;