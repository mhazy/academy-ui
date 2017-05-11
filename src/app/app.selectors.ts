import { createStructuredSelector } from "reselect";

export interface IAppState {
  someProp: string;
}

export const storeConnector = createStructuredSelector({
  someProp: () => "Some Prop with createStructuredSelector",
});
