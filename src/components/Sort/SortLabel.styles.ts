import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { GRAY } from "../../Global.styles";

export const Label = styled.div`
    display: flex;
    gap: 4rem;
    margin-left: 8rem;
    width: 65vw;  
    max-width: 1200px;
    margin-bottom: 2rem;
`;
export const ArrowIcon = styled(RiArrowDownSLine)<{arrowRotate: boolean}>`
  color: #2d419f;
  transform: rotate(${props => props.arrowRotate ? "180deg" : "0"});
  transition: 0.3s;
  width: 1.5rem;
  height: 1.5rem;
`;

export const SortButton = styled.button<{ width: string }>`
  width: ${(props) => props.width + "%"};
  display: flex;
  justify-content: flex-start;
  gap: 1rem;  
  border: 0;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: ${GRAY};
  cursor: pointer;
  align-items: center
`;

export const ButtonText = styled.span`
  color: black;
`;
