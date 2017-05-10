import { createStructuredSelector } from "reselect";

export interface IAppState {
  someProp: string;
}

export const storeConnector = createStructuredSelector({
  someProp: () => "Cool",
});
