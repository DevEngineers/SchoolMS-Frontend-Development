const CLASS_BASE_URI='http://localhost:5000/class';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class ClassService{
    /**
     *  This service function is to send class details to backend
     */
    async createClass(Class){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(CLASS_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(Class)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Get All Classes from backend
     */
    async getClasses(){
        return await fetch(CLASS_BASE_URI,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to get a class from backend
     */
    async getClassByID(id){
        return await fetch(CLASS_BASE_URI+"/"+id,{
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
    async updateClass(id,result){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(CLASS_BASE_URI+"/"+id,{
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
    async removeClass(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(CLASS_BASE_URI+"/"+id,{
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

export default new ClassService();