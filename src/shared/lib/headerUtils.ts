import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

interface AuthHeaders {
  Authorization?: string;
  Cookie?: string;
  [key: string]: string | undefined;
}

export const getAuthHeaders = (context?: GetServerSidePropsContext) => {
  const headers: AuthHeaders = {};

  if (context) {
    const token = parseCookies(context).jwt;

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    if (context.req.headers.cookie) {
      headers.Cookie = context.req.headers.cookie;
    }

    return headers;
  }
};
