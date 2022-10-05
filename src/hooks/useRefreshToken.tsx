import { useCookie } from "./useCookies";

export const useRefreshToken = () => {
  const refreshToken = useCookie("refresh");
  const refetch = async () => {
    const DATA = {
      refresh_token: refreshToken,
    };
    try {
      const rawResponse = await fetch(
        "http://api.ultimate.systems/public/index.php/api/v1/auth/token/refresh",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(DATA),
        }
      );
      const contentCheck = await rawResponse.json();
      if (contentCheck) {
        document.cookie = `token=${contentCheck.token}`;
        document.cookie = `refresh=${contentCheck.refresh_token}`;
      }
    } catch {
      throw new Error("Can't refetch token");
    }
  };

  return {
    refetch,
  };
};
