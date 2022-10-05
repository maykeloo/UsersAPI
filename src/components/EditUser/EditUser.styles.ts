import styled from "styled-components";
import { BLUE, BORDER_RADIUS, GRAY_BORDER } from "../../Global.styles";
import { GrFormClose } from "react-icons/gr";
import { BiCheck } from "react-icons/bi";

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
`;

export const EditModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const EditModalWrapper = styled.div`
  padding: 3rem;
  border-radius: ${BORDER_RADIUS};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 55vw;
  z-index: 1;

  @media screen and (max-width: 786px) {
    width: 90vw;
    height: 90vh;
    overflow: hidden;
    overflow-y: scroll;
    padding: 1rem;
  }
`;

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

  @media screen and (max-width: 786px) {
    position: fixed;
    z-index: 2;
    top: 1rem;
    right: 1rem;
  }
`;

export const LabelRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const LabelCheckboxes = styled.div`
  display: flex;
  gap: 0.75rem;
  position: relative;
  padding-left: 2.5rem;
`;

export const EditCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  height: 1.5rem;
  width: 1.5rem;
  left: 0;
  z-index: 2;
  margin: 0;
`;

export const EditCheckmark = styled.span<{ selected: boolean }>`
  top: 0;
  border: ${GRAY_BORDER};
  border-radius: ${BORDER_RADIUS};
  background-color: ${(props) => (props.selected ? "black" : "white")};
  height: 1.5rem;
  width: 1.5rem;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EditCheckboxText = styled.span``;

export const Label = styled.div`
  padding-bottom: 1rem;
  width: 33%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 786px) {
    width: 100%;
  }

  .react-datepicker__input-container {
    @media screen and (max-width: 786px) {
      width: 100%;
    }
    > input {
      border: 0;
      border-bottom: 2px solid #f0f0f0;
      padding: 0.5rem;
      outline: none;
      border-radius: ${BORDER_RADIUS} ${BORDER_RADIUS} 0 0;
      transition: 0.2s;
      font-weight: 600;
      font-size: 1.1rem;

      &:hover {
        background-color: #f4f3f3;
        cursor: pointer;
      }
    }

    .react-datepicker__day {
      width: 2rem;
      height: 2rem;
      transition: 0.2s;
    }

    .react-datepicker__day--today {
      background-color: transparent;
      border: 1px solid black;
      border-radius: 50%;
      color: black;
    }

    .react-datepicker__day--selected {
      border-radius: 50%;
      background-color: black;
      color: white;
    }

    .react-datepicker__current-month {
      color: white;
      text-transform: uppercase;
      font-weight: 600;
    }

    .react-datepicker__day--keyboard-selected {
      background: none;
      color: black;
    }

    .react-datepicker__day {
      font-weight: 500;
      &:hover {
        border-radius: 50%;
      }
    }

    .react-datepicker {
      border: 0;

      .react-datepicker__triangle {
        &::after {
          border-bottom-color: black;
        }

        &::before {
          border-bottom-color: black;
        }
      }
    }

    .react-datepicker__header {
      background-color: black;
      border: 0;

      .react-datepicker__current-month {
        color: white;
      }

      .react-datepicker__day-name {
        color: white;
        font-weight: 500;
      }
    }

    .react-datepicker__day-names {
      .react-datepicker__day-name {
        margin: 2px;
      }
    }

    .react-datepicker__day--outside-month {
      color: #ccc;
    }
  }
`;

export const LabelTitle = styled.span`
  margin-bottom: 5px;
`;

export const NumberRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const EditInput = styled.input`
  border: 0;
  outline: none;
  border-bottom: 2px solid #f0f0f0;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  @media screen and (max-width: 786px) {
    &[type=number] {
      width: 90%;
    }
  }
`;

export const EditInputPrefix = styled.input`
  border: 0;
  outline: none;
  border-bottom: 2px solid #f0f0f0;
  padding: 0.5rem 0;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  width: 3rem;
  margin-right: 2rem;
  text-align: center;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media screen and (max-width: 786px) {
    margin-right: 5px;
  }
`;

export const EditModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 4rem;
  align-items: center;

  @media screen and (max-width: 786px) {
    flex-direction: column;
    padding-left: 0%;
  }
`;

export const EditFooterText = styled.span``;
export const EditButtonsWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 786px) {
    flex-direction: column-reverse;
    margin-top: 1rem;
    gap: 0.5rem
  }
`;

export const EditButtonCancel = styled.button`
  color: #293672;
  border: 0;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
export const EditButtonSave = styled.button`
  background-color: #293672;
  color: white;
  border: 1px solid #293672;
  padding: 0.5rem 4rem;
  font-size: 1rem;
  border-radius: ${BORDER_RADIUS};
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    color: #293672;
    background-color: white;
  }
`;

export const CheckIcon = styled(BiCheck)`
  color: white;
  height: 1rem;
  width: 1rem;
`;
