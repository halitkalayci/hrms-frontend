import axios from 'axios'
export default class EmployerService{
    register(data){
        return axios.post("http://www.localhost:8080/api/employers/register",data,{
            headers: {
                'Content-Type': 'application/json',
              }
        });
    }
    async login(data){
        return await axios.post("http://www.localhost:8080/api/employers/login",data,{
            headers: {
                'Content-Type': 'application/json',
              }
        });
    }
    async getById(id){
       return await axios.get("http://localhost:8080/api/employers/getbyId?id=" + id);
    }
}