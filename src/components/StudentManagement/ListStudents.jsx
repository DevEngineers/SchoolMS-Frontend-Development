import React, { Component } from 'react'
import StudentService from "../../Services/StudentService";
import '../../styles/Student.css';

class ListStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);


    }



    deleteStudent(id){
        StudentService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/viewStudents/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/update-Student/${id}`);
    }

    componentDidMount(){
        StudentService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });

    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }

    render() {

        console.log(this.state.students);
        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}style={{marginLeft: "10px"}}> Add Student</button>
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
                            <th> Gender</th>
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
                                        <td> {student.schoolBranch}</td>
                                        <td> { student.class} </td>
                                        <td> {student.classType}</td>
                                        <td> {student.gender}</td>
                                        <td>
                                            <button onClick={ () => this.editStudent(student._id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student._id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewStudent(student._id)} className="btn btn-info">View </button>
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