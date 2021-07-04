import axios from 'axios'
export default class JobAdvertisementService{
    getJobAds(){
        return axios.get("http://www.localhost:8080/api/jobadvertisements/getAllActiveAndApproved")
    }
    getJobAdsOrderByDate(){
        return axios.get("http://www.localhost:8080/api/jobadvertisements/getAllActiveOrderByDate")
    }
    getJobAdsWithPaging(page,size){
        return axios.get(`http://localhost:8080/api/jobadvertisements/getAllWithPaging?page=${page}&size=${size}`);
    }
    
}