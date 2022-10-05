import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useUserLogin } from "../../hooks/useUserLogin";
import Loader from "../Reusable/Loader";
import {
  Input,
  InputIconLock,
  InputIconMail,
  InputWrapper,
  Label,
  LabelTitle,
  LoginBox,
  SubmitButton,
  Title,
  Error
} from "./SignInUp.styles";

export const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { loading, signIn, emailError, passwordError } = useUserLogin(email, password);

  return (
    <Fragment>
      <LoginBox>
        <Title>Zaloguj się</Title>
        <Label>
          <LabelTitle>E-mail</LabelTitle>
          <InputWrapper>
            <InputIconMail />
            <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Podaj e-mail" />
          </InputWrapper>
          {emailError && <Error>Podano zły adres e-mail</Error>}
        </Label>
        <Label>
          <LabelTitle>Hasło</LabelTitle>
          <InputWrapper>
            <InputIconLock />
            <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Minimum 8 znaków" />
          </InputWrapper>
          {passwordError && <Error>Podano złe hasło</Error>}
        </Label>
        <Label>
          <LabelTitle>
            Nie masz jeszcze konta? <Link to="/signup">Zarejestruj się</Link>
          </LabelTitle>
        </Label>
        <SubmitButton onClick={signIn}>Zaloguj się</SubmitButton>
        {loading && <Loader/>}
      </LoginBox>
    </Fragment>
  );
};
