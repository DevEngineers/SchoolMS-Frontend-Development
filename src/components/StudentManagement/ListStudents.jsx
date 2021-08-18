import React, { Component } from 'react'
import StudentService from "../../Services/StudentService";

class ListStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);

        this.addTeacher = this.addTeacher.bind(this);
        this.addPayment = this.addPayment.bind(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/add-student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }
    addTeacher(){
        this.props.history.push('/add-teacher/_add');
    }
    addPayment(){
        this.props.history.push('/add-payment/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}style={{marginLeft: "10px"}}> Add Student</button>
                    <button className="btn btn-primary" onClick={this.addTeacher}style={{marginLeft: "10px"}}> Add Teacher</button>
                    <button className="btn btn-primary" onClick={this.addPayment}style={{marginLeft: "10px"}}> Add Payment</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>

                            <th> Student Name</th>
                            <th> Guardian</th>
                            <th> Phone</th>
                            <th> School Branch</th>
                            <th> Class</th>
                            <th> Class Type</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.students.map(
                                student =>
                                    <tr key = {student.id}>
                                        <td> { student.studentName} </td>
                                        <td> {student.guardian}</td>
                                        <td> {student.phone}</td>
                                        <td> { student.dob} </td>
                                        <td> {student.address}</td>
                                        <td> {student.schoolBranch}</td>
                                        <td> { student.class} </td>
                                        <td> {student.classType}</td>
                                        <td> {student.gender}</td>
                                        <td>
                                            <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListStudents