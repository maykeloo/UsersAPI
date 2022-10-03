export const useCookie = (cookie_name: string) => {
  const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
  const cookie = document.cookie.match(re);

  if(cookie) {
        return cookie[0]
  }
};
