import React, {useState} from "react";
import {Container, MenuItem, TextField} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import '../../styles/timetableAndResultStyles/Results.css';

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
        <div id={'largeReportDiv'}>
            <form>
                <Container id={'form-style-report'}>
                    <div id={'reportLabelDiv'}>
                        <label className={'repLabel'}>Class</label>
                        <label className={'repLabel'}>Class Type</label>
                        <label className={'repLabel'}>Student ID</label>
                        <label className={'repLabel'}>Year</label>
                        <label className={'repLabel'}>Term</label>
                    </div>
                    <div id={'reportSelectOpt'}>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'smBranch'}
                                className={'reportSize'} onChange={(event) => onChange(event)} displayEmpty>
                            <MenuItem value={''}><span className={'selectRepName'}>Select Class</span></MenuItem>
                            {
                               /* this.state.sBranch.map(branch =>
                                    <MenuItem key={branch} value={branch} className={'selectUName'}>{branch}</MenuItem>
                                )*/
                            }
                        </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                    className={'reportSize'} onChange={(event) => onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectRepName'}>Select Account Type</span></MenuItem>
                                {
                                    /*this.state.userType.map(type =>
                                        <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                    )*/
                                }
                            </Select>

                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                    className={'reportSize'} onChange={(event) => onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectRepName'}>Select Account Type</span></MenuItem>
                                {
                                    /*this.state.userType.map(type =>
                                        <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                    )*/
                                }
                            </Select>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                className={'reportSize'} onChange={(event) => onChange(event)} displayEmpty>
                            <MenuItem value={''}><span className={'selectRepName'}>Select Account Type</span></MenuItem>
                            {
                                /*this.state.userType.map(type =>
                                    <MenuItem key={type} value={type}><span className={'selectUName'}>{type}</span></MenuItem>
                                )*/
                            }
                        </Select>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name={'uType'}
                                className={'reportSize'} onChange={(event) => onChange(event)} displayEmpty>
                            <MenuItem value={''}><span className={'selectRepName'}>Select Account Type</span></MenuItem>
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