import { ReturnPayload } from "../../types/redux";
import { URLPayload } from "../../types/url";

export const searchParams = (value: URLPayload): ReturnPayload => {
  return {
    type: "SEARCH_PARAMS",
    payload: value,
  };
};
