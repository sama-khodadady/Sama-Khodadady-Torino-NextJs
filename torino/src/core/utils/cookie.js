//set token in cookie
function setCookie(name, value, days = 30) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

//get token from cookie
function getCookie(name) {
  const value = `; ${document?.cookie}`;
  const parts = value?.split(`; ${name}=`);
  if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}

//remove token from cookie
const removeCookie = (name, token) =>
  (document.cookie = `${name}=${token}; max-age=0 path=/ `);

export { setCookie, getCookie ,removeCookie};
