import { URLPayload } from "./url";

export interface ReduxState {
  loggedReducer: boolean;
  searchReducer: URLPayload;
}


export interface ReturnPayload {
  type: string,
  payload?: URLPayload
}