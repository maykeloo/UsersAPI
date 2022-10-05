import styled from "styled-components";
import { BORDER_RADIUS } from "../../Global.styles";

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 786px) {
    justify-content: space-between;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 5px;
  margin-left: auto;

  @media screen and (max-width: 786px) {
    margin-left: unset;
  }
`;

export const SelectList = styled.select`
  margin-left: auto;
  background-color: black;
  color: white;
  outline: none;
  border: 0;
  padding: 0.5rem 2rem;
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
`;

export const Page = styled.button<{ selected: boolean }>`
  padding: 1rem;
  width: 1.5rem;
  cursor: pointer;
  height: 1.5rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.selected ? "white" : "#13132B")};
  border-radius: 50%;
  border: 0;
  background: ${(props) => (props.selected ? "#13132B" : "transparent")};
  transition: 0.2s;

  &:hover {
    background: ${(props) => (props.selected ? "#13132B" : "#ccc")};
  }
`;
