import axios from 'axios';
import {API_BASE_URL} from '@/config/ApiEndPoints';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

export const postRequest = async (url: string, data: any) => {
  const token = Cookies.get('jwt');
  const response = await apiClient.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const formDataEntries = (event: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData);
  return data;
};

export const getRequest = async (
  url: string,
  params: any = {},
  token: string,
) => {
  const response = await apiClient.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  });
  return response;
};
