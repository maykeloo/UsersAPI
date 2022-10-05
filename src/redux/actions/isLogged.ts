import { ReturnPayload } from "../../types/redux";

export const isLogged = (): ReturnPayload => {
  return {
    type: "IS_LOGGED",
  };
};
