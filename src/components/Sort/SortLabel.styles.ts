import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { BORDER_RADIUS, GRAY } from "../../Global.styles";

export const Label = styled.div`
    display: flex;
    gap: 4rem;
    margin-left: 6rem;
    width: 65vw;  
    max-width: 1200px;
    margin-bottom: 2rem;

    @media screen and (max-width: 786px) {
      margin-left: 0;
      gap: 0;
      width: unset;
      flex-wrap: wrap;
    }
`;
export const ArrowIcon = styled(RiArrowDownSLine)<{rotated: boolean}>`
  color: #2d419f;
  transform: rotate(${props => props.rotated ? "180deg" : "0"});
  transition: 0.3s;
  width: 1.5rem;
  height: 1.5rem;
`;

export const SortButton = styled.button<{ width: string }>`
  width: ${(props) => props.width + "%"};
  border: 0;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: ${GRAY};
  cursor: pointer;

  @media screen and (max-width: 786px) {
    font-size: 0.8rem;
    width: 50% !important;
    display: flex;
    justify-content: center;
  }
`;

export const SortButtonContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  padding: 0.5rem 2rem;
  gap: 1rem;  
  border-radius: ${BORDER_RADIUS};
  transition: 0.2s;

  &:hover {
    background: #dcdcdc;
  }

  @media screen and (max-width: 786px) {
    padding: 0.5rem;
    gap: 0.25rem;
  }
`

export const ButtonText = styled.span`
  color: black;
  white-space: nowrap;
`;
