import axios from 'axios';

const STUDENTPAYMENT_API_BASE_URL = "http://localhost:8087/payments/";

class StudentPaymentService {

    getPayments(){
        return axios.get(STUDENTPAYMENT_API_BASE_URL);
    }

    createPayment(payment){
        return axios.post(STUDENTPAYMENT_API_BASE_URL, payment);
    }

    getPaymentById(paymentId){
        return axios.get(STUDENTPAYMENT_API_BASE_URL + '/' + paymentId);
    }

    updatePayment(payment, paymentId){
        return axios.put(STUDENTPAYMENT_API_BASE_URL + '/' + paymentId, payment);
    }

    deletePayment(paymentId){
        return axios.delete(STUDENTPAYMENT_API_BASE_URL + '/' + paymentId);
    }
}

export default new StudentPaymentService()