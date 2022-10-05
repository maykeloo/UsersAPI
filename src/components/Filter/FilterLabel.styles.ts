import styled from "styled-components";
import { BLUE, BORDER_RADIUS, GRAY_BORDER } from "../../Global.styles";

export const Label = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  background: white;
  border: ${GRAY_BORDER};
  border-radius: ${BORDER_RADIUS};
  padding: 2rem 10rem 2rem 2rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 0;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 786px) {
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Filtruj po imię, nazwisko",
})`
  border-radius: ${BORDER_RADIUS} 0 0 ${BORDER_RADIUS};
  border: ${GRAY_BORDER};
  width: 15rem;
  outline: none;
  padding: 0 2rem;
  font-weight: 600;

  &::placeholder {
    font-weight: 400;
  }

  @media screen and (max-width: 786px) {
    width: unset;
    padding: 0 0.5rem;
    border-radius: ${BORDER_RADIUS};
    flex-grow: 1;
  }
`;

export const SearchButton = styled.button`
  border-radius: ${BORDER_RADIUS};
  padding: 0.5rem 2rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${BLUE};
  font-weight: 600;
  transition: 0.2s;
  transform: translateX(-10px);

  &:hover {
    color: white;
    background-color: ${BLUE};
  }

  @media screen and (max-width: 786px) {
    transform: unset;
    padding: 0.5rem 1rem;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 1.5rem;

  @media screen and (max-width: 786px) {
    gap: 0.5rem;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

export const FilterButton = styled.button<{ selected: boolean }>`
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: ${BORDER_RADIUS};
  border: ${(props) => (props.selected ? "1px solid black" : GRAY_BORDER)};
  background: ${(props) => (props.selected ? "#f3f3f3" : "transparent")};
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    background: #f3f3f3;
    border-color: black;
  }

  @media screen and (max-width: 786px) {
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    flex-grow: 1;
  }
`;
