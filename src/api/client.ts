import axios, { AxiosRequestConfig } from 'axios';
import { TOKEN_KEY } from 'hooks/useAuth';

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`
});

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem(TOKEN_KEY);

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  }
);

export default apiClient;
