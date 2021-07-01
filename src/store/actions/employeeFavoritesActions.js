import EmployeeFavoritesService from "../../services/employeeFavoritesService";
import {error as errorAlert,success as successAlert} from './alertActions';
export const FETCH_STARTED = "FETCH_STARTED";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";


export function fetchStarted(){
    return{
        type:FETCH_STARTED
    };
}
export function fetchSuccess(data){
    return { 
        type:FETCH_SUCCESS,
        payload:data
    };
}
export function fetchError(message){
     return {
         type:FETCH_ERROR,
         payload:message
     }
}
export function addToFavorites(data){
    return {
        type:ADD_TO_FAVORITES,
        payload:data
    }
}


export function getUserFavoritesAsync(id){
    return async (dispatch) => {
        let employeeFavoritesService = new EmployeeFavoritesService();
        dispatch(fetchStarted());
        employeeFavoritesService.getFavoritesById(id).then(response=>{
              if(response.data.success){
                 dispatch(fetchSuccess(response.data.data));
                 return;  
              }
              dispatch(fetchError(response.data.message));
        }).catch(error=>{
              dispatch(fetchError(error));
        })
    }
}

export function addToFavoritesAsync(jobAdId,employeeId){
    return async (dispatch) => {
        let employeeFavoritesService = new EmployeeFavoritesService();
        employeeFavoritesService.add(jobAdId,employeeId).then(response=>{
            if(response.data.success){
                dispatch(successAlert(response.data.message));
                dispatch(getUserFavoritesAsync(employeeId));
                return;
            }
            dispatch(errorAlert(response.data.message));
        }).catch(error=>{
            dispatch(errorAlert(error));
        })
    }
}
export function removeFromFavoritesAsync(jobAdId,employeeId){
    return async (dispatch) => {
        let employeeFavoritesService = new EmployeeFavoritesService();
        employeeFavoritesService.remove(jobAdId,employeeId).then(response=>{
            if(response.data.success){
                dispatch(successAlert(response.data.message));
                dispatch(getUserFavoritesAsync(employeeId));
                return;
            }
            dispatch(errorAlert(response.data.message));
        }).catch(error=>{
            dispatch(errorAlert(error));
        })
    }
}
