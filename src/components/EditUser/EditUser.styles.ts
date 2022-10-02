import styled from "styled-components";
import { BLUE, BORDER_RADIUS, GRAY_BORDER } from "../../Global.styles";
import { GrFormClose } from 'react-icons/gr' 

export const EditButton = styled.button`
      background: white;
      border: 1px solid ${BLUE};
      width: fit-content;
      margin-left: auto;
      padding: 0.75rem 2rem;
      border-radius: ${BORDER_RADIUS};
      font-weight: 500;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
            background: ${BLUE};
            color: white;
      }
`

export const EditModalBackground = styled.div`
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.3);
`

export const EditModalWrapper = styled.div`
      padding: 2rem;
      border-radius: ${BORDER_RADIUS};
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      display: flex;
      flex-direction: column;
      gap: 3rem;
`

export const CloseIcon = styled(GrFormClose)`
      position: absolute;
      width: 2rem;
      height: 2rem;
      top: -1rem;
      right: -1rem;
      cursor: pointer;
      background: white;
      border: ${GRAY_BORDER};
      border-radius: 50%;
`

export const LabelRow = styled.div`
      display: flex;
      gap: 2rem;
`

export const Label = styled.div`
      padding-bottom: 1rem;
      border-bottom: 2px solid #F0F0F0;
`