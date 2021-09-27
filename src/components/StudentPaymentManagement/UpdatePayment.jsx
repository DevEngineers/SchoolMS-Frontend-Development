import React, { Component } from 'react'
import StudentPaymentService from "../../services/StudentPaymentService";
import '../../styles/TeacherStyles/Teacher.css';
import ClassService from "../../services/ClassService";
import ClassTypeService from "../../services/ClassTypeService";
import BranchService from "../../services/BranchService";
import StudentService from "../../services/StudentService";


/*
*  Registration number: IT 19167442
*  @Author :Nusky M.A.M
* */

class UpdatePayment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            studentId: '',
            studentName: '',
            schoolBranch:'',
            class:'',
            classType:'',
            paymentType: '',
            paidAmount: '',
            dateOfPayment:'',
            classes:[],
            classTypes:[],
            branches:[],
            studentIds:[],
            studentNames:[],
            paymentTypes:[]

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
            this.setState({
                schoolBranch: payment.schoolBranch,
                studentId : payment.studentId,
                studentName : payment.studentName,
                class: payment.class,
                classType : payment.classType,
                paymentType : payment.paymentType,
                paidAmount : payment.paidAmount,
                dateOfPayment : payment.dateOfPayment,
            });
        });
        ClassService.getClasses()
            .then(res => {
                this.setState({classes:res})
            }).catch(err => {
            console.error(err)
        })
        ClassTypeService.getClassTypes()
            .then(res => {
                this.setState({classTypes:res})
            }).catch(err => {
            console.error(err)
        })

        BranchService.getBranches()
            .then(res => {
                this.setState({branches:res})
            }).catch(err => {
            console.error(err)
        })
        StudentService.getStudents()
            .then(res => {
                this.setState({studentIds:res,studentNames:res})
            }).catch(err => {
            console.error(err)
        })
        StudentPaymentService.getPayments()
            .then(res => {
                this.setState({paymentTypes:res})
            }).catch(err => {
            console.error(err)
        })

        // StudentService.getStudents()
        //     .then(res => {
        //         this.setState({studentNames:res})
        //     }).catch(err => {
        //     console.error(err)
        // })
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
                                        <label> Student ID: </label>
                                        {/*<input placeholder="Student ID" name="studentId" className="form-control"*/}
                                        {/*       value={this.state.studentId} onChange={this.changeStudentIdHandler}/>*/}
                                        <select disabled value={this.state.studentId} className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option value=''> {this.state.studentId.studentID}</option>
                                            {
                                                this.state.studentIds.map(name =>
                                                    <option key={name._id} value={name._id}> {name.studentID} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Student Name : </label>
                                        <select disabled name="studentName" value={this.state.studentName.studentName} className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option  value=''> {this.state.studentId.studentName}</option>
                                            {
                                                this.state.studentNames.map(name =>
                                                    <option key={name._id} value={name._id}> {name.studentName} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> School Branch: </label>
                                        <select placeholder="Select School Branch" name="schoolBranch"  value={this.state.branches} className="form-control"  onChange ={event=>this.onChange(event)}>
                                            <option value=''>{this.state.schoolBranch.branchName}</option>
                                            {
                                                this.state.branches.map(Branch =>
                                                    <option key={Branch._id} value={Branch._id}> {Branch.branchName} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Class: </label>
                                        <select placeholder="Select Class" name="class" value={this.state.class} className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option value=''>{this.state.class.class}</option>
                                            {
                                                this.state.classes.map(Class =>
                                                    <option key={Class._id} value={Class._id}> {Class.class} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Select Class Type: </label>
                                        <select value={this.state.classType} name="classType" className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option value=''>{this.state.classType.name}</option>
                                            {
                                                this.state.classTypes.map(type =>
                                                    <option key={type._id} value={type._id}> {type.name} </option>
                                                )
                                            }

                                        </select>
                                    </div>

                                    <div className = "form-group">
                                    <label> Payment Type : </label>
                                    {/*<input placeholder="Select Payment Type"  className="form-control"*/}
                                    {/*       value={this.state.paymentType}  onChange ={event=>this.onChange(event)}/>*/}
                                        <select value={this.state.paymentType} name="paymentType" className="form-control" onChange ={event=>this.onChange(event)}>
                                            <option  > </option>
                                            <option value="Admission Fees">Admission Fees</option>
                                            <option value="Term Fees">Term Fees</option>
                                            <option value="Exam Fees">Exam Fees</option>
                                            <option value="Service Fees">Service Fees</option>
                                            <option value="Others">Others</option>
                                        </select>
                                </div>
                                    <div className = "form-group">
                                        <label> Paid Amount : </label>
                                        <input placeholder="Enter Paid Amount" name="paidAmount" className="form-control"
                                               value={this.state.paidAmount}  onChange ={event=>this.onChange(event)}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Of Payment: </label>
                                        <input disabled placeholder="MM-DD-YYYY" name="dateOfPayment" className="form-control"
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
