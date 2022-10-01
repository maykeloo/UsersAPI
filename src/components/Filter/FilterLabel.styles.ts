import styled from "styled-components";
import { BORDER_RADIUS, GRAY_BORDER } from "../../Global.styles";

export const Label = styled.div`
      width: 100%;
      margin-bottom: 2rem;
      margin-top: 10rem;
      background: white;
      border: ${GRAY_BORDER};
      border-radius: ${BORDER_RADIUS};
      padding: 2rem 10rem 2rem 2rem;
      display: flex;
      justify-content: space-between;
`

export const SearchWrapper = styled.div`
      display: flex;
`

export const SearchInput = styled.input.attrs({
      type: 'text',
      placeholder: 'Filtruj po imię, nazwisko'
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
`

export const SearchButton = styled.button`
      border-radius: ${BORDER_RADIUS};
      padding: 0.5rem 2rem;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 1px solid #255DC3;
      font-weight: 600;
      transition: 0.2s;
      transform: translateX(-10px);

      &:hover {
            color: white;
            background-color: #255DC3;
      }
`

export const FilterWrapper = styled.div`
      display: flex;
      gap: 1.5rem;
`

export const FilterButton = styled.button`
      text-align: center;
      padding: 0.5rem 2rem;
      border-radius: ${BORDER_RADIUS};
      border: ${GRAY_BORDER};
      background: transparent;
      cursor: pointer;
      font-weight: 500;
      transition: 0.2s;

      &:hover {
            background: #f3f3f3;
            border-color: black;
      }
`