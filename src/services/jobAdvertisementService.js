import axios from 'axios'
export default class JobAdvertisementService{
    getJobAds(){
        return axios.get("http://www.localhost:8080/api/jobadvertisements/getAllActive")
    }
    getJobAdsOrderByDate(){
        return axios.get("http://www.localhost:8080/api/jobadvertisements/getAllActiveOrderByDate")
    }
    
}