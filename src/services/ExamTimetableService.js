const EXAM_TIMETABLE_API_BASE_URI='http://localhost:5000/examTimetables';

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class ExamTimetableService{
    /**
     *  This service function is to send exam timetable details to backend
     */
    async generateExamTimetable(examTimetable){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(EXAM_TIMETABLE_API_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(examTimetable)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Get All Exam timetables from backend
     */
    async getexamTimetable(){
        return await fetch(EXAM_TIMETABLE_API_BASE_URI,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    /**
     *  This service function is to get a exam timetable from backend
     */
    async getExamTimetableByID(id){
        return await fetch(EXAM_TIMETABLE_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


    /**
     *  This service function is to update stored exam timetable in backend
     */
    async updateExamTimetable(id,examTimetable){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(EXAM_TIMETABLE_API_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(examTimetable)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     *  This service function is to Remove stored exam timetable in backend
     */
    async removeExamTimetable(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(EXAM_TIMETABLE_API_BASE_URI+"/"+id,{
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

export default new ExamTimetableService();