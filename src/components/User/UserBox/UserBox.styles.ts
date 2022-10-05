import styled from "styled-components";
import * as variable from "../../../Global.styles";

export const Box = styled.div`
  display: flex;
  border: ${variable.GRAY_BORDER};
  border-radius: ${variable.BORDER_RADIUS};
  padding: ${variable.CONTENT_PADDING};
  align-items: center;
  background-color: white;

  @media screen and (max-width: 786px) {
    padding: 1rem;
    width: 100%;
    align-items: flex-start;
  }
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  position: absolute;
  min-width: 3rem;
  min-height: 3rem;
  background: green;
  border-radius: 50%;

  @media screen and (max-width: 786px) {
    position: relative;
  }
`;

export const TextLabelWrappers = styled.div`
  display: flex;
  gap: 4rem;
  margin-left: 7.5rem;
  width: 65vw;
  max-width: 1200px;

  @media screen and (max-width: 786px) {
    gap: 0.35rem;
    max-width: unset;
    width: 100%;
    margin-left: 1rem;
    flex-direction: column;
  }
`;

export const TextLabel = styled.div<{ width: string }>`
  width: ${(props) => props.width + "%"};

  @media screen and (max-width: 786px) {
    width: unset;
    white-space: nowrap;
  }
`;
