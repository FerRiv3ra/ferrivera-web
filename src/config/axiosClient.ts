import axios, { AxiosInstance, HeadersDefaults } from 'axios';

export interface CustomHeaders extends HeadersDefaults {
  Authorization?: string | null;
}

export const axiosClient: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL!}`,
  headers: {
    'Content-Type': 'application/json',
  },
});
