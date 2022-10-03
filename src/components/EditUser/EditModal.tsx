import { Fragment, useState } from "react"
import { CheckIcon, CloseIcon, EditButtonCancel, EditButtonSave, EditButtonsWrapper, EditCheckbox, EditCheckboxText, EditCheckmark, EditFooterText, EditInput, EditInputPrefix, EditModalBackground, EditModalFooter, EditModalWrapper, Label, LabelCheckboxes, LabelRow, LabelTitle, NumberRow } from "./EditUser.styles"
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from 'date-fns/locale/pl';
import { useUserEdit } from "../../hooks/useUserEdit";
interface Props {
      setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditModal = ({setModalVisible}: Props): JSX.Element => {
  registerLocale('pl', pl)
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [prefix, setPrefix] = useState<number>(48);
  const [phone, setPhone] = useState<number>(123_456_789);
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [marketing, setMarketing] = useState<boolean>(false);
  const [sales, setSales] = useState<boolean>(false);

  const {date, setDate, updateUserData} = useUserEdit(email, name, surname, phone, prefix,  privacy, marketing, sales);

  return (
    <Fragment>
      <EditModalBackground onClick={() => setModalVisible(false)}/>
      <EditModalWrapper>
            <CloseIcon onClick={() => setModalVisible(false)}/>
            <LabelRow>
                  <Label>Edycja danych</Label>
            </LabelRow>
            <LabelRow>
                  <Label><LabelTitle>*E-mail</LabelTitle><EditInput placeholder="Adres e-mail..." onChange={(e) => setEmail((e.target as HTMLInputElement).value)}/></Label>
                  <Label><LabelTitle>*Imię</LabelTitle><EditInput placeholder="Imię..." onChange={(e) => setName((e.target as HTMLInputElement).value)}/></Label>
                  <Label><LabelTitle>*Nazwisko</LabelTitle><EditInput placeholder="Nazwisko..." onChange={(e) => setSurname((e.target as HTMLInputElement).value)}/></Label>
            </LabelRow>
            <LabelRow>
                  <Label><LabelTitle>*Data urodzenia</LabelTitle><DatePicker dateFormat="P" selected={date} locale="pl" onChange={(date:Date) => setDate(date)} /></Label>
                  <Label>
                        <LabelTitle>*Telefon</LabelTitle>
                        <NumberRow>
                              +<EditInputPrefix value={prefix} onChange={(e) => setPrefix(+(e.target as HTMLInputElement).value)} type="number"/>
                              <EditInput placeholder="Minimum 9 cyfr" onChange={(e) => setPhone(+(e.target as HTMLInputElement).value)} type="number"/>
                        </NumberRow>
                  </Label>
                  <Label/>
            </LabelRow>
            <LabelRow>
                  <LabelCheckboxes>
                        <EditCheckbox onClick={(e) => setPrivacy((e.target as HTMLInputElement).checked)} type="checkbox"/>
                        <EditCheckmark selected={privacy}><CheckIcon/></EditCheckmark>
                        <EditCheckboxText>*Polityka prywatności</EditCheckboxText>
                  </LabelCheckboxes>
                  <LabelCheckboxes>
                        <EditCheckbox onClick={(e) => setMarketing((e.target as HTMLInputElement).checked)} type="checkbox"/>
                        <EditCheckmark selected={marketing}><CheckIcon/></EditCheckmark>
                        <EditCheckboxText>Zgody marketingowe</EditCheckboxText>
                  </LabelCheckboxes>
                  <LabelCheckboxes>
                        <EditCheckbox onClick={(e) => setSales((e.target as HTMLInputElement).checked)} type="checkbox"/>
                        <EditCheckmark selected={sales}><CheckIcon/></EditCheckmark>
                        <EditCheckboxText>*Regulamin sprzedaży</EditCheckboxText>
                  </LabelCheckboxes>
            </LabelRow>
            <EditModalFooter>
                  <EditFooterText>
                        *Pola obowiązkowe
                  </EditFooterText>
                  <EditButtonsWrapper>
                        <EditButtonCancel onClick={() => setModalVisible(false)}>Anuluj</EditButtonCancel>
                        <EditButtonSave onClick={updateUserData}>Zapisz</EditButtonSave>
                  </EditButtonsWrapper>
            </EditModalFooter>
      </EditModalWrapper>
    </Fragment>
  )
}
