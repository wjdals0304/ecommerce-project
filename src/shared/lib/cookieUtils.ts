import { setCookie, parseCookies } from 'nookies';

export const setAuthCookie = (isAuthenticated: boolean, userData?: any) => {
  setCookie(null, 'isAuthenticated', String(isAuthenticated), {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });

  if (userData) {
    setCookie(null, 'userData', JSON.stringify(userData), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }
};

export const getAuthCookie = () => {
  const cookies = parseCookies();

  return cookies.isAuthenticated === 'true';
};

export const getUserDataCookie = () => {
  const cookies = parseCookies();
  const userData = cookies.userData;

  return userData ? JSON.parse(userData) : null;
};

export const removeAuthCookie = () => {
  setCookie(null, 'isAuthenticated', 'false', {
    maxAge: 0,
    path: '/',
  });
  setCookie(null, 'userData', '', {
    maxAge: 0,
    path: '/',
  });
};
