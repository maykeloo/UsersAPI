import { Fragment, useState } from "react"
import { CheckIcon, CloseIcon, EditButtonCancel, EditButtonSave, EditButtonsWrapper, EditCheckbox, EditCheckboxText, EditCheckmark, EditFooterText, EditInput, EditInputPrefix, EditModalBackground, EditModalFooter, EditModalWrapper, Label, LabelCheckboxes, LabelRow, LabelTitle, NumberRow } from "./EditUser.styles"
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from 'date-fns/locale/pl';
import { useUserEdit } from "../../hooks/useUserEdit";
import Loader from "../Reusable/Loader";
import Popup from "../Reusable/Popup";
import { Error } from "../SignInUp/SignInUp.styles";

interface Props {
      setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditModal = ({setModalVisible}: Props): JSX.Element => {
  registerLocale('pl', pl)
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [prefix, setPrefix] = useState<number>(48);
  const [phone, setPhone] = useState<number>();
  const [privacy, setPrivacy] = useState<boolean>(false);
  const [marketing, setMarketing] = useState<boolean>(false);
  const [sales, setSales] = useState<boolean>(false);  
  const { 
      date, 
      setDate, 
      updateUserData, 
      loading, 
      numberError, 
      dataError, 
      emailError, 
      nameError, 
      surnameError, 
      salesError, 
      privacyError} = useUserEdit(email, name, surname, phone, prefix,  privacy, marketing, sales);

  const logOut = async (): Promise<void> => {
      document.cookie = 'token=;expires=' + new Date(0).toUTCString();
      document.cookie = 'refresh=;expires=' + new Date(0).toUTCString();
      window.location.href = '/signup';
  }

  return (
    <Fragment>
      <EditModalBackground onClick={() => setModalVisible(false)}/>
      <EditModalWrapper>
            <CloseIcon onClick={() => setModalVisible(false)}/>
            <LabelRow>
                  <Label>Edycja danych</Label>
            </LabelRow>
            <LabelRow>
                  <Label><LabelTitle>*E-mail</LabelTitle><EditInput placeholder="Adres e-mail..." onChange={(e) => setEmail((e.target as HTMLInputElement).value)}/>{emailError && <Error>Zły adres e-mail lub nie podano</Error>}</Label>
                  <Label><LabelTitle>*Imię</LabelTitle><EditInput placeholder="Imię..." onChange={(e) => setName((e.target as HTMLInputElement).value)}/>{nameError && <Error>Nie podano imienia</Error>}</Label>
                  <Label><LabelTitle>*Nazwisko</LabelTitle><EditInput placeholder="Nazwisko..." onChange={(e) => setSurname((e.target as HTMLInputElement).value)}/>{ surnameError && <Error>Nie podano nazwiska</Error> }</Label>
            </LabelRow>
            <LabelRow>
                  <Label><LabelTitle>*Data urodzenia</LabelTitle><DatePicker dateFormat="P" selected={date} locale="pl" onChange={(date:Date) => setDate(date)} /></Label>
                  <Label>
                        <LabelTitle>*Telefon</LabelTitle>
                        <NumberRow>
                              +<EditInputPrefix value={prefix} onChange={(e) => setPrefix(+(e.target as HTMLInputElement).value)} type="number"/>
                              <EditInput placeholder="Minimum 9 cyfr" onChange={(e) => setPhone(+(e.target as HTMLInputElement).value)} type="number"/>
                        </NumberRow>
                        {numberError && <Error>Źle podany number</Error> }
                  </Label>
                  <Label/>
            </LabelRow>
            <LabelRow>
                  <LabelCheckboxes>
                        <EditCheckbox onClick={(e) => setPrivacy((e.target as HTMLInputElement).checked)} type="checkbox"/>
                        <EditCheckmark selected={privacy}><CheckIcon/></EditCheckmark>
                        <EditCheckboxText>*Polityka prywatności</EditCheckboxText>
                        {privacyError && <Error>Obowiązkowe</Error>}
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
                        {salesError && <Error>Obowiązkowe</Error>}
                  </LabelCheckboxes>
            </LabelRow>
            <EditModalFooter>
                  <EditFooterText>
                        *Pola obowiązkowe
                  </EditFooterText>
                  <EditButtonsWrapper>
                        <EditButtonCancel onClick={() => logOut()}>Wyloguj</EditButtonCancel>
                  </EditButtonsWrapper>
                  <EditButtonsWrapper>
                        <EditButtonCancel onClick={() => setModalVisible(false)}>Anuluj</EditButtonCancel>
                        <EditButtonSave onClick={() => {updateUserData();} }>Zapisz</EditButtonSave>
                  </EditButtonsWrapper>
            </EditModalFooter>
      </EditModalWrapper>
      {loading && <Loader/>}
      { (dataError === 400 || dataError === 401) && <Popup color="red" children="ERROR! Nie udało się zaktualizować danych. Spróbuj zalogować się jeszcze raz lub uzupełnij poprawnie dane."/>}
      { dataError === 200 && <Popup color="green" children="Aktualizacja zakończona sukcesem."/> }
    </Fragment>
  )
}
