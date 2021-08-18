import React, { Component } from 'react'
import StudentService from "../../Services/StudentService";

class ViewStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student Name: </label>
                            <div> { this.state.student.studentName }</div>
                        </div>
                        <div className = "row">
                            <label> Guardian: </label>
                            <div> { this.state.student.guardian }</div>
                        </div>
                        <div className = "row">
                            <label> Phone: </label>
                            <div> { this.state.student.phone }</div>
                        </div>
                        <div className = "row">
                            <label> Date of Birth: </label>
                            <div> { this.state.student.dob }</div>
                        </div>
                        <div className = "row">
                            <label> Address: </label>
                            <div> { this.state.student.address }</div>
                        </div>
                        <div className = "row">
                            <label> School Branch: </label>
                            <div> { this.state.student.schoolBranch }</div>
                        </div>
                        <div className = "row">
                            <label> Class: </label>
                            <div> { this.state.student.class }</div>
                        </div>
                        <div className = "row">
                            <label> Class Type: </label>
                            <div> { this.state.student.classType }</div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.student.gender }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudents