import React from "react";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import {MenuItem} from "@material-ui/core";
import '../../styles/classTimetableStyles/ClassTimetableCommon.css';

class CreateClassTimetable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            timeSlot:[],
            startSlot:['07:50','08:30','09:10','09:50','10:30','10:50','11:30','12:10','12:50'],
            endSlot:['08:30','09:10','09:50','10:30','10:50','11:30','12:10','12:50','01:30'],
            monday:[],
            tuesday:[],
            wednesday:[],
            thursday:[],
            friday:[],
            subjects:['hello','hi']
        }
    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    onChangeCheck(event){
        if(this.state.checkedA === true){
            this.setState({ checkedA : false });
        }
        else if(this.state.checkedA === false){
            this.setState({ checkedA : true });
        }
    }

    submitResearchPaper(event) {
        event.preventDefault();
        console.log(this.state.email)
        console.log(this.state.checkedA)
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

    handleChange(i,value, event) {
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

    render() {
        /*return <div>
            <form noValidate autoComplete="off">
                <TextField className={'size'} id="standard-basic" label="Standard" name={'authorName'}
                           onChange={event => this.onChange(event)} value={this.state.authorName} /><br/><br/>

                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.email}
                    onChange={event => this.onChange(event)}
                    name={'email'}
                    className={'size'}
                    disabled={this.state.checkedA === true}
                >
                    <MenuItem value={10} >Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    value={this.state.timeT}
                    onChange={event => this.onChange(event)}
                    name={'timeT'}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <Button variant="contained" color="secondary" onClick={ event => this.submitResearchPaper(event)}>submit</Button>
            </form>
            <Switch
                checked={this.state.checkedA}
                onChange={event => this.onChangeCheck(event)}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />

        </div>*/
        console.log(this.state.startSlot)
        console.log(this.state.endSlot)
        return <div>
            <div>
                <form>
                    <div id={'form-style-timeSlot'}>
                        <label id={'timeSlotTitle'}>Time Slot</label>
                        {
                            this.state.startSlot.map((el,i) =>
                                <div key={i}>
                                    <TextField type="time" value={el||''} onChange={this.handleChangeOnStartSlot.bind(this,i)}/>
                                    <label id={'timeID'}> to </label>
                                    <TextField  type="time" value={this.state.endSlot[i] || ''} onChange={this.handleChangeOnEndSlot.bind(this,i)}/>
                                    {
                                        (this.state.startSlot.length - 1) === i ?(
                                            <input type='button' value='-' onClick={this.removeClick.bind(this, i)}/>
                                        ):null
                                    }
                                </div>
                            )
                        }
                        <input type='button' value='Add' onClick={this.addClickOnSlot.bind(this)}/>
                    </div>
                    <div id={'form-style-Week'}>
                        <label id={'timeSlotTitle'}>Monday</label>
                        {
                            this.state.monday.map((el, i) =>
                                <div key={i}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                            value={el||''} onChange={this.handleChange.bind(this, i,'monday')} className={'size'}>
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
                    <div id={'form-style-Week'}>
                        <label id={'timeSlotTitle'}>Tuesday</label>
                        {
                            this.state.tuesday.map((el, i) =>
                                <div key={i}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                            value={el||''} onChange={this.handleChange.bind(this, i,'tuesday')} className={'size'}>
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
                    <div id={'form-style-Week'}>
                        <label id={'timeSlotTitle'}>Wednesday</label>
                        {
                            this.state.wednesday.map((el, i) =>
                                <div key={i}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                            value={el||''} onChange={this.handleChange.bind(this, i,'wednesday')} className={'size'}>
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
                    <div id={'form-style-Week'}>
                        <label id={'timeSlotTitle'}>Thursday</label>
                        {
                            this.state.thursday.map((el, i) =>
                                <div key={i}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                            value={el||''} onChange={this.handleChange.bind(this, i,'thursday')} className={'size'}>
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
                    <div id={'form-style-Week'}>
                        <label id={'timeSlotTitle'}>Friday</label>
                        {
                            this.state.friday.map((el, i) =>
                                <div key={i}>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                            value={el||''} onChange={this.handleChange.bind(this, i,'friday')} className={'size'}>
                                        {
                                            this.state.subjects.map(subject =>
                                                <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                                            )
                                        }
                                    </Select>
                                    {
                                        /**
                                         * this also be icon and appear at last subjects
                                         */
                                        (this.state.friday.length - 1) === i ?(
                                            <input type='button' value='-' onClick={this.removeClickOnDay.bind(this, i)}/>
                                        ):null
                                    }
                                </div>
                            )
                        }
                        {/**
                         * This should be a icon and it should be in bottom of all the days
                         */
                        }
                        <input type='button' value='Add' onClick={this.addClickOn.bind(this)}/>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default CreateClassTimetable;