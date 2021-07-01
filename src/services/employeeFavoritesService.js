import axios from "axios";

export default class EmployeeFavoritesService{
    getFavoritesById(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getUserFavorites?userId=" + id);
    }
    add(jobAdId, employeeId){
        let data ={
            employeeId:employeeId,
            jobAdvertisementId:jobAdId
        }
        return axios.post("http://localhost:8080/api/employeeJobAdFavorites/addToFavorites",data);
    }
    remove(jobAdId, employeeId){
        let data ={
            employeeId:employeeId,
            jobAdvertisementId:jobAdId
        }
        return axios.post("http://localhost:8080/api/employeeJobAdFavorites/removeFromFavorites",data);
    }
}