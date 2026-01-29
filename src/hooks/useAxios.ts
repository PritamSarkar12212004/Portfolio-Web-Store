import { useState, useCallback } from 'react';
import { type AxiosRequestConfig, type AxiosError } from 'axios';
import axiosInstance from '../api/axiosInstance';

interface UseAxiosReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  execute: (config?: AxiosRequestConfig) => Promise<T | undefined>;
}

/**
 * A custom hook to execute axios requests with state management.
 * @template T The expected type of the response data.
 * @param {AxiosRequestConfig} initialConfig Initial axios configuration.
 * @returns {UseAxiosReturn<T>} An object containing data, loading, error, and an execute function.
 */
export const useAxios = <T>(initialConfig?: AxiosRequestConfig): UseAxiosReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(
    async (config?: AxiosRequestConfig) => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.request<T>({
          ...initialConfig,
          ...config,
        });
        setData(response.data);
        return response.data;
      } catch (err) {
        const axiosError = err as AxiosError<{ message: string }>;
        const errorMessage = axiosError.response?.data?.message || axiosError.message || 'Something went wrong';
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [initialConfig]
  );

  return { data, loading, error, execute };
};
