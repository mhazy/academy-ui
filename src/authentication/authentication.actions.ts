import { action } from "../utils/actions";

export const AUTHENTICATION = {
  IS_AUTHENTICATED: "AUTHENTICATION.IS_AUTHENTICATED",
  IS_NOT_AUTHENTICATED: "AUTHENTICATION.IS_NOT_AUTHENTICATED",
};

export const authenticationActions = {
  isAuthenticated: () => action(AUTHENTICATION.IS_AUTHENTICATED),
  isNotAuthenticated: () => action(AUTHENTICATION.IS_NOT_AUTHENTICATED),
};
