import createHistory from "history/createBrowserHistory";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { authenticationReducer, IAuthenticationState } from "../authentication";

export const history = createHistory();
const routingMiddleware = routerMiddleware(history);

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  routing: routerReducer,
});

export interface IRootState {
  authentication: IAuthenticationState;
}

const enhanceStore = composeWithDevTools(applyMiddleware(logger, routingMiddleware))(createStore);
export const configureStore = (initialState?: IRootState) => enhanceStore(rootReducer, initialState);
