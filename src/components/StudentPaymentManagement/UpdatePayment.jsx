import React, { Component } from 'react'
import StudentPaymentService from "../../services/StudentPaymentService";
import '../../styles/TeacherStyles/Teacher.css';


/*
*  Registration number: IT 19167442
*  @Author :Nusky M.A.M
* */

class UpdatePayment extends Component {
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
        this.UpdatePayment = this.UpdatePayment.bind(this);


    }
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    componentDidMount(){
        StudentPaymentService.getPaymentById(this.state.id).then( (res) =>{
            let payment = res;
            this.setState({schoolBranch: payment.schoolBranch,
                class: payment.class,
                classType : payment.classType,
                studentId : payment.studentId,
                studentName : payment.studentName,
                paymentType : payment.paymentType,
                paidAmount : payment.paidAmount,
                dateOfPayment : payment.dateOfPayment,
            });
        });
    }
    UpdatePayment= (e) => {
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
        console.log('id => ' + JSON.stringify(this.state.id));
        StudentPaymentService.updatePayment(this.state.id,payment).then( res => {
            this.props.history.push('/payments');
        });
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


    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Payment</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> School Branch: </label>
                                        <select placeholder="Select School Branch" name="schoolBranch"  value={this.state.schoolBranch} className="form-control"  onChange ={event=>this.onChange(event)}>
                                            <option defaultValue>School Branch:</option>
                                            <option value="Colombo">Colombo</option>
                                            <option value="Kandy">Kandy</option>
                                            <option value="Dehiwala">Dehiwala</option>
                                            <option value="Negambo">Negambo</option>
                                            <option value="Ratmalana">Ratmalana</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Class: </label>
                                        <select placeholder="Select Class" name="class" value={this.state.class} className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option defaultValue>Grade</option>
                                            <option value="Grade 01">Grade 01</option>
                                            <option value="Grade 02">Grade 02</option>
                                            <option value="Grade 03">Grade 03</option>
                                            <option value="Grade 04">Grade 04</option>
                                            <option value="Grade 05">Grade 05</option>
                                            <option value="Grade 06">Grade 06</option>
                                            <option value="Grade 07">Grade 07</option>
                                            <option value="Grade 08">Grade 08</option>
                                            <option value="Grade 09">Grade 09</option>
                                            <option value="Grade 10">Grade 10</option>
                                            <option value="Grade 11">Grade 11</option>
                                            <option value="Grade 12">Grade 12</option>
                                            <option value="Grade 13">Grade 13</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Select Class Type: </label>
                                        <select value={this.state.classType} name="classType" className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option defaultValue>Class</option>
                                            <option value="Class A">Class A</option>
                                            <option value="Class B">Class B</option>
                                            <option value="Class C">Class C</option>
                                            <option value="Class D">Class D</option>
                                            <option value="Class E">Class E</option>

                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Student ID: </label>
                                        <input placeholder="Select Student ID" name="studentId" className="form-control"
                                               value={this.state.studentId}  onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Student Name : </label>
                                        <input placeholder="Select Student Name" name="studentName" className="form-control"
                                               value={this.state.studentName}  onChange ={event=>this.onChange(event)}/>
                                    </div> <div className = "form-group">
                                    <label> Payment Type : </label>
                                    <input placeholder="Select Payment Type" name="paymentType" className="form-control"
                                           value={this.state.paymentType}  onChange ={event=>this.onChange(event)}/>
                                </div>
                                    <div className = "form-group">
                                        <label> Paid Amount : </label>
                                        <input placeholder="Enter Paid Amount" name="paidAmount" className="form-control"
                                               value={this.state.paidAmount}  onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Of Payment: </label>
                                        <input placeholder="MM-DD-YYYY" name="dateOfPayment" className="form-control"
                                               value={this.state.dateOfPayment}  onChange ={event=>this.onChange(event)}/>
                                    </div>

                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    <button className="btn btn-success" onClick={this.UpdatePayment}style={{marginLeft: "10px"}}>Update</button>



                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdatePayment
