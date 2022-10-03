import { useState } from "react";

export const useUserLogin = (email: string, password: string) => {
      const [loading, setLoading] = useState<boolean>(false);
      const [emailError, setEmailError] = useState<boolean>(false);
      const [passwordError, setPasswordError] = useState<boolean>(false);
      const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
  
      const signIn = async () => {
            setEmailError(!emailRegex.test(email) ? true : false);
            setPasswordError(password.length < 8 ? true : false);
            if(email && password && !emailError && !passwordError) {
                  setLoading(true);
                  
                  const DATA_LOGIN = {
                        "username": email,
                        "password": password
                  }

                  try {
                        const rawResponse = await fetch('http://api.ultimate.systems/public/index.php/api/v1/login/check', {
                              method: 'POST',
                              headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(DATA_LOGIN)
                        });
                        const content = await rawResponse.json();
                        if(content.token) {
                              setLoading(false);
                              document.cookie = `token=${content.token}`
                              window.location.href = "/";
                        }
                        
                  } catch(err) {
                        setLoading(false);
                        throw new Error(`Can't login: ${err}`)
                  }
            }
      };

      return {
            loading,
            signIn,
            emailError,
            passwordError,
      }
}