import React from "react";
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import {IconButton, MenuItem, Switch} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import '../../styles/timetableAndResultStyles/ClassTimetable.css';
import ClassTimetableService from "../../services/ClassTimetableService";


/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

//Setting default values for start time,end time and subject slot in the time table form
const defStartTimeSlot = ['07:50','08:30','09:10','09:50','10:30','10:50','11:30','12:10','12:50'];
const defEndTimeSlot = ['08:30','09:10','09:50','10:30','10:50','11:30','12:10','12:50','01:30'];
const defDayValues = ['','','','','interval','','','',''];

//Toast Message Configuration
const options = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false
}

class CreateClassTimetable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            startSlot:[],
            endSlot:[],
            monday:[],
            tuesday:[],
            wednesday:[],
            thursday:[],
            friday:[],
            subjects:['Mathematics','hi'],

            checkedTimeSlot:true,
            checkedSubject:true,

            sClass:'',
            sClassType:'',
            year:'',

            classes:[''],
            classTypes:[''],
            years:['']
        }
    }


    componentDidMount() {
            this.setDefaultValuesInState();
    }

    setDefaultValuesInState(){
        this.setState({startSlot:defStartTimeSlot})
        this.setState({endSlot:defEndTimeSlot})
        this.setState({monday:defDayValues})
        this.setState({tuesday:defDayValues})
        this.setState({wednesday:defDayValues})
        this.setState({thursday:defDayValues})
        this.setState({friday:defDayValues})
    }

    restAllValuesInForm(){
        this.setDefaultValuesInState()
        this.setState({sClass:''})
        this.setState({sClassType:''})
        this.setState({year:''})

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

    validateSubjectSelections(array){
        let dArray = arr => arr.filter((item,index) => arr.indexOf(item) !== index);
        return dArray(array)
    }

    generateClassTimetable(event) {
        event.preventDefault();
        let classTimetable ={
            class:this.state.sClass,
            classType:this.state.sClassType,
            year: this.state.year,
            startSlot: this.state.startSlot,
            endSlot: this.state.endSlot,
            monday: this.state.monday,
            tuesday: this.state.tuesday,
            wednesday: this.state.wednesday,
            thursday: this.state.thursday,
            friday: this.state.friday
        }

        if(classTimetable.class === ''){
            toast.warn('Select the Class',options)
        }else if(classTimetable.classType === ''){
            toast.warn('Select the Class Type',options)
        }else if(classTimetable.year === ''){
            toast.warn('Select the Year',options)
        }else if (classTimetable.monday.includes('')){
            toast.warn('Select Subjects in Monday',options)
        }else if (classTimetable.tuesday.includes('')){
            toast.warn('Select Subjects in Tuesday',options)
        }else if (classTimetable.wednesday.includes('')){
            toast.warn('Select Subjects in Wednesday',options)
        }else if (classTimetable.thursday.includes('')){
            toast.warn('Select Subjects in Thursday',options)
        }else if (classTimetable.friday.includes('')){
            toast.warn('Select Subjects in Friday',options)
        }else {
            ClassTimetableService.generateClassTimetable(classTimetable)
                .then(res => {
                    if (res.status === 200) {
                        toast.success("Class Timetable Generated Successfully", options)
                        /*setTimeout(()=>{this.props.history.push("/")},3000)*/
                    } else {
                        throw Error('Something went wrong!! Try again.' + res);
                    }
                })
                .catch((error) => {
                    toast.error(error.message, options)
                })
        }
    }


    render() {
        return <div>
            <ToastContainer/>
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
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.sClass} name={'sClass'}
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectCName'}>Select Class</span></MenuItem>
                                {
                                    this.state.classes.map(classes =>
                                            <MenuItem key={classes} value={classes}>{classes}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.sClassType} name={'sClassType'}
                                    className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectCName'}>Select Class Type</span></MenuItem>
                                {
                                    this.state.classTypes.map(classType =>
                                             <MenuItem key={classType} value={classType}>{classType}</MenuItem>
                                    )
                                }
                            </Select>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.year} name={'year'}
                                     className={'classSize'} onChange={event => this.onChange(event)} displayEmpty>
                                <MenuItem value={''}><span className={'selectCName'}>Select Year</span></MenuItem>
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
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={el || ''} onChange={this.handleSubjectChange.bind(this, i, 'tuesday')} className={'daySize'}>
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
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={el || ''}
                                                        onChange={this.handleSubjectChange.bind(this, i, 'wednesday')} className={'daySize'}>
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
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={el || ''}
                                                        onChange={this.handleSubjectChange.bind(this, i, 'thursday')} className={'daySize'}>
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
                                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={el || ''}
                                                        onChange={this.handleSubjectChange.bind(this, i, 'friday')} className={'daySize'}>
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
                        <input type={'submit'} id={'submitBtn'} value={'Generate Timetable'} onClick={this.generateClassTimetable.bind(this)}/>
                        <input type={'reset'} id={'restBtn'} value={'Reset'} onClick={this.restAllValuesInForm.bind(this)}/>
                    </div>

                </form>
            </div>
        </div>
    }
}

export default CreateClassTimetable;