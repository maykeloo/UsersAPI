import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../types/redux";
import { SortButton, SortButtonContent } from "./SortLabel.styles";
import { ArrowIcon, ButtonText, Label } from "./SortLabel.styles";
import { searchParams } from '../../redux/actions/searchingParams'
import { URLPayload } from "../../types/url";
import { values, Values } from "./SortValues";

export const SortLabel: React.FC = () => {
  const dispatch = useDispatch()
  const params = useSelector((state: ReduxState) => state.searchReducer);
  
  const resetedData = {
    "filter[is_activated]": params["filter[is_activated]"],
    "page": params.page,
    "perPage": params.perPage,
  }

  const sortBy = (value: Values) => {
    dispatch(searchParams({...resetedData as URLPayload, [value.sortBy]: params[value.sortBy as keyof URLPayload] === "asc" ? "desc" : "asc" }))
  }

  return (
    <Label>
      {values.map((value) => (
        <SortButton width={value.width} onClick={() => sortBy(value)}>
          <SortButtonContent>
            <ButtonText>{value.name}</ButtonText>
            <ArrowIcon rotated={params[value.sortBy as keyof URLPayload] === "asc" ? true : false}/>
          </SortButtonContent>
        </SortButton>
      ))}
    </Label>
  );
};
