import React from "react";
import Select from "@material-ui/core/Select";
import {IconButton, MenuItem} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import '../../styles/TimetableAndResultStyles/ExamTimetable.css'

class CreateExamTimetable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            timeSlot:[],
            startSlot:['','','','',''],
            endSlot:['','','','',''],
            examDates:['','','','',''],
            examSubjects:['','','','','last'],
            subjects:['Mathematics','hi'],

            class:'',
            classType:'',
            year:'',
            term:'',

            classes:[],
            classTypes:[],
            years:[],
            eTerms:['1st Term','2nd Term','3rd Term']
        }
    }

    /**
     * this function is to capture data in the input fields
     */
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    /**
     * this function is capture names in the dynamically
     * populated input field and storing those names in an state array
     */
    handleChangeOnStartSlot(i, event) {
        let startSlot = [...this.state.startSlot];
        startSlot[i] = event.target.value;
        this.setState({startSlot});
    }

    handleChangeOnEndSlot(i, event) {
        let endSlot = [...this.state.endSlot];
        endSlot[i] = event.target.value;
        this.setState({ endSlot });
    }

    handleChange(i,event) {
            let examSubjects = [...this.state.examSubjects];
            examSubjects[i] = event.target.value;
            this.setState({ examSubjects });

            let examDates = [...this.state.examDates];
            examDates[i] = event.target.value;
            this.setState({ examDates });
    }
    /**
     * this function is to dynamically create time input field in the subjects timeslot
     */
    addClickOn(){
        this.setState(prevState => ({ startSlot: [...prevState.startSlot, '']}))
        this.setState(prevState => ({ endSlot: [...prevState.endSlot, '']}))
        this.setState(prevState => ({ examSubjects: [...prevState.examSubjects, '']}))
        this.setState(prevState => ({ examDates: [...prevState.examDates, '']}))

    }

    /**
     * this function is to remove dynamically created time input field in subjects timeslot
     */
    removeClick(i){
        let startSlot = [...this.state.startSlot];
        startSlot.splice(i,1);
        this.setState({ startSlot });

        let endSlot = [...this.state.endSlot];
        endSlot.splice(i,1);
        this.setState({ endSlot });

        let examSubjects = [...this.state.examSubjects];
        examSubjects.splice(i,1);
        this.setState({ examSubjects });

        let examDates = [...this.state.examDates];
        examDates.splice(i,1);
        this.setState({ examDates });
    }


    submitResearchPaper(event) {
        event.preventDefault();
        console.log(this.state.email)
        console.log(this.state.checkedTimeSlot)
    }


    render() {
        console.log(this.state.examDates)
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>GENERATE EXAM TIMETABLE</label>
                </div>
            </div>
            <div id={'largeExamDiv'}>
                <form>
                    <div id={'form-style-examClass'}>
                        <div id={'examLabelEDiv'}>
                            <label className={'classELabel'}>Class</label>
                            <label className={'classELabel'}>Class Type</label>
                            <label className={'classELabel'}>Year</label>
                            <label className={'classELabel'}>Term</label>
                        </div>
                        <div id={'classSelectOpt'}>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectPName'}>Select Class</span></MenuItem>
                                {
                                    this.state.classes.map(classes =>
                                        <MenuItem key={classes} value={classes} className={'selectPName'}>{classes}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectPName'}>Select Class Type</span></MenuItem>
                                {
                                    this.state.classTypes.map(classType =>
                                        <MenuItem key={classType} value={classType} className={'selectPName'}>{classType}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectPName'}>Select Year</span></MenuItem>
                                {
                                    this.state.years.map(year =>
                                        <MenuItem key={year} value={year} className={'selectPName'}>{year}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem><span className={'selectPName'}>Select Term</span></MenuItem>
                                {
                                    this.state.eTerms.map(term =>
                                        <MenuItem key={term} value={term} className={'selectPName'}>{term}</MenuItem>
                                    )
                                }
                            </Select>
                        </div>
                    </div>
                    <div id={'secondDiv'}>
                        <div id={'form-style-examR'}>
                                <label id={'timeSlotETitle'}>Dates</label>
                                {
                                    this.state.examDates.map((el, i) =>
                                        <div className={'dateInput'} key={i}>
                                            <TextField type="date" id='date' value={el || ''} onChange={this.handleChange.bind(this, i)} />
                                        </div>
                                    )
                                }
                        </div>
                        <div id={'form-style-timeSlotE'}>
                            <label id={'timeSlotTitle'}>Time Slot</label>
                            {
                                this.state.startSlot.map((el,i) =>
                                    <div key={i}>
                                        <TextField type="time" value={el||''} disabled={this.state.checkedTimeSlot === true} onChange={this.handleChangeOnStartSlot.bind(this,i)}/>
                                        <label id={'timeID'}> to </label>
                                        <TextField  type="time" value={this.state.endSlot[i] || ''} disabled={this.state.checkedTimeSlot === true} onChange={this.handleChangeOnEndSlot.bind(this,i)}/>
                                    </div>
                                )
                            }
                        </div>
                        <div id={'form-style-examR'} >
                            <div id={'form-style-examR-inside'}>
                                <label id={'timeSlotTitle'}>Subjects</label>
                                {
                                    this.state.examSubjects.map((el, i) =>
                                        <div key={i}>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                                    value={el || ''} onChange={this.handleChange.bind(this, i)} className={'daySize'} >
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
                                                        <DeleteIcon className={'timeslotIconEB'}/>
                                                    </IconButton>
                                                </div>
                                            ):null
                                        ):null
                                    )
                                }
                                        <div >
                                            <IconButton aria-label="add" style={{backgroundColor:"transparent"}} onClick={this.addClickOn.bind(this)}>
                                                <AddIcon className={'timeslotIconEA'} />
                                            </IconButton>
                                        </div>


                            </div>
                        </div>
                    </div>
                    <div className={'btnEDiv'}>
                        <input type={'submit'} id={'submitEBtn'} value={'Generate Timetable'}/>
                        <input type={'reset'} id={'restEBtn'} value={'Reset'}/>
                    </div>

                </form>
            </div>
        </div>
    }
}

export default CreateExamTimetable;