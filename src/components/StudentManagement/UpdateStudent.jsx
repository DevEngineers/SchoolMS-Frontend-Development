import React, { Component } from 'react'
import StudentService from "../../services/StudentService";
import '../../styles/TeacherStyles/Teacher.css';
import ClassService from "../../services/ClassService";
import ClassTypeService from "../../services/ClassTypeService";
import BranchService from "../../services/BranchService";


/*
*  Registration number: IT19167442
*  @Author :Nusky M.A.M
* */

class UpdateStudent extends Component {
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
            gender:'',
            classes:[],
            classTypes:[],
            branches:[]

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
        this.updateStudent = this.updateStudent.bind(this);

    }

    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }
    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( (res) =>{
            let student = res;
            this.setState({studentName: student.studentName,
                guardian: student.guardian,
                phone : student.phone,
                dob : student.dob,
                address : student.address,
                schoolBranch : student.schoolBranch,
                class : student.class,
                classType : student.classType,
                gender : student.gender,
            });
        });

        ClassService.getClasses()
            .then(res => {
                this.setState({classes:res})
            }).catch(err => {
            console.error(err)
        })
        ClassTypeService.getClassTypes()
            .then(res => {
                this.setState({classTypes:res})
            }).catch(err => {
            console.error(err)
        })

        BranchService.getBranches()
            .then(res => {
                this.setState({branches:res})
            }).catch(err => {
            console.error(err)
        })
    }
    updateStudent= (e) => {
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
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentService.updateStudent(this.state.id,student).then( res => {
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
        this.props.history.push('/students');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Student</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Student Name: </label>
                                        <input placeholder="Student Name" name="studentName" className="form-control"
                                               value={this.state.studentName} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Guardian: </label>
                                        <input placeholder="Guardian" name="guardian" className="form-control"
                                               value={this.state.guardian} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Phone: </label>
                                        <input placeholder="Phone" name="phone" className="form-control"
                                               value={this.state.phone} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Of Birth: </label>
                                        <input type="date" placeholder="MM-DD-YYYY" name="dob" className="form-control"
                                               value={this.state.dob} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Address : </label>
                                        <input placeholder="Address" name="address" className="form-control"
                                               value={this.state.address} onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                    <label> School Branch : </label>
                                        <select placeholder="Select School Branch" name="schoolBranch"  value={this.state.branches} className="form-control"  onChange ={event=>this.onChange(event)}>
                                            {/*<option defaultValue>School Branch:</option>*/}
                                            {/*<option value="Colombo">Colombo</option>*/}
                                            {/*<option value="Kandy">Kandy</option>*/}
                                            {/*<option value="Dehiwala">Dehiwala</option>*/}
                                            {/*<option value="Negambo">Negambo</option>*/}
                                            {/*<option value="Ratmalana">Ratmalana</option>*/}
                                            <option value=''>{this.state.schoolBranch.branchName}</option>
                                            {
                                                this.state.branches.map(Branch =>
                                                    <option key={Branch._id} value={Branch._id}> {Branch.branchName} </option>
                                                )
                                            }
                                        </select>
                                </div>
                                    <div className = "form-group">
                                        <label> Class : </label>
                                        <select placeholder="Select Class" name="class" value={this.state.class} className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option value=''>{this.state.class.class}</option>
                                            {
                                                this.state.classes.map(Class =>
                                                    <option key={Class._id} value={Class._id}> {Class.class} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Class Type: </label>
                                        <select value={this.state.classType} name="classType" className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option value=''>{this.state.classType.name}</option>
                                            {
                                                this.state.classTypes.map(type =>
                                                    <option key={type._id} value={type._id}> {type.name} </option>
                                                )
                                            }

                                        </select>
                                    </div>
                                    <div className = "form-group" >
                                        <label> Gender : </label>
                                        <input disabled type="text"  name="gender"  className = "form-control" value={this.state.gender} onChange ={event=>this.onChange(event)} />


                                    </div>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    <button className="btn btn-success" onClick={this.updateStudent}style={{marginLeft: "10px"}}>Update</button>



                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateStudent
