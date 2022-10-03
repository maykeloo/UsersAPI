import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 5px;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
`;

export const Page = styled.button<{selected: boolean}>`
      padding: 1rem;
      width: 1.5rem;
      cursor: pointer;
      height: 1.5rem;
      font-weight: 600;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.selected ? 'white' : '#13132B'};
      border-radius: 50%;
      border: 0;
      background: ${props => props.selected ? '#13132B' : 'transparent'};
      transition: 0.2s;

      &:hover {
            background: ${props => props.selected ? '#13132B' : '#ccc'}
      }

`;
