import { CLEAR_EMPLOYER_DATA, GET_EMPLOYER_DATA } from "../actions/employerActions";


const initialState = {
    profileData : {}
};
export default function employerReducer(state=initialState,{type,payload}){
    switch(type){
        case CLEAR_EMPLOYER_DATA:
            return {...state,profileData:{}}
        case GET_EMPLOYER_DATA:
            return {...state, profileData:payload}
        default:
            return state;
    }
}