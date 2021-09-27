import React, {Component, useEffect, useState} from 'react'
import '../../styles/TeacherStyles/Teacher.css';
import StudentService from "../../services/StudentService";
import {IconButton, TextField} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageViewIcon from "@material-ui/icons/Pageview";
import {useHistory} from "react-router-dom";
import ClassService from "../../services/ClassService";
import BranchService from "../../services/BranchService";

class ListStudents extends Component {

    constructor(props) {
        // const [Students,setStudent] = useState([]);
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
            console.log(res);
            this.setState({ students: res});
        });
    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }

    // onSearchHandling(e){
    //
    // }

    render() {
        const onSearchHandling = (e) => {

            const search = e.target.value;
            if(search){
                StudentService.getStudentBySearch(search)
                    .then(res =>{
                        this.setState({students: res});
                    }).catch(err =>{
                    console.error(err)
                })

            } else{
                StudentService.getStudents().then((res) => {
                    this.setState({ students: res});
                });
            }
        }


        return (
            <div>
                <h2 className="text-center">Students List</h2>
                <div>
                    <div id={'searchDiv'}>
                        <TextField type={'text'}  id={'searchInput1'} variant="outlined" onChange={(e)=>onSearchHandling(e)}/>
                        <input type={'submit'} value={'Search'} id={'searchBtn1'}/>
                    </div>
                </div>
                <div className = "row">
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>

                            <th> Student ID</th>
                            <th> Student Name</th>
                            <th> Guardian</th>
                            <th> Phone</th>
                            <th> Date Of Birth</th>
                            {/*<th> Address</th>*/}
                            <th> School Branch</th>
                            <th> Class</th>
                            <th> Class Type</th>
                            {/*<th> Gender</th>*/}
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.students.map(
                                student =>
                                    <tr key = {student.id}>
                                        <td> { student.studentID} </td>
                                        <td> { student.studentName} </td>
                                        <td> {student.guardian}</td>
                                        <td> {student.phone}</td>
                                        <td> {student.dob}</td>
                                        {/*<td> {student.address}</td>*/}
                                        <td> {student.schoolBranch.branchName}</td>
                                        <td> { student.class.class} </td>
                                        <td> {student.classType.name}</td>
                                        {/*<td> {student.gender}</td>*/}
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
