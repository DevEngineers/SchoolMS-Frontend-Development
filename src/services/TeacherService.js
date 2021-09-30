/**
 * @author : M.A.M Nusky
 * Registration Number : IT19167442
 */


const TEACHER_API_BASE_URL = 'http://localhost:5000/teachers';

class TeacherService{

    /**
     *  This service function is to Get All Teachers from backend
     */
    async getTeachers(){
        return await fetch(TEACHER_API_BASE_URL,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to send Teacher details to backend
     */
    async createTeacher(teacher){
        console.log(teacher);
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(TEACHER_API_BASE_URL,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(teacher)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }
    /**
     *  This service function is to Get a single Teacher from backend
     */
    async getTeacherById(id){
        return await fetch(TEACHER_API_BASE_URL+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to update Existing Teacher Details in backend
     */
    async updateTeacher(id,Teacher){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        console.log(Teacher);
        return await fetch(TEACHER_API_BASE_URL+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(Teacher)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Remove/Delete stored Teacher in backend
     */

    async deleteTeacher(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(TEACHER_API_BASE_URL+"/"+id,{
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
     *  This service function is to get Teacher from backend
     *  according to the user input
     */

    async getTeacherBySearch(Value){
        return await fetch(TEACHER_API_BASE_URL+"/search/"+Value,{
            method:"GET",
        }).then(response =>{
            return response.json();
        }).catch(error => {
            console.log(error.message);
        })
    }


}

export default new TeacherService();
