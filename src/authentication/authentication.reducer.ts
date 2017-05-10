import { combineReducers } from "redux";
import { IAction } from "../utils/actions";
import { AUTHENTICATION } from "./authentication.actions";

export interface IAuthenticationState {
  status: boolean;
}

const status = (state = false, { type }: IAction) => {
  switch (type) {
    case (AUTHENTICATION.IS_AUTHENTICATED):
      return true;
    case (AUTHENTICATION.IS_NOT_AUTHENTICATED):
      return false;
    default:
      return state;
  }
};

export const authenticationReducer = combineReducers({
  status,
});
