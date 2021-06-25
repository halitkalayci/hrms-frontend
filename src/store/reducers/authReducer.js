import { SIGN_IN, SIGN_OUT } from "../actions/authActions";
import { authState } from "../initialValues/authState";
import EmployeeService from '../../services/employeeService';
const initialState={
  authState:authState
}

export default function authReducer(state=initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      let employeeService = new EmployeeService();
      return {...state,authState:{authenticated:true,user:payload}};
      break;
    case SIGN_OUT:
      return {...state,authState:{authenticated:false,user:null}};
      default:
          return state;
  }
}
