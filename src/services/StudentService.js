/**
 * @author : M.A.M Nusky
 * Registration Number : IT19167442
 */


const STUDENT_API_BASE_URL = 'http://localhost:5000/students';

class StudentService{

    /**
     *  This service function is to Get All Students from backend
     */
    async getStudents(){
        return await fetch(STUDENT_API_BASE_URL,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to send Student details to backend
     */
    async createStudent(student){
        console.log(student);
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(STUDENT_API_BASE_URL,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(student)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }
    /**
     *  This service function is to Get a single Student from backend
     */
    async getStudentById(id){
        return await fetch(STUDENT_API_BASE_URL+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to update Existing stored Student in backend
     */
    async updateStudent(id,Student){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        console.log(Student);
        return await fetch(STUDENT_API_BASE_URL+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(Student)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }
    /**
     *  This service function is to Remove/Delete stored Student in backend
     */
    async deleteStudent(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(STUDENT_API_BASE_URL+"/"+id,{
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
     *  This service function is to get Student by class  from backend
     */

    async getStudentByClass(ClassType){
        return await fetch(STUDENT_API_BASE_URL+"/getStudent/search",{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Accept': 'application/json'
            },
            body:JSON.stringify(ClassType)
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to get Student from backend
     *  according to the user input
     */
    async getStudentBySearch(Value){
        return await fetch(STUDENT_API_BASE_URL+"/search/"+Value,{
            method:"GET",
        }).then(response =>{
            return response.json();
        }).catch(error => {
            console.log(error.message);
        })
    }

}

export default new StudentService();
