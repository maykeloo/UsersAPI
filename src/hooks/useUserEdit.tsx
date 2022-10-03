import { useState } from "react";
import { useCookie } from "./useCookies";
import { useRefreshToken } from "./useRefreshToken";

export const useUserEdit = (
  email: string,
  name: string,
  surname: string,
  phone: number,
  prefix: number,
  privacy: boolean,
  marketing: boolean,
  sales: boolean
) => {
  const [date, setDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);

  const token = useCookie('token')

  const updateUserData = async () => {
    const dateFormat = date.toISOString().slice(0, 10).replaceAll(".", "-")
    const DATA_EDIT = {
      "email": email,
      "name": name,
      "surname": surname,
      "birthDate": dateFormat,
      "phonePrefix": String(prefix),
      "phoneNumber": phone,
      "privacyPolicy": privacy,
      "marketingAgreements": marketing,
      "sellingRegulation": sales,
      "isBlocked": false,
      "isActivated": true,
    };

    try {
      const rawResponse = await fetch(
        "http://api.ultimate.systems/public/index.php/api/v1/auth/user",
        {
          method: "PATCH",
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`, // notice the Bearer before your token
        },
          body: JSON.stringify(DATA_EDIT),
        }
      );
      const content = await rawResponse.json();
      console.log(content);
    } catch(err) {
      setLoading(false);
      throw new Error(`Can't update user data: ${err}`)
    }
  };

  return {
    date,
    loading,
    emailError,
    nameError,
    surnameError,
    setDate,
    updateUserData,
  };
};
