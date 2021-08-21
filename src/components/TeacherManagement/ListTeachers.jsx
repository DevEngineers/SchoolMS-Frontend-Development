import React, { Component } from 'react'
import TeacherService from "../../Services/TeacherService";

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
            this.setState({ teachers: res.data});
        });
    }

    addTeacher(){
        this.props.history.push('/add-teacher/_add');
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Teachers List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTeacher}> Add Teacher</button>
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
                                        <td> { teacher.schoolBranch} </td>
                                        <td> {teacher.qualification}</td>
                                        <td> {teacher.maritalStatus}</td>
                                        <td> { teacher.gender} </td>
                                        <td>
                                            <button onClick={ () => this.editTeacher(teacher._id)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTeacher(teacher._id)} className="btn btn-danger">Delete </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.viewTeacher(teacher._id)} className="btn btn-info">View </button>
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