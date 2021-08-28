const RESULT_API_BASE_URI='http://localhost:5000/results';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ResultService{
    /**
     *  This service function is to send result details to backend
     */
    async storeResult(result){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(RESULT_API_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(result)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Get All results from backend
     */
    async getResults(){
        return await fetch(RESULT_API_BASE_URI,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to get a result from backend
     */
    async getResultsByID(id){
        return await fetch(RESULT_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(error => {
            console.log(error.message);
        })

    }


    /**
     *  This service function is to update stored result in backend
     */
    async updateResult(id,result){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(RESULT_API_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(result)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Remove stored result in backend
     */
    async removeResult(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(RESULT_API_BASE_URI+"/"+id,{
            headers:{
                /*'Authorization': bearer*/
            },
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }

}

export default new ResultService();