import { useDispatch, useSelector } from "react-redux";
import { ReduxState } from "../../types/redux";
import { SortButton, SortButtonContent } from "./SortLabel.styles";
import { ArrowIcon, ButtonText, Label } from "./SortLabel.styles";
import { searchParams } from '../../redux/actions/searchingParams'
import { URLPayload } from "../../types/url";

interface Values {
  name: string;
  sortBy: string;
  width: string;
}
export const SortLabel: React.FC = () => {
  const values: Values[] = [
    {
      name: "Imię",
      sortBy: "sort[name]",
      width: "15",
    },
    {
      name: "Nazwisko",
      sortBy: "sort[surname]",
      width: "20",
    },
    {
      name: "E-mail",
      sortBy: "sort[email]",
      width: "20",
    },
    {
      name: "Data urodzenia",
      sortBy: "sort[birth_date]",
      width: "20",
    },
  ];

  const dispatch = useDispatch()
  const params = useSelector((state: ReduxState) => state.searchReducer);

  const sortBy = (value: Values) => {
    dispatch(searchParams({...params, [value.sortBy]: params[value.sortBy as keyof URLPayload] === "asc" ? "desc" : "asc" }))
  }

  return (
    <Label>
      {values.map((value) => (
        <SortButton width={value.width} onClick={() => sortBy(value)}>
          <SortButtonContent>
            <ButtonText>{value.name}</ButtonText>
            <ArrowIcon arrowRotate={params[value.sortBy as keyof URLPayload] === "asc" ? true : false}/>
          </SortButtonContent>
        </SortButton>
      ))}
    </Label>
  );
};
