import styled from "styled-components";
import * as variable from "../../../Global.styles";

export const Box = styled.div`
  display: flex;
  border: ${variable.GRAY_BORDER};
  border-radius: ${variable.BORDER_RADIUS};
  padding: ${variable.CONTENT_PADDING};
  align-items: center;
  background-color: white;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  position: absolute;
  width: 3rem;
  height: 3rem;
  background: green;
  border-radius: 50%;
`;

export const TextLabelWrappers = styled.div`
  display: flex;
  gap: 4rem;
  margin-left: 7.5rem;
  width: 65vw;
  max-width: 1200px;
`;

export const TextLabel = styled.div<{ width: string }>`
  width: ${(props) => props.width + "%"};
`;
