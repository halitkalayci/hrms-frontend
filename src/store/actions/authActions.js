import EmployeeService from "../../services/employeeService";
import EmployerService from "../../services/employerService";
import {error as errorAlert, success as successAlert} from './alertActions';
import { history } from "../../utilities/helpers/history";
import { getEmployerDataAsync } from "./employerActions";
import { getUserFavoritesAsync } from "./employeeFavoritesActions";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export function signIn(user,type) {
  return {
    type: SIGN_IN,
    payload: {user:user, type:type},
  };
}
export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function employeeLoginAsync(user) {
  return async function (dispatch) {
    let employeeService = new EmployeeService();
    await employeeService
      .login(user)
      .then((response) => {
        if(response.data.success){
           history.push("/homepage");
           dispatch(signIn(response.data.data,1));
           dispatch(getUserFavoritesAsync(response.data.data.userId))
           dispatch(successAlert(response.data.message));
        }else{
          dispatch(errorAlert(response.data.message));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function employerLoginAsync(user){
   return async function(dispatch){
     let employerService = new EmployerService();
     await employerService.login(user)
     .then(response=>{
       if(response.data.success){
         console.log(response);
          history.push("/homepage");
          dispatch(signIn(response.data.data,2))
          dispatch(successAlert(response.data.message));
       }else{
         dispatch(errorAlert(response.data.message));
       }
     })
     .catch(error=>{
       console.log(error);
     })
   }
}
