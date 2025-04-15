import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

export const getAuthHeaders = (
  context?: GetServerSidePropsContext,
): Record<string, string> | undefined => {
  if (!context) return undefined;

  const headers: Record<string, string> = {};
  const token = parseCookies(context).jwt;
  const cookie = context.req.headers.cookie;

  if (token) headers.Authorization = `Bearer ${token}`;
  if (cookie) headers.Cookie = cookie;

  return headers;
};
