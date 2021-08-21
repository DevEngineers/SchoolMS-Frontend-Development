import React, { Component } from 'react'
import StudentService from "../../Services/StudentService";

class ViewStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            students: {}
        }
    }

    componentDidMount(){
        StudentService.getStudents(this.state.id).then( res => {//change this method to get student by id now only for temporary
            this.setState({students: res.data});
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
                            <div> { this.state.students.studentName }</div>
                        </div>
                        <div className = "row">
                            <label> Guardian: </label>
                            <div> { this.state.students.guardian }</div>
                        </div>
                        <div className = "row">
                            <label> Phone: </label>
                            <div> { this.state.students.phone }</div>
                        </div>
                        <div className = "row">
                            <label> Date of Birth: </label>
                            <div> { this.state.students.dob }</div>
                        </div>
                        <div className = "row">
                            <label> Address: </label>
                            <div> { this.state.students.address }</div>
                        </div>
                        <div className = "row">
                            <label> School Branch: </label>
                            <div> { this.state.students.schoolBranch }</div>
                        </div>
                        <div className = "row">
                            <label> Class: </label>
                            <div> { this.state.students.class }</div>
                        </div>
                        <div className = "row">
                            <label> Class Type: </label>
                            <div> { this.state.students.classType }</div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.students.gender }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewStudents