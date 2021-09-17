const SUBJECT_BASE_URI='http://localhost:5000/subjects';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class SubjectService{
    /**
     *  This service function is to send Subject details to backend
     */
    async createSubject(subject){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(SUBJECT_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(subject)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Get All Subjects from backend
     */
    async getSubjects(){
        return await fetch(SUBJECT_BASE_URI,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to get a subject from backend
     */
    async getSubjectByID(id){
        return await fetch(SUBJECT_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(error => {
            console.log(error.message);
        })
    }

    /**
     *  This service function is to update stored subjects in backend
     */
    async updateSubject(id,subject){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(SUBJECT_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(subject)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Remove stored subject in backend
     */
    async removeSubject(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(SUBJECT_BASE_URI+"/"+id,{
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
     *  This service function is to get class Details from backend
     *  according to the user input
     */
    async getSubjectBySearch(Value){
        return await fetch(+"/search/"+Value,{
            method:"GET",
        }).then(response =>{
            return response.json();
        }).catch(error => {
            console.log(error.message);
        })
    }

}

export default new SubjectService();