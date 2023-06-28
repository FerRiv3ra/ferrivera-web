import axios, { AxiosInstance, HeadersDefaults } from 'axios';

export interface CustomHeaders extends HeadersDefaults {
  Authorization?: string | null;
}

export const axiosClient: AxiosInstance = axios.create({
  // baseURL: `https://checkstudents-backend-production.up.railway.app/api`,
  baseURL: `${import.meta.env.VITE_BACKEND_URL!}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});
