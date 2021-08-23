import React, { Component } from 'react'
import TeacherService from "../../Services/TeacherService";

class ViewTeachers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            teacher: {}
        }
    }

    componentDidMount(){
        TeacherService.getTeacherById(this.state.id).then( res => {
            this.setState({teacher: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Teacher Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Teacher Name: </label>
                            { this.state.teacher.teacherName }
                        </div>
                        <div className = "row">
                            <label> Mobile Number: </label>
                            { this.state.teacher.mobileNumber }
                        </div>
                        <div className = "row">
                            <label> Teacher NIC: </label>
                            { this.state.teacher.nic }
                        </div>
                        <div className = "row">
                            <label> School Branch: </label>
                          { this.state.teacher.schoolBranch }
                        </div>
                        <div className = "row">
                            <label> Qualification : </label>
                           { this.state.teacher.qualification }
                        </div>
                        <div className = "row">
                            <label> Marital Status: </label>
                            { this.state.teacher.maritalStatus }
                        </div>
                        <div className = "row">
                            <label> Gender : </label>
                           { this.state.teacher.gender }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTeachers