import { Fragment, useState } from "react";
import { useUserEdit } from "../../hooks/useUserEdit";
import { EditModal } from "./EditModal";
import { EditButton } from "./EditUser.styles";

export const EditUser = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { setDataError } = useUserEdit();

  return (
    <Fragment>
      <EditButton
        onClick={() => {
          setModalVisible(true);
          setDataError(0);
        }}
      >
        Edytuj swoje konto
      </EditButton>
      {modalVisible && <EditModal setModalVisible={setModalVisible} />}
    </Fragment>
  );
};
