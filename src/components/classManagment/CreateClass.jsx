import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import {MenuItem,Switch} from "@material-ui/core";

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
        return <div className="addClass-section">
            <div className={"addClass-container"}>

                <div className={"addClass-row"}>
                    <div className={"addClass-section-title"}>
                        <h2> CREATE CLASS </h2>
                    </div>
                </div>

                <div className={"addClass-row"}>
                    <div className={"addClass-item"}>
                        <form>
                            <div>
                                <label htmlFor={'class'}> Class </label>
                                <TextField id="filled-basic" label="Class" variant="filled" />
                            </div>
                            <div>
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
                            <div>
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
                        </form>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default CreateClass;