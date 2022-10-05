import { useState } from "react";
import { useCookie } from "./useCookies";
import { useRefreshToken } from "./useRefreshToken";

export const useUserEdit = (
  email?: string,
  name?: string,
  surname?: string,
  phone?: number,
  prefix?: number,
  privacy?: boolean,
  marketing?: boolean,
  sales?: boolean
) => {
  const [date, setDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [nameError, setNameError] = useState<boolean>(false);
  const [numberError, setNumberError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  const [dataError, setDataError] = useState<number>(0);
  const [salesError, setSalesError] = useState<boolean>(false);
  const [privacyError, setPrivacyError] = useState<boolean>(false);

  const token = useCookie("token");
  const { refetch } = useRefreshToken();

  const checkValues = (): boolean => {
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    if (email && emailRegex.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    const numberLength = 9;
    setNameError(name ? false : true);
    setSurnameError(surname ? false : true);
    setSalesError(sales ? false : true);
    setPrivacyError(privacy ? false : true);
    setNumberError(
      phone && phone.toString().length >= numberLength && prefix ? false : true
    );

    if (
      email &&
      name &&
      surname &&
      phone &&
      privacy &&
      sales &&
      prefix &&
      phone.toString().length >= numberLength &&
      emailRegex.test(email)
    )
      return true;

    return false;
  };

  const updateUserData = async () => {
    await refetch();
    const values = checkValues();
    setLoading(true);
    setDataError(0);

    const dateFormat = date.toISOString().slice(0, 10).replaceAll(".", "-");
    const DATA_EDIT = {
      email: email,
      name: name,
      surname: surname,
      birthDate: dateFormat,
      phonePrefix: `${prefix}`,
      phoneNumber: phone,
      privacyPolicy: privacy,
      marketingAgreements: marketing,
      sellingRegulation: sales,
      isBlocked: false,
      isActivated: true,
    };
    if (values) {
      try {
        const rawResponse = await fetch(
          "http://api.ultimate.systems/public/index.php/api/v1/auth/user",
          {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`, // notice the Bearer before your token
            },
            body: JSON.stringify(DATA_EDIT),
          }
        );
        const content = await rawResponse.json();

        if (content) {
          setDataError(200);
        }

        if (!rawResponse.ok) {
          setDataError(rawResponse.status);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        throw new Error(`Can't update user data: ${err}`);
      }
    } else {
      setLoading(false);
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
    dataError,
    salesError,
    privacyError,
    numberError,
    setDataError,
  };
};
