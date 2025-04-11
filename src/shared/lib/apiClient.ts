import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '@/shared/config/apiEndPoints';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (typeof window === 'undefined') {
      return config;
    } else {
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
    const authHeader = response.headers['authorization'];

    if (authHeader) {
      const token = authHeader.split(' ')[1];

      setCookie(null, 'jwt', token, {
        maxAge: 60 * 60,
        path: '/',
      });
    }

    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (originalRequest.url.includes('/auth/signin')) {
      return Promise.reject(error);
    }

    if (originalRequest.url.includes('/auth/refresh')) {
      destroyCookie(null, 'jwt');
      window.location.href = '/signin';

      return Promise.reject(error);
    }
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await apiClient.post(
          `${API_BASE_URL}/auth/refresh`,
          {},
          {
            headers: {
              Cookie: originalRequest.headers.Cookie,
            },
          },
        );
        const newToken = response.data.accessToken;

        setCookie(null, 'jwt', newToken, {
          maxAge: 60 * 60,
          path: '/',
        });
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token error:', refreshError);
        destroyCookie(null, 'jwt');

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;

interface RequestConfig {
  params?: Record<string, any>;
  headers?: Record<string, any>;
  token?: string;
}

export const postRequest = async <T>({
  url,
  data = {},
  config = {},
}: {
  url: string;
  data?: any;
  config?: RequestConfig;
}) => {
  const response = await apiClient.post<T>(url, data, config);

  return response;
};

export const deleteRequest = async <T>({
  url,
  config = {},
}: {
  url: string;
  config?: RequestConfig;
}) => {
  const response = await apiClient.delete<T>(url, config);

  return response;
};

export const formDataEntries = (event: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(event.target as HTMLFormElement);
  const data = Object.fromEntries(formData);

  return data;
};

export const getRequest = async <T>({
  url,
  config = {},
}: {
  url: string;
  config?: RequestConfig;
}): Promise<AxiosResponse<T>> => {
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
