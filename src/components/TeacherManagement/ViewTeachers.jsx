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
        TeacherService.getTeachers(this.state.id).then( res => {
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
                            <div> { this.state.teacher.teacherName }</div>
                        </div>
                        <div className = "row">
                            <label> Mobile Number: </label>
                            <div> { this.state.teacher.mobileNumber }</div>
                        </div>
                        <div className = "row">
                            <label> Teacher NIC: </label>
                            <div> { this.state.teacher.nic }</div>
                        </div>
                        <div className = "row">
                            <label> School Branch: </label>
                            <div> { this.state.teacher.schoolBranch }</div>
                        </div>
                        <div className = "row">
                            <label> Qualification : </label>
                            <div> { this.state.teacher.qualification }</div>
                        </div>
                        <div className = "row">
                            <label> Marital Status: </label>
                            <div> { this.state.teacher.maritalStatus }</div>
                        </div>
                        <div className = "row">
                            <label> Gender </label>
                            <div> { this.state.teacher.gender }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTeachers