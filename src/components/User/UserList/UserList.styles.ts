import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media screen and (max-width: 786px) {
    overflow: scroll;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media screen and (max-width: 786px) {
    overflow-x: scroll;
  }
`;
