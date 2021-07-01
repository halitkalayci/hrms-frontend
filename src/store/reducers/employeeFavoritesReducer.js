import { FETCH_ERROR, FETCH_STARTED, FETCH_SUCCESS } from "../actions/employeeFavoritesActions";
import { favorites } from "../initialValues/employeeFavoritesState";

const initialState = {
 favoriteJobAds: favorites
};
export default function employeeFavoritesReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_ERROR:
        return {...state, favoriteJobAds:{ loading:false, data:[],message:payload} }
    case FETCH_SUCCESS:
        return {...state, favoriteJobAds:{ loading:false, data:payload} }
    case FETCH_STARTED:
        return {...state, favoriteJobAds : {loading:true,data:[]}}
    default:
      return state;
  }
}
