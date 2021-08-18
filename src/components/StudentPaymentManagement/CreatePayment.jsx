import React, { Component } from 'react'
import StudentPaymentService from "../../Services/StudentPaymentService";
import '../../styles/Teacher.css';

/*
*  Registration number: IT 19167442
*  @Author :Nusky M.A.M
* */

class CreatePayment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            schoolBranch:'',
            class:'',
            classType:'',
            studentId: '',
            studentName: '',
            paymentType: '',
            paidAmount: '',
            dateOfPayment:''

        }
        this.changeSchoolBranchHandler = this.changeSchoolBranchHandler.bind(this);
        this.changeClassHandler = this.changeClassHandler.bind(this);
        this.changeClassTypeHandler = this.changeClassTypeHandler.bind(this);
        this.changeStudentIdHandler = this.changeStudentIdHandler.bind(this);
        this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
        this.changePaymentTypeHandler = this.changePaymentTypeHandler.bind(this);
        this.changePaidAmountHandler = this.changePaidAmountHandler.bind(this);
        this.changeDateOfPaymentHandler = this.changeDateOfPaymentHandler.bind(this);
        this.saveOrUpdatePayment = this.saveOrUpdatePayment.bind(this);


    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            StudentPaymentService.getPaymentById(this.state.id).then( (res) =>{
                let payment = res.data;
                this.setState({schoolBranch: payment.schoolBranch,
                    class: payment.class,
                    classType: payment.classType,
                    studentId: payment.studentId,
                    studentName: payment.studentName,
                    paymentType: payment.paymentType,
                    paidAmount: payment.paidAmount,
                    dateOfPayment: payment.dateOfPayment
                });
            });
        }
    }
    saveOrUpdatePayment = (e) => {
        e.preventDefault();
        let payment = {schoolBranch: this.state.schoolBranch,
            class: this.state.class,
            classType: this.state.classType,
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            paymentType: this.state.paymentType,
            paidAmount: this.state.paidAmount,
            dateOfPayment: this.state.dateOfPayment};
        console.log('payment => ' + JSON.stringify(payment));

        // step 5
        if(this.state.id === '_add'){
            StudentPaymentService.createPayment(payment).then(res =>{
                this.props.history.push('/payments');
            });
        }else{
            StudentPaymentService.updatePayment(payment, this.state.id).then( res => {
                this.props.history.push('/payments');
            });
        }
    }

    changeSchoolBranchHandler= (event) => {
        this.setState({schoolBranch: event.target.value});
    }
    changeClassHandler= (event) => {
        this.setState({class: event.target.value});
    }
    changeClassTypeHandler= (event) => {
        this.setState({classType: event.target.value});
    }
    changeStudentIdHandler= (event) => {
        this.setState({studentId: event.target.value});
    }
    changeStudentNameHandler= (event) => {
        this.setState({studentName: event.target.value});
    }

    changePaymentTypeHandler= (event) => {
        this.setState({paymentType: event.target.value});
    }
    changePaidAmountHandler= (event) => {
        this.setState({paidAmount: event.target.value});
    }
    changeDateOfPaymentHandler= (event) => {
        this.setState({dateOfPayment: event.target.value});
    }

    cancel(){
        this.props.history.push('/payments');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Payment</h3>
        }else{
            return <h3 className="text-center">Update Payment</h3>
        }

    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> School Branch: </label>
                                        <input placeholder="Select School Branch" name="schoolBranch" className="form-control"
                                               value={this.state.schoolBranch} onChange={this.changeSchoolBranchHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Class: </label>
                                        <input placeholder="Select Class" name="class" className="form-control"
                                               value={this.state.class} onChange={this.changeClassHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Select Class Type: </label>
                                        <input placeholder="Select Class Type" name="classType" className="form-control"
                                               value={this.state.classType} onChange={this.changeClassTypeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Student ID: </label>
                                        <input placeholder="Select Student ID" name="studentId" className="form-control"
                                               value={this.state.studentId} onChange={this.changeStudentIdHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Student Name : </label>
                                        <input placeholder="Select Student Name" name="studentName" className="form-control"
                                               value={this.state.studentName} onChange={this.changeStudentNameHandler}/>
                                    </div> <div className = "form-group">
                                    <label> Payment Type : </label>
                                    <input placeholder="Select Payment Type" name="paymentType" className="form-control"
                                           value={this.state.paymentType} onChange={this.changePaymentTypeHandler}/>
                                </div>
                                    <div className = "form-group">
                                        <label> Paid Amount : </label>
                                        <input placeholder="Enter Paid Amount" name="paidAmount" className="form-control"
                                               value={this.state.paidAmount} onChange={this.changePaidAmountHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Of Payment: </label>
                                        <input type="date" placeholder="MM-DD-YYYY" name="dateOfPayment" className="form-control"
                                               value={this.state.dateOfPayment} onChange={this.changeDateOfPaymentHandler}/>
                                    </div>

                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    <button className="btn btn-success" onClick={this.saveOrUpdatePayment}style={{marginLeft: "10px"}}>Save</button>



                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreatePayment