import React, { Component } from 'react'
import StudentService from "../../services/StudentService";
import '../../styles/TeacherStyles/Teacher.css';

/*
*  Registration number: IT 19167442
*
*  @Author :Nusky M.A.M
* */

class CreateStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            studentName: '',
            guardian: '',
            phone: '',
            dob:'',
            address:'',
            schoolBranch:'',
            class:'',
            classType:'',
            gender:''

        }
        this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
        this.changeGuardianHandler = this.changeGuardianHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeSchoolBranchHandler = this.changeSchoolBranchHandler.bind(this);
        this.changeClassHandler = this.changeClassHandler.bind(this);
        this.changeClassTypeHandler = this.changeClassTypeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.saveStudent = this.saveStudent.bind(this);

    }

    componentDidMount(){

    }
    saveStudent(e) {
        e.preventDefault();
        let student = {
            studentName: this.state.studentName,
            guardian: this.state.guardian,
            phone: this.state.phone,
            dob: this.state.dob,
            address: this.state.address,
            schoolBranch: this.state.schoolBranch,
            class: this.state.class,
            classType: this.state.classType,
            gender: this.state.gender};

        console.log('student => ' + JSON.stringify(student));

        // step 5

            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });

    }

    changeStudentNameHandler= (event) => {
        this.setState({studentName: event.target.value});
    }

    changeGuardianHandler= (event) => {
        this.setState({guardian: event.target.value});
    }
    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }
    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }
    changeAddressHandler= (event) => {
        this.setState({address: event.target.value});
    }
    changeSchoolBranchHandler= (event) => {
        this.setState({schoolBranch: event.target.value});
    }
    changeClassHandler= (event) => {
        this.setState({class: event.target.value});
    }
    changeClassTypeHandler= (event) => {
        this.setState({classType: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }


    cancel(){
        this.props.history.push('/add-student/_add');
    }

    /*getTitle(){

        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Add Student</h3>
        }
    }*/
    /*addTeacher(){
        this.props.history.push('/add-teacher/_add');
    }

    addPayment(){
        this.props.history.push('/add-payment/_add');
    }*/


    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Student</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Student Name: </label>
                                        <input placeholder="Student Name" name="studentName" className="form-control"
                                               value={this.state.studentName} onChange={this.changeStudentNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Guardian: </label>
                                        <input placeholder="Guardian" name="guardian" className="form-control"
                                               value={this.state.guardian} onChange={this.changeGuardianHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Phone: </label>
                                        <input placeholder="Phone" name="phone" className="form-control"
                                               value={this.state.phone} onChange={this.changePhoneHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Of Birth: </label>
                                        <input type="date" placeholder="MM-DD-YYYY" name="dob" className="form-control"
                                               value={this.state.dob} onChange={this.changeDobHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Address : </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                               value={this.state.address} onChange={this.changeAddressHandler}/>
                                    </div>
                                    <div className = "form-group">
                                    <label> School Branch : </label>
                                    <select value={this.state.schoolBranch} name="schoolBranch" className="form-control" onChange={this.changeSchoolBranchHandler}>
                                        <option defaultValue>School Branch:</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Dehiwala">Dehiwala</option>
                                        <option value="Negambo">Negambo</option>
                                        <option value="Ratmalana">Ratmalana</option>
                                    </select>
                                     </div>
                                    <div className = "form-group">
                                        <label> Grade : </label>
                                        <select value={this.state.class} name="class" className="form-control" onChange={this.changeClassHandler}>
                                            <option defaultValue>Grade</option>
                                            <option value="Grade 01">Grade 01</option>
                                            <option value="Grade 02">Grade 02</option>
                                            <option value="Grade 03">Grade 03</option>
                                            <option value="Grade 04">Grade 04</option>
                                            <option value="Grade 05">Grade 05</option>
                                            <option value="Grade 06">Grade 06</option>
                                            <option value="Grade 07">Grade 07</option>
                                            <option value="Grade 08">Grade 08</option>
                                            <option value="Grade 09">Grade 09</option>
                                            <option value="Grade 10">Grade 10</option>
                                            <option value="Grade 11">Grade 11</option>
                                            <option value="Grade 12">Grade 12</option>
                                            <option value="Grade 13">Grade 13</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Class Type: </label>
                                        <select value={this.state.classType} className="form-control" onChange={this.changeClassTypeHandler}>
                                            <option defaultValue>Class</option>
                                            <option value="Class A">Class A</option>
                                            <option value="Class B">Class B</option>
                                            <option value="Class C">Class C</option>
                                            <option value="Class D">Class D</option>
                                            <option value="Class E">Class E</option>

                                        </select>
                                    </div>
                                    <div className = "form-group" value={this.state.gender} onChange={this.changeGenderHandler} >
                                        <label> Gender : </label>
                                        <input type="radio" value="MALE" name="gender" /> Male
                                        <input type="radio" value="FEMALE" name="gender" /> Female

                                    </div>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    <button className="btn btn-success" onClick={this.saveStudent}style={{marginLeft: "10px"}}>Save</button>



                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateStudent
