/**
 * @author : M.A.M Nusky
 * Registration Number : IT19167442
 */


const STUDENTPAYMENT_API_BASE_URL = 'http://localhost:5000/fees';

class StudentPaymentService{

    /**
     *  This service function is to Get All StudentPayments from backend
     */
    async getPayments(){
        return await fetch(STUDENTPAYMENT_API_BASE_URL,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to send Teachers details to the backend
     */
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

    /**
     *  This service function is to Get a single StudentPayment from backend
     */
    async getPaymentById(id){
        return await fetch(STUDENTPAYMENT_API_BASE_URL+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to update Existing stored StudentPayment in backend
     */
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
    /**
     *  This service function is to Remove/Delete stored StudentPayment in backend
     */
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
    /**
     *  This service function is to get StudentPayment from backend
     *  according to the user input
     */
    async getPaymentBySearch(Value){
        return await fetch(STUDENTPAYMENT_API_BASE_URL+"/search/"+Value,{
            method:"GET",
        }).then(response =>{
            return response.json();
        }).catch(error => {
            console.log(error.message);
        })
    }

    async generatePaymentReport(payment) {
        console.log(payment)
        const bearer = "Bearer " + localStorage.getItem("userToken");
        return await fetch(STUDENTPAYMENT_API_BASE_URL + "/generate/report", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
                /*'Authorization': bearer*/
            },
            body:JSON.stringify(payment)
        })
            .then((response) => {
                return response;
            })
            .catch((reason) => {
                return reason;
            });
    }


}

export default new StudentPaymentService();
