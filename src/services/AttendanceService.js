const ATTENDANCE_BASE_URI='http://localhost:5000/attendances';

/**
 * @author : A.M Zumry
 * Registration Number : IT19175126
 */

class AttendanceService{
    /**
     *  This service function is to send attendance details to backend
     */
    async storeAttendance(attendance){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(ATTENDANCE_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(attendance)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Get All attendance from backend
     */
    async getAttendances(){
        return await fetch(ATTENDANCE_BASE_URI,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to get a attendance from backend
     */
    async getAttendanceByID(id){
        return await fetch(ATTENDANCE_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(error => {
            console.log(error.message);
        })
    }

    /**
     *  This service function is to update stored attendance in backend
     */
    async updateAttendance(id,attendance){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(ATTENDANCE_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(attendance)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Remove stored attendance in backend
     */
    async removeAttendance(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(ATTENDANCE_BASE_URI+"/"+id,{
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
     *  This service function is to get Subject Details from backend
     *  according to the user input
     */
    async getAttendanceBySearch(Value){
        return await fetch(ATTENDANCE_BASE_URI+"/search/"+Value,{
            method:"GET",
        }).then(response =>{
            return response.json();
        }).catch(error => {
            console.log(error.message);
        })
    }

}

export default new AttendanceService();