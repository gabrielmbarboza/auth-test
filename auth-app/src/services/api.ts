import axios from 'axios';
import { getUserCookies } from '../context/AuthProvider/utils';
import { InternalAxiosRequestConfig } from 'axios';
import { AxiosError } from 'axios';

export const Api = axios.create({
  baseURL: 'http://0.0.0.0:3000/',
});

Api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const user = getUserCookies();

    config.headers.Authorization = `Bearer ${user?.token}`;
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
