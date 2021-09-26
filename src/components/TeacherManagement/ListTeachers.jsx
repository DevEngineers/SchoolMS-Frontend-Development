import React, { Component } from 'react'
import TeacherService from "../../services/TeacherService";
import {IconButton, TextField} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageViewIcon from "@material-ui/icons/Pageview";

class ListTeachers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teachers: []
        }
        this.addTeacher = this.addTeacher.bind(this);
        this.editTeacher = this.editTeacher.bind(this);
        this.deleteTeacher = this.deleteTeacher.bind(this);

    }

    deleteTeacher(id){
        TeacherService.deleteTeacher(id).then( res => {
            this.setState({teachers: this.state.teachers.filter(teacher => teacher.id !== id)});
        });
    }
    viewTeacher(id){
        this.props.history.push(`/view-teacher/${id}`);
    }
    editTeacher(id){
        this.props.history.push(`/update-teacher/${id}`);
    }

    componentDidMount(){
        TeacherService.getTeachers().then((res) => {
            this.setState({ teachers: res});
        });
    }

    addTeacher(){
        this.props.history.push('/add-teacher/_add');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Teachers List</h2>
                <div>
                    <div id={'searchDiv'}>
                        <TextField type={'text'}  id={'searchInput1'} variant="outlined"/>
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

                            <th> Teacher Name</th>
                            <th> Mobile Number</th>
                            <th> NIC</th>
                            <th> School Branch</th>
                            <th> Qualification</th>
                            <th> Marital Status</th>
                            <th> Gender</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.teachers.map(
                                teacher =>
                                    <tr key = {teacher.id}>
                                        <td> { teacher.teacherName} </td>
                                        <td> {teacher.mobileNumber}</td>
                                        <td> {teacher.nic}</td>
                                        <td> { teacher.schoolBranch.branchName} </td>
                                        <td> {teacher.qualification}</td>
                                        <td> {teacher.maritalStatus}</td>
                                        <td> { teacher.gender} </td>
                                        <td>
                                            <div className={'btn btn-infon'}>
                                                <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                                            onClick={ () => this.editTeacher(teacher._id)}>
                                                    <EditIcon/>
                                                </IconButton>
                                            </div>
                                            <div className={'btn btn-infon'}>
                                                <IconButton aria-label="pageView" style={{backgroundColor:"transparent"}}
                                                            style={{marginLeft: "10px"}}
                                                            onClick={ () => this.deleteTeacher(teacher._id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </div>
                                            <div className={'btn btn-dangern'}>
                                                <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                                            style={{marginLeft: "10px"}}
                                                            onClick={ () => this.viewTeacher(teacher._id)}>
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

export default ListTeachers
