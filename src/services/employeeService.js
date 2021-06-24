import axios from 'axios'
export default class EmployeeService{
    register(data){
        return axios.post("http://www.localhost:8080/api/employees/register",data,{
            headers: {
                'Content-Type': 'application/json',
              }
        });
    }
}