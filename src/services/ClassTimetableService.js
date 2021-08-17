const CLASS_TIMETABLE_API_BASE_URI='';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ClassTimetableService{
    /**
     *  This service function is to send class timetable details to backend
     */
    async generateClassTimetable(classTimetable){
        /*const bearer = 'Bearer ' + localStorage.getItem('userToken');*/
        return await fetch(CLASS_TIMETABLE_API_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json"
                /*'Authorization': bearer*/
            },
            body:JSON.stringify(classTimetable)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Get All Class timetables from backend
     */
    async getClassTimetable(){
        return await fetch(CLASS_TIMETABLE_API_BASE_URI+"/",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to get a class timetable from backend
     */
    async getClassTimetableByID(id){
        return await fetch(CLASS_TIMETABLE_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


    /**
     *  This service function is to update stored class timetable in backend
     */
    async updateClassTimetable(id,classTimetable){
        /*const bearer = 'Bearer ' + localStorage.getItem('userToken');*/
        return await fetch(CLASS_TIMETABLE_API_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                /*'Authorization': bearer*/
            },
            body:JSON.stringify(classTimetable)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Remove stored class timetable in backend
     */
    async removeClassTimetable(id){
        /*const bearer = 'Bearer ' + localStorage.getItem('userToken');*/
        return await fetch(CLASS_TIMETABLE_API_BASE_URI+"/"+id,{
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

export default new ClassTimetableService();