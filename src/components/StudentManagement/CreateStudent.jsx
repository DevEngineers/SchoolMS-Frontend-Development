import React, { Component } from 'react'
import StudentService from "../../Services/StudentService";
import '../../styles/Teacher.css';

/*
*  Registration number: IT 19167442
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
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);

    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({studentName: student.studentName,
                    guardian: student.guardian,
                    phone: student.phone,
                    dob: student.dob,
                    address: student.address,
                    schoolBranch: student.schoolBranch,
                    class: student.class,
                    classType: student.classType,
                    gender : student.gender
                });
            });
        }
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {studentName: this.state.studentName,
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
        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/students');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/students');
            });
        }
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
        this.props.history.push('/students');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }

    }
    /*addTeacher(){
        this.props.history.push('/add-teacher/_add');
    }

    addPayment(){
        this.props.history.push('/add-payment/_add');
    }*/
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
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
                                    </div> <div className = "form-group">
                                    <label> School Branch : </label>
                                    <input placeholder="School Branch" name="schoolBranch" className="form-control"
                                           value={this.state.schoolBranch} onChange={this.changeSchoolBranchHandler}/>
                                </div>
                                    <div className = "form-group">
                                        <label> Class : </label>
                                        <input placeholder="Class" name="class" className="form-control"
                                               value={this.state.class} onChange={this.changeClassHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Class Type: </label>
                                        <input placeholder="Class Type" name="classType" className="form-control"
                                               value={this.state.classType} onChange={this.changeClassTypeHandler}/>
                                    </div>
                                    <div className = "form-group" value={this.state.gender} onChange={this.changeGenderHandler} >
                                        <label> Gender : </label>
                                        <input type="radio" value="MALE" name="gender" /> Male
                                        <input type="radio" value="FEMALE" name="gender" /> Female

                                    </div>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateStudent}style={{marginLeft: "10px"}}>Save</button>



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