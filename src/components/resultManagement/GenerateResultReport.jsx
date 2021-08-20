import React, {useState} from "react";
import {Container, MenuItem, TextField} from "@material-ui/core";
import Select from "@material-ui/core/Select";


function GenerateResultReport(props) {
    const [sClass,setSClass] = useState('')
    const [sClassType,setSClassType] = useState('')
    const [studentID,setStudentID] = useState('')
    const [year,setYear] = useState('')
    const [term,setTerm] = useState('')
    const [sClassArray,setSClassArray] = useState([])
    const [sClassTypeArray,setSClassTypeArray] = useState([])
    const [studentArray,setStudentArray] = useState([])
    const [yearArray,setYearArray] = useState([])
    const [termArray,setTermArray] = useState([])

    /**
     * this function is to capture data in the input fields
     */
    function onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    return <div>
        <div>
            <div className={'box'}>
                <label className={'custom-underline'}>GENERATE STUDENT RESULTS REPORT</label>
            </div>
        </div>
        <div id={'largeUserDiv'}>
            <form>
                <Container id={'form-style-user'}>
                    <div id={'userLabelEDiv'}>
                        <label className={'classULabel'}>Class</label>
                        <label className={'classULabel'}>Class Type</label>
                        <label className={'classULabel'}>Student ID</label>
                        <label className={'classULabel'}>Year</label>
                        <label className={'classULabel'}>Term</label>
                    </div>
                    <div id={'userSelectOpt'}>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'smBranch'}
                                className={'userSize'} onChange={(event) => onChange(event)} displayEmpty>
                            <MenuItem value={''}><span className={'selectUName'}>Select Class</span></MenuItem>
                            {
                               /* this.state.sBranch.map(branch =>
                                    <MenuItem key={branch} value={branch} className={'selectUName'}>{branch}</MenuItem>
                                )*/
                            }
                        </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                    className={'userSize'} onChange={(event) => onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectUName'}>Select Account Type</span></MenuItem>
                                {
                                    /*this.state.userType.map(type =>
                                        <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                    )*/
                                }
                            </Select>

                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                    className={'userSize'} onChange={(event) => onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectUName'}>Select Account Type</span></MenuItem>
                                {
                                    /*this.state.userType.map(type =>
                                        <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                    )*/
                                }
                            </Select>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                className={'userSize'} onChange={(event) => onChange(event)} displayEmpty>
                            <MenuItem value={''}><span className={'selectUName'}>Select Account Type</span></MenuItem>
                            {
                                /*this.state.userType.map(type =>
                                    <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                )*/
                            }
                        </Select>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                className={'userSize'} onChange={(event) => onChange(event)} displayEmpty>
                            <MenuItem value={''}><span className={'selectUName'}>Select Account Type</span></MenuItem>
                            {
                                /*this.state.userType.map(type =>
                                    <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                )*/
                            }
                        </Select>
                    </div>
                </Container>
                <div className={'btnEDiv'}>
                    <input type={'submit'} id={'submitUBtn'} value={'Generate Report'}/>
                    <input type={'reset'} id={'restUBtn'} value={'Reset'}/>
                </div>

            </form>
        </div>
    </div>
}

export default GenerateResultReport;