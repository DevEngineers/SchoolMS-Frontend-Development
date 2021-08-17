import React from "react";
import Select from "@material-ui/core/Select";
import {IconButton, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import '../../styles/timetableAndResultStyles/Results.css';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */


class StoreResult extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            examMarks:['','','','',''],
            examSubjects:['','','','','last'],
            subjects:['Mathematics','hi'],
            grades:['','','','',''],

            class:'',
            classType:'',
            year:'',
            term:'',
            studentID:'',

            classes:[],
            classTypes:[],
            years:[],
            eTerms:['1st Term','2nd Term','3rd Term'],
            students:[]
        }
    }

    /**
     * this function is to capture data in the input fields
     */
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }


    handleChangeSubject(i,event) {
        let examSubjects = [...this.state.examSubjects];
        examSubjects[i] = event.target.value;
        this.setState({ examSubjects });
    }

    handleChangeMarks(i,event) {
        let examMarks = [...this.state.examMarks];
        examMarks[i] = event.target.value;
        this.setState({ examMarks });
    }

    handleChangeGrade(i,event) {
        let grades = [...this.state.grades];
        grades[i] = event.target.value;
        this.setState({ grades });
    }

    /**
     * this function is to dynamically create time input field in the subjects timeslot
     */
    addClickOn(){
        this.setState(prevState => ({ grades: [...prevState.grades, '']}))
        this.setState(prevState => ({ examSubjects: [...prevState.examSubjects, '']}))
        this.setState(prevState => ({ examMarks: [...prevState.examMarks, '']}))

    }

    /**
     * this function is to remove dynamically created time input field in subjects timeslot
     */
    removeClick(i){
        let grades = [...this.state.grades];
        grades.splice(i,1);
        this.setState({ grades });

        let examSubjects = [...this.state.examSubjects];
        examSubjects.splice(i,1);
        this.setState({ examSubjects });

        let examMarks = [...this.state.examMarks];
        examMarks.splice(i,1);
        this.setState({ examMarks });
    }


    submitResearchPaper(event) {
        event.preventDefault();
        console.log(this.state.email)
        console.log(this.state.checkedTimeSlot)
    }


    render() {
        console.log(this.state.examMarks)
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>STORE EXAM RESULTS</label>
                </div>
            </div>
            <div id={'largeResultDiv'}>
                <form>
                    <div id={'form-style-resultClass'}>
                        <div id={'examLabelEDiv'}>
                            <label className={'classELabel'}>Class</label>
                            <label className={'classELabel'}>Class Type</label>
                            <label className={'classELabel'}>Year</label>
                            <label className={'classELabel'}>Term</label>
                            <label className={'classELabel'}>Student ID</label>
                        </div>
                        <div id={'classSelectOpt'}>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectRName'}>Select Class</span></MenuItem>
                                {
                                    this.state.classes.map(classes =>
                                        <MenuItem key={classes} value={classes} className={'selectRName'}>{classes}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectRName'}>Select Class Type</span></MenuItem>
                                {
                                    this.state.classTypes.map(classType =>
                                        <MenuItem key={classType} value={classType} className={'selectRName'}>{classType}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectRName'}>Select Year</span></MenuItem>
                                {
                                    this.state.years.map(year =>
                                        <MenuItem key={year} value={year} className={'selectRName'}>{year}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectRName'}>Select Term</span></MenuItem>
                                {
                                    this.state.eTerms.map(term =>
                                        <MenuItem key={term} value={term} className={'selectRName'}>{term}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectRName'}>Select Student</span></MenuItem>
                                {
                                    this.state.students.map(student =>
                                        <MenuItem key={student} value={student} className={'selectRName'}>{student}</MenuItem>
                                    )
                                }
                            </Select>
                        </div>
                    </div>
                    <div id={'secondSDiv'}>
                        <div id={'form-style-result'} >
                            <div id={'form-style-examR-inside'}>
                                <label id={'timeSlotTitle'}>Subjects</label>
                                {
                                    this.state.examSubjects.map((el, i) =>
                                        <div key={i}>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                                    value={el || ''} onChange={this.handleChangeSubject.bind(this, i)} className={'daySize'} >
                                                {
                                                    this.state.subjects.map(subject =>
                                                        <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div id={'form-style-marksR'}>
                            <label id={'timeSlotTitle'}>Marks</label>
                            {
                                this.state.examMarks.map((el,i) =>
                                    <div key={i}>
                                        <TextField type="text" value={el||''} onChange={this.handleChangeMarks.bind(this,i)}/>
                                    </div>
                                )
                            }
                        </div>
                        <div id={'form-style-examR'} >
                            <div id={'form-style-examR-inside'}>
                                <label id={'timeSlotTitle'}>Grade</label>
                                {
                                    this.state.grades.map((el, i) =>
                                        <div key={i}>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                                    value={el || ''} onChange={this.handleChangeGrade.bind(this, i)} className={'daySize'} >
                                                {
                                                    this.state.subjects.map(subject =>
                                                        <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </div>
                                    )
                                }
                                {
                                    this.state.examSubjects.map((el, i) =>
                                        (this.state.examSubjects.length - 1) === i ?(
                                            (el !== 'last')?(
                                                <div>
                                                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}} onClick={this.removeClick.bind(this, i)}>
                                                        <DeleteIcon className={'timeslotIconRB'}/>
                                                    </IconButton>
                                                </div>
                                            ):null
                                        ):null
                                    )
                                }
                                <div >
                                    <IconButton aria-label="add" style={{backgroundColor:"transparent"}} onClick={this.addClickOn.bind(this)}>
                                        <AddIcon className={'timeslotIconRA'} />
                                    </IconButton>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className={'btnEDiv'}>
                        <input type={'submit'} id={'submitRBtn'} value={'Store Results'}/>
                        <input type={'reset'} id={'restRBtn'} value={'Reset'}/>
                    </div>

                </form>
            </div>
        </div>
    }
}

export default StoreResult;