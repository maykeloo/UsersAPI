import { URLPayload } from "./url";

export interface ReduxState {
  pageReducer: number;
  searchReducer: URLPayload;
}
