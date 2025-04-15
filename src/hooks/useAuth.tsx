import { useState } from 'react';
import { ApiClient } from '../services/ApiClient';

interface User {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
}

interface AuthResponse {
  token: string;
  user: User;
}

export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<User> => {
    setLoading(true);
    setError(null);
    
    try {
      const { data } = await ApiClient.post<AuthResponse>('login', {
        email,
        password
      });

      localStorage.setItem('auth_token', data.token);
      setAuthToken(data.token);
      
      return data.user;

    } catch (err : any) {
      const errorMessage = err.response?.data?.message || 'Error de autenticación';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await ApiClient.post('logout');
    } catch (err) {
      console.error('Error al cerrar sesión en el servidor:', err);
    } finally {
      localStorage.removeItem('auth_token');
      clearAuthToken();
    }
  };

  const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('auth_token');
  };

  const setAuthToken = (token: string): void => {
    ApiClient.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  };

  const clearAuthToken = (): void => {
    ApiClient.interceptors.request.use((config) => {
      delete config.headers.Authorization;
      return config;
    });
  };

  return { 
    login, 
    logout, 
    isAuthenticated, 
    loading, 
    error 
  };
};