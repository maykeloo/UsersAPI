import { PayloadAction } from "@reduxjs/toolkit";

const defaultValues = {
  "filter[is_activated]": "ACTIVE,INACTIVE",
  page: 1,
  perPage: 5,
};

const searchReducer = (
  state = defaultValues,
  action: PayloadAction<number>
) => {
  return action.payload ? action.payload : state;
};
export default searchReducer;
