import React, { Component } from 'react'
import TeacherService from "../../Services/TeacherService";
import '../../styles/Teacher.css';

/*
*  Registration number: IT 19167442
*  @Author :Nusky M.A.M
* */

class UpdateTeacher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            teacherName: '',
            mobileNumber:'',
            nic:'',
            schoolBranch:'',
            qualification:'',
            maritalStatus:'',
            gender:''

        }
        this.changeTeacherNameHandler = this.changeTeacherNameHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changeNICHandler = this.changeNICHandler.bind(this);
        this.changeSchoolBranchHandler = this.changeSchoolBranchHandler.bind(this);
        this.changeQualificationHandler = this.changeQualificationHandler.bind(this);
        this.changeMaritalStatusHandler = this.changeMaritalStatusHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.updateTeacher = this.updateTeacher.bind(this);
    }


    updateTeacher = (e) => {
        e.preventDefault();
        let teacher = {teacherName: this.state.teacherName,
            mobileNumber: this.state.mobileNumber,
            nic: this.state.nic,
            schoolBranch: this.state.schoolBranch,
            qualification: this.state.qualification,
            maritalStatus: this.state.maritalStatus,
            gender: this.state.gender};
        console.log('teacher => ' + JSON.stringify(teacher));
        console.log('id => ' + JSON.stringify(this.state.id));
        TeacherService.updateTeacher(teacher, this.state.id).then( res => {
            this.props.history.push('/teachers');
        });
    }
    changeTeacherNameHandler= (event) => {
        this.setState({teacherName: event.target.value});
    }

    changeMobileNumberHandler= (event) => {
        this.setState({mobileNumber: event.target.value});
    }
    changeNICHandler= (event) => {
        this.setState({nic: event.target.value});
    }
    changeSchoolBranchHandler= (event) => {
        this.setState({schoolBranch: event.target.value});
    }
    changeQualificationHandler= (event) => {
        this.setState({qualification: event.target.value});
    }
    changeMaritalStatusHandler= (event) => {
        this.setState({maritalStatus: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }

    cancel(){
        this.props.history.push('/teachers');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Teacher</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Teacher Name: </label>
                                        <input placeholder="Teacher Name" name="teacherName" className="form-control"
                                               value={this.state.teacherName} onChange={this.changeStudentNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Mobile Number: </label>
                                        <input placeholder="Mobile Number" name="mobileNumber" className="form-control"
                                               value={this.state.mobileNumber} onChange={this.changeGuardianHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> NIC: </label>
                                        <input placeholder="NIC" name="nic" className="form-control"
                                               value={this.state.nic} onChange={this.changePhoneHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> School Branch: </label>
                                        <input placeholder="School Branch" name="schoolBranch" className="form-control"
                                               value={this.state.schoolBranch} onChange={this.changeDobHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Qualification : </label>
                                        <input placeholder="Qualification" name="qualification" className="form-control"
                                               value={this.state.qualification} onChange={this.changeAddressHandler}/>
                                    </div> <div className = "form-group">
                                    <label> Marital Status : </label>
                                    <input placeholder="Marital Status" name="maritalStatus" className="form-control"
                                           value={this.state.maritalStatus} onChange={this.changeSchoolBranchHandler}/>
                                </div>
                                    <div className = "form-group">
                                        <label> Gender : </label>
                                        <input placeholder="Gender" name="gender" className="form-control"
                                               value={this.state.gender} onChange={this.changeGenderHandler}/>
                                    </div>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    <button className="btn btn-success" onClick={this.updateTeacher}style={{marginLeft: "10px"}}>Update</button>



                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateTeacher