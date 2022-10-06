import styled from "styled-components";
import { BORDER_RADIUS } from "../../../Global.styles";

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

export const NotFoundWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: black;
  padding: 2rem;
  color: white;
  text-align: center;
  border-radius: ${BORDER_RADIUS}
`

