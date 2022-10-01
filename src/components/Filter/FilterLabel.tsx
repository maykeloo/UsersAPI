import { FilterButton, FilterWrapper, Label, SearchButton, SearchInput, SearchWrapper } from "./FilterLabel.styles"

export const FilterLabel: React.FC = () => {
  return (
    <Label>
      <SearchWrapper>
        <SearchInput/>
        <SearchButton>Szukaj</SearchButton>
      </SearchWrapper>
      <FilterWrapper>
        <FilterButton>Wszyscy</FilterButton>
        <FilterButton>Aktywni</FilterButton>
        <FilterButton>Nieaktywni</FilterButton>
      </FilterWrapper>
    </Label>
  )
}
