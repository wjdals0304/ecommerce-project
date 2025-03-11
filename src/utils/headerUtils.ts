import {GetServerSidePropsContext} from 'next';
import {parseCookies} from 'nookies';

export const getAuthHeaders = (context?: GetServerSidePropsContext) => {
  let headers: Record<string, any> = {};

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
