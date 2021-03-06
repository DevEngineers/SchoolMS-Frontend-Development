import React, { Component } from 'react'
import StudentPaymentService from "../../services/StudentPaymentService";
import {IconButton, TextField} from "@material-ui/core";
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
        if(localStorage.getItem('userToken') === null){
            this.props.history.push('/');
        }

        StudentPaymentService.getPayments().then((res) => {
            this.setState({ payments: res});
        });
    }
    addPayment(){
        this.props.history.push('/add-payment/_add');
    }



    render() {
        const onSearchHandling = (e) => {

            const search = e.target.value;
            if(search){
                StudentPaymentService.getPaymentBySearch(search)
                    .then(res =>{
                        this.setState({payments: res});
                    }).catch(err =>{
                    console.error(err)
                })

            } else{
                StudentPaymentService.getPayments().then((res) => {
                    this.setState({ payments: res});
                });
            }
        }
        return (
            <div>
                <h2 className="text-center2">Payments List</h2>
                <div>
                    <div id={'searchDiv'}>
                        <TextField type={'text'}  id={'searchInput1'} variant="outlined" onChange={(e)=>onSearchHandling(e)}/>
                        <input type={'submit'} value={'Search'} id={'searchBtn1'}/>
                    </div>
                </div>
                <div className = "row">

                </div>
                <br/>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                        <tr>
                            <th> Student ID</th>
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
                                        <td> { payment.studentId.studentID} </td>
                                        <td> { payment.studentId.studentName} </td>
                                        <td> {payment.schoolBranch.branchName}</td>
                                        <td> {payment.paymentType}</td>
                                        <td> {payment.paidAmount}</td>
                                        <td> { payment.class.class} </td>
                                        <td> {payment.classType.name}</td>
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
                                                            onClick={ () => this.deletePayment(payment._id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </div>
                                            <div className={'btn btn-dangern'}>
                                                <IconButton aria-label="delete" style={{backgroundColor:"transparent"}}
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
