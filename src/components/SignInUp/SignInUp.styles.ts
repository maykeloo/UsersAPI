import styled from "styled-components";
import { BORDER_RADIUS, GRAY_BORDER } from "../../Global.styles";
import { GoMail } from 'react-icons/go';
import { MdLockOutline, MdDriveFileRenameOutline } from 'react-icons/md'

export const LoginBox = styled.div`
      background: white;
      display: flex;
      flex-direction: column;
      padding: 2rem 3rem;
      gap: 1rem;
      align-items: center;    
      border-radius: ${BORDER_RADIUS};
      width: 25vw;
      min-height: 600px;
      min-width: 450px;
`

export const Title = styled.h2`
      font-weight: 700;
      font-size: 1.75rem;
      margin: 1rem 0 2rem 0;
`

export const Label = styled.label`
      display: flex;
      flex-direction: column;
      width: 100%;
`

export const LabelTitle = styled.span`
      font-size: 0.8rem;
      font-weight: 600;
`

export const InputWrapper = styled.div`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: ${GRAY_BORDER};
      border-radius: calc(${BORDER_RADIUS} / 2);
      padding: 0.5rem;
      margin-top: 0.5rem;
`

export const Input = styled.input`
      outline: none;
      border: 0;
      font-size: 1rem;
      padding-left: 1rem;
`

export const SubmitButton = styled.button`
      margin-top: 5rem;
      border: 1px solid #3B548F;
      border-radius: ${BORDER_RADIUS};
      width: 100%;      
      padding: 0.75rem;
      color: #3B548F;
      font-size: 1.4rem;
      background: transparent;
      cursor: pointer;
      margin-top: auto;
      transition: 0.2s;

      &:hover {
            background-color: #3B548F;
            color: white;
      }
`

export const InputIconMail = styled(GoMail)`
      color: #CACACA;
      width: 1.5rem;
      height: 1.5rem;
`
export const InputIconLock = styled(MdLockOutline)`
      color: #CACACA;
      width: 1.5rem;
      height: 1.5rem;
`

export const InputIconName = styled(MdDriveFileRenameOutline)`
      color: #CACACA;
      width: 1.5rem;
      height: 1.5rem;
`

export const Error = styled.span`
      color: red;
      font-size: 0.8rem;
`