import React from "react";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { IconButton, MenuItem, Switch} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/TimetableAndResultStyles/ClassTimetable.css';

class CreateClassTimetable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            timeSlot:[],
            startSlot:['07:50','08:30','09:10','09:50','10:30','10:50','11:30','12:10','12:50'],
            endSlot:['08:30','09:10','09:50','10:30','10:50','11:30','12:10','12:50','01:30'],
            monday:['','','','','interval','','','',''],
            tuesday:['','','','','interval','','','',''],
            wednesday:['','','','','interval','','','',''],
            thursday:['','','','','interval','','','',''],
            friday:['','','','','interval','','','',''],
            subjects:['Mathematics','hi'],

            checkedTimeSlot:true,
            checkedSubject:true,

            class:'',
            classType:'',
            Year:'',

            classes:[],
            classTypes:[],
            years:[]
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
     * this function is handling edit switch for timeslot
     */
    onChangeCheckSlot(){
        if(this.state.checkedTimeSlot === true){
            this.setState({ checkedTimeSlot : false });
        }
        else if(this.state.checkedTimeSlot === false){
            this.setState({ checkedTimeSlot : true });
        }
    }

    /**
     * this function is handling edit switch for subjects
     */
    onChangeCheckSubject(){
        if(this.state.checkedSubject === true){
            this.setState({ checkedSubject : false });
        }
        else if(this.state.checkedSubject === false){
            this.setState({ checkedSubject : true });
        }
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

    handleSubjectChange(i,value, event) {
        console.log(value)
        if(value === 'monday'){
            let monday = [...this.state.monday];
            monday[i] = event.target.value;
            this.setState({ monday });

        }else if (value === 'tuesday'){

            let tuesday = [...this.state.tuesday];
            tuesday[i] = event.target.value;
            this.setState({ tuesday });

        }else if (value === 'wednesday'){

            let wednesday = [...this.state.wednesday];
            wednesday[i] = event.target.value;
            this.setState({ wednesday });

        }else if(value === 'thursday'){

            let thursday = [...this.state.thursday];
            thursday[i] = event.target.value;
            this.setState({ thursday });

        }else if(value === 'friday'){

            let friday = [...this.state.friday];
            friday[i] = event.target.value;
            this.setState({ friday });
        }
    }
    /**
     * this function is to dynamically create time input field in the subjects timeslot
     */
    addClickOnSlot(){
        this.setState(prevState => ({ startSlot: [...prevState.startSlot, '']}))
        this.setState(prevState => ({ endSlot: [...prevState.endSlot, '']}))
    }

    /**
     * this function is to add row of subject selection filed dynamically in the subjects selection
     */
    addClickOn(){
            this.setState(prevState => ({ monday: [...prevState.monday, '']}))
            this.setState(prevState => ({ tuesday: [...prevState.tuesday, '']}))
            this.setState(prevState => ({ wednesday: [...prevState.wednesday, '']}))
            this.setState(prevState => ({ thursday: [...prevState.thursday, '']}))
            this.setState(prevState => ({ friday: [...prevState.friday, '']}))
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
    }

    /**
     * this function is to remove dynamically created
     * row of subject selections field in the subjects selection
     */
    removeClickOnDay(i){
        let monday = [...this.state.monday];
        monday.splice(i,1);
        this.setState({ monday });

        let tuesday = [...this.state.tuesday];
        tuesday.splice(i,1);
        this.setState({ tuesday });

        let wednesday = [...this.state.wednesday];
        wednesday.splice(i,1);
        this.setState({ wednesday });

        let thursday = [...this.state.thursday];
        thursday.splice(i,1);
        this.setState({ thursday });

        let friday = [...this.state.friday];
        friday.splice(i,1);
        this.setState({ friday });
    }

    submitResearchPaper(event) {
        event.preventDefault();
        console.log(this.state.email)
        console.log(this.state.checkedTimeSlot)
    }


    render() {
        console.log(this.state.startSlot)
        console.log(this.state.monday)
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>GENERATE CLASS TIMETABLE</label>
                </div>
            </div>
            <div id={'largeDiv'}>
                <form>
                    <div id={'form-style-classDetails'}>
                        <div id={'classLabelDiv'}>
                            <label className={'classLabel'}>Class</label>
                            <label className={'classLabel'}>Class Type</label>
                            <label className={'classLabel'}>Year</label>
                        </div>
                        <div id={'classSelectOpt'}>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)}>
                                {
                                    this.state.classes.map(classes =>
                                            <MenuItem key={classes} value={classes}>{classes}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                    className={'classSize'} onChange={event => this.onChange(event)}>
                                {
                                    this.state.classTypes.map(classType =>
                                             <MenuItem key={classType} value={classType}>{classType}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                     className={'classSize'} onChange={event => this.onChange(event)}>
                                {
                                    this.state.years.map(year =>
                                             <MenuItem key={year} value={year}>{year}</MenuItem>
                                    )
                                }
                            </Select>
                        </div>
                    </div>

                    <div id={'form-style-timeSlot'}>
                        <div id={'timeSwitch'}>
                            <Switch
                                checked={this.state.checkedTimeSlot}
                                onChange={event => this.onChangeCheckSlot(event)}
                                name="checkedTimeSlot"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                className={'Switch'}
                                color={'primary'}
                            />
                        </div>
                        <label id={'timeSlotTitle'}>Time Slot</label>
                        {
                            this.state.startSlot.map((el,i) =>
                                <div key={i}>
                                    {
                                        (el === '10:30' && i === 4)?(
                                            <div id={'timeslotInterval'}>
                                                <TextField type="time" value={el||''} disabled={this.state.checkedTimeSlot === true} onChange={this.handleChangeOnStartSlot.bind(this,i)}/>
                                                <label id={'timeID'}> to </label>
                                                <TextField  type="time" value={this.state.endSlot[i] || ''} disabled={this.state.checkedTimeSlot === true} onChange={this.handleChangeOnEndSlot.bind(this,i)}/>
                                                {
                                                    (this.state.startSlot.length - 1) === i ?(
                                                        (this.state.checkedTimeSlot === false)?(
                                                            <div className={'timeslotIcon'}>
                                                                <IconButton aria-label="delete" style={{backgroundColor:"transparent"}} onClick={this.removeClick.bind(this, i)}>
                                                                    <DeleteIcon className={'timeslotIconB'}/>
                                                                </IconButton>
                                                            </div>
                                                        ):null
                                                    ):null
                                                }
                                            </div>
                                        ):(
                                            <div>
                                                <TextField type="time" value={el||''} disabled={this.state.checkedTimeSlot === true} onChange={this.handleChangeOnStartSlot.bind(this,i)}/>
                                                <label id={'timeID'}> to </label>
                                                <TextField  type="time" value={this.state.endSlot[i] || ''} disabled={this.state.checkedTimeSlot === true} onChange={this.handleChangeOnEndSlot.bind(this,i)}/>
                                                {
                                                    (this.state.startSlot.length - 1) === i ?(
                                                        (this.state.checkedTimeSlot === false)?(
                                                            /*<input type='button' value='-' onClick={this.removeClick.bind(this, i)}/>*/
                                                            <div className={'timeslotIcon'}>
                                                                <IconButton aria-label="delete" style={{backgroundColor:"transparent"}} onClick={this.removeClick.bind(this, i)}>
                                                                    <DeleteIcon className={'timeslotIconB'}/>
                                                                </IconButton>
                                                            </div>
                                                        ):null
                                                    ):null
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                        {
                            (this.state.checkedTimeSlot === false)?(
                               /* <input type='button' value='Add' onClick={this.addClickOnSlot.bind(this)}/>*/
                                <div className={'timeslotIcon'}>
                                    <IconButton aria-label="add" style={{backgroundColor:"transparent"}} onClick={this.addClickOnSlot.bind(this)}>
                                        <AddIcon className={'timeslotIconA'}/>
                                    </IconButton>
                                </div>
                            ):null
                        }
                    </div>
                    <div id={'form-style-Week'} >
                        <div id={'form-style-Week-inside'}>
                            <label id={'dayTitle'}>Monday</label>
                            {
                                this.state.monday.map((el, i) =>
                                    <div key={i}>
                                        {
                                            (el === 'interval')?(
                                                <div>
                                                    <div id={'insideInterval'}>interval</div>
                                                    <div id={'intervalDiv'}>INTERVAL</div>
                                                </div>
                                            ):(
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                                        value={el||''} onChange={this.handleSubjectChange.bind(this, i,'monday')} className={'daySize'}>
                                                    {
                                                        this.state.subjects.map(subject =>
                                                            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div id={'form-style-Week-inside'}>
                            <label id={'dayTitle'}>Tuesday</label>
                            {
                                this.state.tuesday.map((el, i) =>
                                    <div key={i}>
                                        {
                                            (el === 'interval') ? (
                                                <div id={'insideInterval'}>interval</div>
                                            ) : (
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                                        value={el || ''}
                                                        onChange={this.handleSubjectChange.bind(this, i, 'tuesday')}
                                                        className={'daySize'}>
                                                    {
                                                        this.state.subjects.map(subject =>
                                                            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div id={'form-style-Week-inside'}>
                            <label id={'dayTitle'}>Wednesday</label>
                            {
                                this.state.wednesday.map((el, i) =>
                                    <div key={i}>
                                        {
                                            (el === 'interval') ? (
                                                <div id={'insideInterval'}>interval</div>
                                            ) : (
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                                        value={el || ''}
                                                        onChange={this.handleSubjectChange.bind(this, i, 'wednesday')}
                                                        className={'daySize'}>
                                                    {
                                                        this.state.subjects.map(subject =>
                                                            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div id={'form-style-Week-inside'}>
                            <label id={'dayTitle'}>Thursday</label>
                            {
                                this.state.thursday.map((el, i) =>
                                    <div key={i}>
                                        {
                                            (el === 'interval') ? (
                                                <div id={'insideInterval'}>interval</div>
                                            ) : (
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                                        value={el || ''}
                                                        onChange={this.handleSubjectChange.bind(this, i, 'thursday')}
                                                        className={'daySize'}>
                                                    {
                                                        this.state.subjects.map(subject =>
                                                            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <div id={'form-style-Week-inside'}>
                            <div id={'daySwitch'}>
                                <Switch
                                    checked={this.state.checkedSubject}
                                    onChange={event => this.onChangeCheckSubject(event)}
                                    name="checkedTimeSlot"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                    color={'primary'}
                                />
                            </div>
                            <label id={'timeSlotTitle'}>Friday</label>
                            {
                                this.state.friday.map((el, i) =>
                                    <div key={i}>
                                        {
                                            (el === 'interval') ? (
                                                <div id={'insideInterval'}>interval</div>
                                            ) : (
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                                        value={el || ''}
                                                        onChange={this.handleSubjectChange.bind(this, i, 'friday')}
                                                        className={'daySize'}>
                                                    {
                                                        this.state.subjects.map(subject =>
                                                            <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                                                        )
                                                    }
                                                </Select>
                                            )
                                        }
                                    </div>
                                )
                            }
                            {/**
                             * This should be a icon and it should be in bottom of all the days
                             */

                                this.state.friday.map((el, i) =>
                                    (this.state.friday.length - 1) === i ?(
                                        (this.state.checkedSubject === false)?(
                                                <div className={'timeslotIcon'}>
                                                    <IconButton aria-label="delete" style={{backgroundColor:"transparent"}} onClick={this.removeClickOnDay.bind(this, i)}>
                                                        <DeleteIcon className={'timeslotIconSB'} />
                                                    </IconButton>
                                                </div>
                                            /*<input type='button' value='-'  className={'delSub'} onClick={this.removeClickOnDay.bind(this, i)}/>*/
                                        ):null
                                    ):null
                                )
                            }
                            {
                                (this.state.checkedSubject === false)?(
                                    /*<input type='button' value='Add' onClick={this.addClickOn.bind(this)}/>*/
                                    <div className={'timeslotIcon'}>
                                        <IconButton aria-label="add" style={{backgroundColor:"transparent"}} onClick={this.addClickOn.bind(this)}>
                                            <AddIcon className={'timeslotIconSA'}/>
                                        </IconButton>
                                    </div>
                                ):null
                            }

                        </div>
                    </div>
                    <div className={'btnDiv'}>
                        <input type={'submit'} id={'submitBtn'} value={'Generate Timetable'}/>
                        <input type={'reset'} id={'restBtn'} value={'Reset'}/>
                    </div>

                </form>
            </div>
        </div>
    }
}

export default CreateClassTimetable;