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

class CreatePayment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            schoolBranch:'',
            class:'Grade 13',
            classType:'Class E',
            studentId: '',
            studentName: '',
            paymentType: '',
            paidAmount: '',
            dateOfPayment:'',
            classes:[],
            classTypes:[],
            branches:[],
            studentIds:[],
            studentNames:[]

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
        if(localStorage.getItem('userToken') === null){
            this.props.history.push('/');
        }

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
                this.setState({studentIds:res})
            }).catch(err => {
            console.error(err)
        })

        StudentService.getStudents()
            .then(res => {
                this.setState({studentNames:res})
            }).catch(err => {
            console.error(err)
        })


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

            StudentPaymentService.createPayment(payment).then(res =>{
                this.props.history.push('/payments');
            });
        /*else
            {
            StudentPaymentService.updatePayment(payment, this.state.id).then( res => {
                this.props.history.push('/payments');
            });
        }*/
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
        this.props.history.push('/add-payment/_add');
    }


    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Payment</h3>
        }else{
            return <h3 className="text-center">Add Payment</h3>
        }

    }

    render() {
        return (
            <div>
                <br/>
                <div className = "container">
                    <div className = "row">

                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Student ID: </label>
                                        {/*<input placeholder="Student ID" name="studentId" className="form-control"*/}
                                        {/*       value={this.state.studentId} onChange={this.changeStudentIdHandler}/>*/}
                                        <select value={this.state.studentId} className="form-control" onChange={this.changeStudentIdHandler}>
                                            <option value=''>Select Student ID</option>
                                            {
                                                this.state.studentIds.map(name =>
                                                    <option key={name._id} value={name._id}> {name.studentID} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Student Name : </label>
                                        {/*<input placeholder="Student Name" name="studentName" className="form-control"*/}
                                        {/*       value={this.state.studentName} onChange={this.changeStudentNameHandler}/>*/}
                                        <select value={this.state.studentName} className="form-control" onChange={this.changeStudentNameHandler}>
                                            <option value=''>Select Student Name</option>
                                            {
                                                this.state.studentNames.map(name =>
                                                    <option key={name._id} value={name._id}> {name.studentName} </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> School Branch: </label>
                                        {/*<select value={this.state.schoolBranch} className="form-control" onChange={this.changeSchoolBranchHandler}>*/}
                                        {/*    <option defaultValue>School Branch:</option>*/}
                                        {/*    <option value="Colombo">Colombo</option>*/}
                                        {/*    <option value="Kandy">Kandy</option>*/}
                                        {/*    <option value="Dehiwala">Dehiwala</option>*/}
                                        {/*    <option value="Negambo">Negambo</option>*/}
                                        {/*    <option value="Ratmalana">Ratmalana</option>*/}
                                        {/*</select>*/}
                                        <select value={this.state.schoolBranch} name="schoolBranch" className="form-control" onChange={this.changeSchoolBranchHandler}>
                                            <option value=''>Select Branch</option>
                                            {
                                                this.state.branches.map(Branch =>
                                                    <option key={Branch._id} value={Branch._id}> {Branch.branchName} </option>
                                                )
                                            }

                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Select Grade: </label>
                                        {/*<select value={this.state.class} className="form-control" onChange={this.changeClassHandler}>*/}
                                        {/*    <option defaultValue>Grade</option>*/}
                                        {/*    <option value="Grade 01">Grade 01</option>*/}
                                        {/*    <option value="Grade 02">Grade 02</option>*/}
                                        {/*    <option value="Grade 03">Grade 03</option>*/}
                                        {/*    <option value="Grade 04">Grade 04</option>*/}
                                        {/*    <option value="Grade 05">Grade 05</option>*/}
                                        {/*    <option value="Grade 06">Grade 06</option>*/}
                                        {/*    <option value="Grade 07">Grade 07</option>*/}
                                        {/*    <option value="Grade 08">Grade 08</option>*/}
                                        {/*    <option value="Grade 09">Grade 09</option>*/}
                                        {/*    <option value="Grade 10">Grade 10</option>*/}
                                        {/*    <option value="Grade 11">Grade 11</option>*/}
                                        {/*    <option value="Grade 12">Grade 12</option>*/}
                                        {/*    <option value="Grade 13">Grade 13</option>*/}
                                        {/*</select>*/}

                                        <select value={this.state.class} name="class" className="form-control" onChange={this.changeClassHandler}>
                                            <option value=''>Select Class</option>
                                            {
                                                this.state.classes.map(Class =>
                                                    <option key={Class._id} value={Class._id}> {Class.class} </option>
                                                )
                                            }

                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label> Select Class Type: </label>
                                        {/*<select value={this.state.classType} name="classType" className="form-control" onChange={this.changeClassTypeHandler}>*/}
                                        {/*    <option defaultValue>Class</option>*/}
                                        {/*    <option value="Class A">Class A</option>*/}
                                        {/*    <option value="Class B">Class B</option>*/}
                                        {/*    <option value="Class C">Class C</option>*/}
                                        {/*    <option value="Class D">Class D</option>*/}
                                        {/*    <option value="Class E">Class E</option>*/}

                                        {/*</select>*/}
                                        <select value={this.state.classType} className="form-control" onChange={this.changeClassTypeHandler}>
                                            <option value=''>Select Class Type</option>
                                            {
                                                this.state.classTypes.map(type =>
                                                    <option key={type._id} value={type._id}> {type.name} </option>
                                                )
                                            }
                                        </select>


                                    </div>

                                    <div className = "form-group">
                                    <label> Payment Type : </label>
                                    <select value={this.state.paymentType} className="form-control" onChange={this.changePaymentTypeHandler}>
                                        <option defaultValue >Payment Type:</option>
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
                                               value={this.state.paidAmount} onChange={this.changePaidAmountHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Date Of Payment: </label>
                                        <input type="date" placeholder="MM-DD-YYYY" name="dateOfPayment" className="form-control"
                                               value={this.state.dateOfPayment} onChange={this.changeDateOfPaymentHandler}/>
                                    </div>

                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} >Cancel</button>
                                    <button className="btn btn-success" onClick={this.saveOrUpdatePayment} style={{marginLeft: "10px"}}>Save</button>



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
