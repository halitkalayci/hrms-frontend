import axios from 'axios'
export default class EmployerUpdateRequestService{
    canSubmitNewRequest(id){
        return axios.get("http://localhost:8080/api/employerupdaterequests/canSubmitNewUpdateRequest?id="+id);
    }

    addNew(data,file){
        let formData = new FormData();
        formData.append('updateRequest', new Blob([JSON.stringify(data)], {
            type: "application/json"
        }));
        if(file!=null){
            formData.append("avatar",file);
        }
        return axios.post("http://www.localhost:8080/api/employerupdaterequests/addNew",formData,{
            headers: {
                'Content-Type': 'application/json',
              }
        });
    }
   
}