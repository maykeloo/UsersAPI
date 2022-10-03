import { useState } from "react";

export const useUserRegister = (
  name: string,
  surname: string,
  email: string,
  password: string,
  passwordRepeat: string
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passwordRepeatError, setPasswordRepeatError] =
    useState<boolean>(false);
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;

  const signUp = async () => {
    setNameError(name.length < 2 ? true : false);
    setSurnameError(password.length < 2 ? true : false);
    setEmailError(!emailRegex.test(email) ? true : false);
    setPasswordError(password.length < 8 ? true : false);
    setPasswordRepeatError(
      passwordRepeat.length < 8 || password !== passwordRepeat ? true : false
    );
    if (
      name &&
      surname &&
      email &&
      password &&
      passwordRepeat &&
      !nameError &&
      !surnameError &&
      !emailError &&
      !passwordError &&
      !passwordRepeatError
    ) {
      setLoading(true);

      const DATA_REGISTER = {
        email: email,
        name: name,
        surname: surname,
        plainPassword: password,
      };

      const DATA_CHECK = {
        username: email,
        password: password,
      };

      try {
        const rawResponse = await fetch(
          "http://api.ultimate.systems/public/index.php/api/v1/register",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(DATA_REGISTER),
          }
        );
        const content = await rawResponse.json();

        if (content.success) {
          const rawResponse = await fetch(
            "http://api.ultimate.systems/public/index.php/api/v1/login/check",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(DATA_CHECK),
            }
          );
          const contentCheck = await rawResponse.json();
          if(contentCheck) {
            setLoading(false);
            document.cookie = `token=${contentCheck.token}`;
            document.cookie = `refresh=${contentCheck.refresh_token}`;
            window.location.href = "/";
          }
        }
      } catch(err) {
        setLoading(false);
        throw new Error(`Can't register: ${err}`)
      }
    }
  };

  return {
    loading,
    signUp,
    emailError,
    passwordError,
    passwordRepeatError,
  };
};
