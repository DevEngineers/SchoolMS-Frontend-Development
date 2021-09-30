import React, { Component } from 'react'
import StudentService from "../../services/StudentService";

class ViewStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: []
        }
    }

    componentDidMount(){
        if(localStorage.getItem('userToken') === null){
            this.props.history.push('/');
        }

        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res});
            console.log("fetch",res)
            console.log("class",this.state.student.class.class)

        })
    }

    render() {
        console.log(this.state.student);
        return (

            <div>
                <br/>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">

                        <div className = "row" >
                            <label> Student ID: </label>
                            { this.state.student.studentID }
                        </div>

                        <div className = "row" >
                            <label> Student Name: </label>
                            { this.state.student.studentName }
                        </div>

                        <div className = "row">
                            <label> Guardian: </label>
                            { this.state.student.guardian }
                        </div>

                        <div className = "row">
                            <label> Phone: </label>
                          { this.state.student.phone }
                        </div>

                        <div className = "row">
                            <label> Date of Birth: </label>
                           { this.state.student.dob }
                        </div>

                        <div className = "row">
                            <label> Address: </label>
                           { this.state.student.address }
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            { this.state.student.gender }
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default ViewStudents
