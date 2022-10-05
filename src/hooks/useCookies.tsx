export const useCookie = (cookie_name: string): string => {
  const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
  const cookie = document.cookie.match(re);

  return cookie ? cookie[0] : "";
};
