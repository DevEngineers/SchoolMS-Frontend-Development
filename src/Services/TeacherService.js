/*
*  IT 19167442
*  Author Nusky M.A.M
* */


const TEACHER_API_BASE_URL = "http://localhost:5000/teacher";

class TeacherService{


    async getTeachers(){
        return await fetch(TEACHER_API_BASE_URL+"",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

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

    async getTeacherById(id){
        return await fetch(TEACHER_API_BASE_URL+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


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


}

export default new TeacherService();