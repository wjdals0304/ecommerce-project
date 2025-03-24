import {setCookie, parseCookies} from 'nookies';

export const setAuthCookie = (isAuthenticated: boolean) => {
  setCookie(null, 'isAuthenticated', String(isAuthenticated), {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};

export const getAuthCookie = () => {
  const cookies = parseCookies();
  return cookies.isAuthenticated === 'true';
};

export const removeAuthCookie = () => {
  setCookie(null, 'isAuthenticated', 'false', {
    maxAge: 0,
    path: '/',
  });
};
