/*
*  IT 19167442
*  Author Nusky M.A.M
* */


const STUDENTPAYMENT_API_BASE_URL = "http://localhost:5000/payment";

class StudentPaymentService{


    async getPayments(){
        return await fetch(STUDENTPAYMENT_API_BASE_URL+"",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async createPayment(payment){
        console.log(payment);
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(STUDENTPAYMENT_API_BASE_URL,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(payment)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }

    async getPaymentById(id){
        return await fetch(STUDENTPAYMENT_API_BASE_URL+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


    async updatePayment(id,Payment){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        console.log(Payment);
        return await fetch(STUDENTPAYMENT_API_BASE_URL+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(Payment)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    async deletePayment(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(STUDENTPAYMENT_API_BASE_URL+"/"+id,{
            headers:{
                'Authorization': bearer
            },
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }


}

export default new StudentPaymentService();