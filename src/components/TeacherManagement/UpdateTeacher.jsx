import React, { Component } from 'react'
import TeacherService from "../../services/TeacherService";
import '../../styles/TeacherStyles/Teacher.css';
import BranchService from "../../services/BranchService";

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
            gender:'',
            branches:[]

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
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    componentDidMount(){
        if(localStorage.getItem('userToken') === null){
            this.props.history.push('/');
        }
        TeacherService.getTeacherById(this.state.id).then( (res) =>{
            let teacher = res;
            this.setState({teacherName: teacher.teacherName,
                mobileNumber: teacher.mobileNumber,
                nic : teacher.nic,
                schoolBranch : teacher.schoolBranch,
                qualification : teacher.qualification,
                maritalStatus : teacher.maritalStatus,
                gender : teacher.gender,
            });
        });

        BranchService.getBranches()
            .then(res => {
                this.setState({branches:res})
            }).catch(err => {
            console.error(err)
        })
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
        TeacherService.updateTeacher(this.state.id,teacher).then( res => {
            this.props.history.push('/teachers');
        });
    }

    /*updateTeacher = (e) => {
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
    }*/
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
                                        <input   placeholder="Teacher Name" name="teacherName" className="form-control"
                                                 value={this.state.teacherName} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Mobile Number: </label>
                                        <input placeholder="Mobile Number" name="mobileNumber" className="form-control"
                                               value={this.state.mobileNumber} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> NIC: </label>
                                        <input placeholder="NIC" name="nic" className="form-control"
                                               value={this.state.nic} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> School Branch: </label>
                                        <select placeholder="Select School Branch" name="schoolBranch"  value={this.state.schoolBranch} className="form-control"  onChange ={event=>this.onChange(event)}>
                                            <option value=''>{this.state.schoolBranch.branchName}</option>
                                            {
                                                this.state.branches.map(Branch =>
                                                    <option key={Branch._id} value={Branch._id}> {Branch.branchName} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Qualification : </label>
                                        <input placeholder="Qualification" name="qualification" className="form-control"
                                               value={this.state.qualification} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group" >
                                        <label> Marital Status : </label>
                                        <input disabled type="text"  name="maritalStatus" className = "form-control"  value={this.state.maritalStatus} onChange ={event=>this.onChange(event)}/>


                                    </div>
                                    <div className = "form-group" >
                                        <label> Gender : </label>
                                        <input disabled type="text"  name="gender"  className = "form-control" value={this.state.gender} onChange ={event=>this.onChange(event)} />


                                    </div>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    <button className="btn btn-success" onClick={this.updateTeacher} style={{marginLeft: "10px"}}>Update</button>



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
