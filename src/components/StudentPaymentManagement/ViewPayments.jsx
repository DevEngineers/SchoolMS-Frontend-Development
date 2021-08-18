import React, { Component } from 'react'
import StudentPaymentService from "../../Services/StudentPaymentService";

class ViewPayments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            payment: {}
        }
    }

    componentDidMount(){
        StudentPaymentService.getPaymentById(this.state.id).then( res => {
            this.setState({payment: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Payment Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Student School Branch: </label>
                            <div> { this.state.payment.schoolBranch }</div>
                        </div>
                        <div className = "row">
                            <label> Student Class: </label>
                            <div> { this.state.payment.class }</div>
                        </div>
                        <div className = "row">
                            <label> Student Class Type: </label>
                            <div> { this.state.payment.classType }</div>
                        </div>
                        <div className = "row">
                            <label> Student ID: </label>
                            <div> { this.state.payment.studentId }</div>
                        </div>
                        <div className = "row">
                            <label> Student Name: </label>
                            <div> { this.state.payment.studentName }</div>
                        </div>
                        <div className = "row">
                            <label> Payment Type : </label>
                            <div> { this.state.payment.paymentType }</div>
                        </div>
                        <div className = "row">
                            <label> Paid Amount: </label>
                            <div> { this.state.payment.paidAmount }</div>
                        </div>
                        <div className = "row">
                            <label> Date Of Payment: </label>
                            <div> { this.state.payment.dateOfPayment }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPayments