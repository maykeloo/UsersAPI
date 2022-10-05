import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useUserRegister } from "../../hooks/useUserRegister";
import Loader from "../Reusable/Loader";
import {
  Error,
  Input,
  InputIconLock,
  InputIconMail,
  InputWrapper,
  Label,
  LabelTitle,
  LoginBox,
  SubmitButton,
  Title,
} from "./SignInUp.styles";

export const SignUp = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const { loading, signUp, emailError, passwordError, passwordRepeatError } = useUserRegister(email, password, passwordRepeat);

  return (
    <Fragment>
      <LoginBox>
        <Title>Zaczynamy!</Title>
        <Label>
          <LabelTitle>E-mail</LabelTitle>
          <InputWrapper>
            <InputIconMail />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Podaj e-mail"
            />
          </InputWrapper>
          {emailError && <Error>Podano zły adres e-mail</Error>}
        </Label>
        <Label>
          <LabelTitle>Hasło</LabelTitle>
          <InputWrapper>
            <InputIconLock />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Minimum 8 znaków"
            />
          </InputWrapper>
          {passwordError && <Error>Podane hasło jest za krótkie</Error>}
        </Label>
        <Label>
          <LabelTitle>Powtórz hasło</LabelTitle>
          <InputWrapper>
            <InputIconLock />
            <Input
              onChange={(e) => setPasswordRepeat(e.target.value)}
              type="password"
              placeholder="Minimum 8 znaków"
            />
          </InputWrapper>
          {passwordRepeatError && (
            <Error>
              Podane hasło jest za krótkie lub różni się od podanego wyżej
            </Error>
          )}
        </Label>
        <Label>
          <LabelTitle>
            Masz już konto? <Link to="/signin">Zaloguj się</Link>
          </LabelTitle>
        </Label>
        <SubmitButton onClick={signUp}>Zarejestruj się</SubmitButton>
        {loading && <Loader />}
      </LoginBox>
    </Fragment>
  );
};
