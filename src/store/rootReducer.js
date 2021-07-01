import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import cvReducer from "./reducers/cvReducer";
import employerReducer from "./reducers/employerReducer";
import employeeFavoritesReducer from './reducers/employeeFavoritesReducer';


const rootReducer = combineReducers({
    auth:authReducer,
    alert:alertReducer,
    resumes:cvReducer,
    employer:employerReducer,
    favorites:employeeFavoritesReducer
})

export default rootReducer;