import { createStructuredSelector } from "reselect";

import { IRootState } from "../root";

export const isAuthenticated = (state: IRootState) => state.authentication.status;

export const storeConnector = createStructuredSelector({
  isAuthenticated,
});
