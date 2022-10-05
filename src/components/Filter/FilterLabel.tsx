import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchParams } from "../../redux/actions/searchingParams";
import { ReduxState } from "../../types/redux";
import { URLPayload } from "../../types/url";
import {
  FilterButton,
  FilterWrapper,
  Label,
  SearchButton,
  SearchInput,
  SearchWrapper,
} from "./FilterLabel.styles";

enum ActiveStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  ALL = "ACTIVE,INACTIVE",
}

export const FilterLabel: React.FC = () => {
  const dispatch = useDispatch();
  const params = useSelector((state: ReduxState) => state.searchReducer);
  const Filter = params["filter[is_activated]"];

  const [input, setInput] = useState<string>();

  const searchByName = (): void => {
    dispatch(searchParams({ ...params, search: input ? input : "" }));
  };

  const filterByActivity = (act: URLPayload["filter[is_activated]"]): void => {
    dispatch(searchParams({ ...params, "filter[is_activated]": act }));
  };

  return (
    <Label>
      <SearchWrapper>
        <SearchInput onChange={(e) => setInput(e.target.value)} />
        <SearchButton onClick={() => searchByName()}>Szukaj</SearchButton>
      </SearchWrapper>
      <FilterWrapper>
        <FilterButton
          selected={Filter === ActiveStatus.ALL}
          onClick={() => filterByActivity(ActiveStatus.ALL)}
        >
          Wszyscy
        </FilterButton>
        <FilterButton
          selected={Filter === ActiveStatus.ACTIVE}
          onClick={() => filterByActivity(ActiveStatus.ACTIVE)}
        >
          Aktywni
        </FilterButton>
        <FilterButton
          selected={Filter === ActiveStatus.INACTIVE}
          onClick={() => filterByActivity(ActiveStatus.INACTIVE)}
        >
          Nieaktywni
        </FilterButton>
      </FilterWrapper>
    </Label>
  );
};
