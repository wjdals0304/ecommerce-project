import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {API_BASE_URL} from '@/config/ApiEndPoints';
import {parseCookies} from 'nookies';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
      const cookies = parseCookies();
      const token = cookies.jwt;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    console.log('error-------');
    console.log(error);
    if (error.response?.status === 401) {
      // TODO: 토큰 만료 처리
    }
    return Promise.reject(error);
  },
);

export default apiClient;

export const postRequest = async (url: string, data: any) => {
  const token = parseCookies().jwt;
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

interface RequestConfig {
  headers?: Record<string, string>;
}

export const getRequest = async <T>({
  url,
  config = {},
}: {
  url: string;
  config?: RequestConfig;
}): Promise<AxiosResponse<T>> => {
  console.log('getRequest-------');
  console.log(url);

  const response = await apiClient.get<T>(url, config);
  return response;
};

export const getToken = (response: any) => {
  const authHeader = response.headers['authorization'];
  const token = authHeader.split(' ')[1];
  return token;
};

export const getStoredToken = () => {
  return parseCookies().jwt;
};
