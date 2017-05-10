export interface IAction {
  type: string;
  payload?: any;
  meta?: any;
}

export const action = (type: string): IAction => ({ type });
