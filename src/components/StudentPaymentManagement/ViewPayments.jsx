import React, { Component } from 'react'
import StudentPaymentService from "../../Services/StudentPaymentService";

class ViewPayments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            payments: {}
        }
    }

    componentDidMount(){
        StudentPaymentService.getPayments().then((res) => {
            this.setState({ payments: res.data});
        });
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
                            <div> { this.state.payments.schoolBranch }</div>
                        </div>
                        <div className = "row">
                            <label> Student Class: </label>
                            <div> { this.state.payments.class }</div>
                        </div>
                        <div className = "row">
                            <label> Student Class Type: </label>
                            <div> { this.state.payments.classType }</div>
                        </div>
                        <div className = "row">
                            <label> Student ID: </label>
                            <div> { this.state.payments.studentId }</div>
                        </div>
                        <div className = "row">
                            <label> Student Name: </label>
                            <div> { this.state.payments.studentName }</div>
                        </div>
                        <div className = "row">
                            <label> Payment Type : </label>
                            <div> { this.state.payments.paymentType }</div>
                        </div>
                        <div className = "row">
                            <label> Paid Amount: </label>
                            <div> { this.state.payments.paidAmount }</div>
                        </div>
                        <div className = "row">
                            <label> Date Of Payment: </label>
                            <div> { this.state.payments.dateOfPayment }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPayments