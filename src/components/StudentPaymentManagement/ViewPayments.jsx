import React, { Component } from 'react'
import StudentPaymentService from "../../services/StudentPaymentService";


class ViewPayments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            payments: {}
        }
    }

    componentDidMount(){
        if(localStorage.getItem('userToken') === null){
            this.props.history.push('/');
        }

        StudentPaymentService.getPaymentById(this.state.id).then( res => {
            this.setState({payments: res});
        })
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Payment Details</h3>
                    <div className = "card-body">
                        {/*<div className = "row">*/}
                        {/*    <label> Student School Branch: </label>*/}
                        {/*     { this.state.payments.schoolBranch.branchName }*/}
                        {/*</div>*/}
                        {/*<div className = "row">*/}
                        {/*    <label> Student Class: </label>*/}
                        {/*  { this.state.payments.class.class }*/}
                        {/*</div>*/}
                        {/*<div className = "row">*/}
                        {/*    <label> Student Class Type: </label>*/}
                        {/*   { this.state.payments.classType.name }*/}
                        {/*</div>*/}
                        {/*<div className = "row">*/}
                        {/*    <label> Student ID: </label>*/}
                        {/*    { this.state.payments.studentId.studentID }*/}
                        {/*</div>*/}
                        {/*<div className = "row">*/}
                        {/*    <label> Student Name: </label>*/}
                        {/*   { this.state.payments.studentId.studentName }*/}
                        {/*</div>*/}
                        <div className = "row">
                            <label> Payment Type : </label>
                           { this.state.payments.paymentType }
                        </div>
                        <div className = "row">
                            <label> Paid Amount: </label>
                          { this.state.payments.paidAmount }
                        </div>
                        <div className = "row">
                            <label> Date Of Payment: </label>
                           { this.state.payments.dateOfPayment }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPayments
