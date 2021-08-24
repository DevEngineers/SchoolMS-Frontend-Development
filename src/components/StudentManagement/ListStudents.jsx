import React, { Component } from 'react'
import '../../styles/Teacher.css';
import StudentService from "../../Services/StudentService";
import {IconButton, TextField} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageViewIcon from "@material-ui/icons/Pageview";

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
        this.props.history.push(`/view-Student/${id}`);
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
                <div>
                    <div id={'searchDiv'}>
                        <TextField type={'text'}  id={'searchInput'} variant="outlined"/>
                        <input type={'submit'} value={'Search'} id={'searchBtn'}/>
                    </div>
                </div>
                <div className = "row">
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>

                            <th> Student Name</th>
                            <th> Guardian</th>
                            <th> Phone</th>
                            <th> Date Of Birth</th>
                            <th> Address</th>
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
                                        <td> {student.dob}</td>
                                        <td> {student.address}</td>
                                        <td> {student.schoolBranch}</td>
                                        <td> { student.class} </td>
                                        <td> {student.classType}</td>
                                        <td> {student.gender}</td>
                                        <td>
                                            <div className={'btn btn-infon'}>
                                                <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                                            onClick={ () => this.editStudent(student._id)}>
                                                    <EditIcon/>
                                                </IconButton>
                                            </div>
                                            <div className={'btn btn-infon'}>
                                                <IconButton aria-label="pageView" style={{backgroundColor:"transparent"}}
                                                            onClick={ () => this.deleteStudent(student._id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </div>
                                            <div className={'btn btn-dangern'}>
                                                <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                                            onClick={ () => this.viewStudent(student._id)}>
                                                    <PageViewIcon/>
                                                </IconButton>
                                            </div>
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