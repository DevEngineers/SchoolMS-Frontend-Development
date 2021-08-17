import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import {Box, Grid, MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import '../../styles/classManagment/CreateClass.css';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class CreateClass extends Component {
    constructor(props){
        super(props);
        this.state= {
            classType:['A','B','C'],
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
                                    <label htmlFor={'class'}> Class </label>
                                    <TextField id="filled-basic" label="Class" variant="filled" />
                                </div>
                                <div className="class-form-div">
                                    <label htmlFor={'classType'}> Class Type </label>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                            className={'classSize'} onChange={event => this.onChange(event)}>
                                        {
                                            this.state.classType.map(type =>
                                                <MenuItem key={type} value={type}>{type}</MenuItem>
                                            )
                                        }
                                    </Select>
                                </div>
                                <div className="class-form-div">
                                    <label htmlFor={'teacher'}> Teacher  </label>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                            className={'classSize'} onChange={event => this.onChange(event)}>
                                        {
                                            this.state.teacher.map(Teacher =>
                                                <MenuItem key={Teacher} value={Teacher}>{Teacher}</MenuItem>
                                            )
                                        }
                                    </Select>
                                </div>

                                {/*<Grid container xs={12}>*/}
                                <div className="class-form-div">
                                    <Grid container item direction="row" justifyContent="flex-end" alignItems="baseline" >

                                        <Box ccomponent="div" display="inline" style={{ padding: 10 }} >
                                            <Button variant="contained" color="secondary">
                                                Reset
                                            </Button>
                                        </Box>

                                        <Box component="div" display="inline" style={{ padding: 10 }} >
                                            <Button variant="contained" color="primary">
                                                Add Class
                                            </Button>
                                        </Box>

                                    </Grid>
                                </div>
                                {/*</Grid>*/}

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default CreateClass;