import { URLPayload } from "./url";

export interface ReduxState {
  loggedReducer: boolean;
  searchReducer: URLPayload;
}
