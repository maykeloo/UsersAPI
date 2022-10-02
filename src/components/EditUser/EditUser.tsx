import { Fragment, useState } from "react"
import { EditModal } from "./EditModal"
import { EditButton } from "./EditUser.styles"

export const EditUser = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Fragment>
      <EditButton onClick={() => setModalVisible(true)}>Edytuj swoje konto</EditButton>
      {modalVisible && <EditModal setModalVisible={setModalVisible}/>}
    </Fragment>
  )
}
