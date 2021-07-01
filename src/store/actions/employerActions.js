import EmployerService from "../../services/employerService";

export const GET_EMPLOYER_DATA = "GET_EMPLOYER_DATA";
export const CLEAR_EMPLOYER_DATA = "CLEAR_EMPLOYER_DATA";

export function getEmployerData(data){
   return {
       type:GET_EMPLOYER_DATA,
       payload:data
   }
}
export function clearEmployerData(){
    return {
        type:CLEAR_EMPLOYER_DATA
    }
}

export function getEmployerDataAsync(id){
    return async (dispatch)=>{
        let employerService =new EmployerService();
        await employerService.getById(id)
        .then(response=>{
            if(response.data.success){
             dispatch(getEmployerData(response.data.data));
            }
        }).catch(error=>{

        })
    }
}