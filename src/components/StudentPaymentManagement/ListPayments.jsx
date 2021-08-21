import React, { Component } from 'react'
import StudentPaymentService from "../../Services/StudentPaymentService";
import {IconButton} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageViewIcon from "@material-ui/icons/Pageview";

class ListPayments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            payments: []
        }
        this.addPayment = this.addPayment.bind(this);
        this.editPayment = this.editPayment.bind(this);
        this.deletePayment = this.deletePayment.bind(this);

        this.addTeacher = this.addTeacher.bind(this);
        this.addStudent = this.addStudent.bind(this);
    }

    deletePayment(id){
        StudentPaymentService.deletePayment(id).then( res => {
            this.setState({payments: this.state.payments.filter(payment => payment.id !== id)});
        });
    }
    viewPayment(id){
        this.props.history.push(`/view-payment/${id}`);
    }
    editPayment(id){
        this.props.history.push(`/update-payment/${id}`);
    }

    componentDidMount(){
        StudentPaymentService.getPayments().then((res) => {
            this.setState({ payments: res.data});
        });
    }
    addPayment(){
        this.props.history.push('/add-payment/_add');
    }
    addStudent(){
        this.props.history.push('/add-student/_add');
    }
    addTeacher(){
        this.props.history.push('/add-teacher/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Payments List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPayment}> Add Payment</button>
                    <button className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                    <button className="btn btn-primary" onClick={this.addTeacher}> Add Teacher</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Student Name</th>
                            <th> School Branch</th>
                            <th> Payment Type</th>
                            <th> Paid Amount</th>
                            <th> Class</th>
                            <th> Class Type</th>
                            <th> Date Of Payment</th>
                            <th> Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.payments.map(
                                payment =>
                                    <tr key = {payment.id}>
                                        <td> { payment.studentName} </td>
                                        <td> { payment.schoolBranch} </td>
                                        <td> {payment.paymentType}</td>
                                        <td> {payment.paidAmount}</td>
                                        <td> { payment.class} </td>
                                        <td> { payment.classType} </td>
                                        <td> {payment.dateOfPayment}</td>
                                        <td>
                                            <div className={'btn btn-infon'}>
                                                <IconButton aria-label="edit" style={{backgroundColor:"transparent"}}
                                                            onClick={ () => this.editPayment(payment._id)}>
                                                    <EditIcon/>
                                                </IconButton>
                                            </div>
                                            <div className={'btn btn-infon'}>
                                                <IconButton aria-label="pageView" style={{backgroundColor:"transparent"}}
                                                            style={{marginLeft: "10px"}}
                                                            onClick={ () => this.deletePayment(payment._id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </div>
                                            <div className={'btn btn-dangern'}>
                                                <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
                                                            style={{marginLeft: "10px"}}
                                                            onClick={ () => this.viewPayment(payment._id)}>
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

export default ListPayments