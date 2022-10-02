import { Fragment } from "react"
import { CloseIcon, EditModalBackground, EditModalWrapper, Label, LabelRow } from "./EditUser.styles"

interface Props {
      setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditModal = ({setModalVisible}: Props): JSX.Element => {

  return (
    <Fragment>
      <EditModalBackground onClick={() => setModalVisible(false)}/>
      <EditModalWrapper>
            <CloseIcon onClick={() => setModalVisible(false)}/>
            <LabelRow>
                  <Label>Edycja danych</Label>
            </LabelRow>
            <LabelRow>
                  <Label>*E-mail</Label>
                  <Label>*Imię</Label>
                  <Label>*Nazwisko</Label>
            </LabelRow>
      </EditModalWrapper>
    </Fragment>
  )
}
