import { SIGN_IN, SIGN_OUT } from "../actions/authActions";
import { authState } from "../initialValues/authState";
const initialState = {
  authState: authState,
};

export default function AuthReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN:
      return { ...state, authState: { authenticated: true, user: payload.user , type:payload.type } };
    case SIGN_OUT:
      return { ...state, authState: { authenticated: false, user: null , type:0} };
    default:
      return state;
  }
}


