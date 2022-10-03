import { Fragment, useState } from "react"
import { useRefreshToken } from "../../hooks/useRefreshToken";
import { EditModal } from "./EditModal"
import { EditButton } from "./EditUser.styles"

export const EditUser = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { refetch } = useRefreshToken();

  return (
    <Fragment>
      <EditButton onClick={() => {
        setModalVisible(true); 
        refetch()
      }}>Edytuj swoje konto</EditButton>
      {modalVisible && <EditModal setModalVisible={setModalVisible}/>}
    </Fragment>
  )
}
