import axios, { AxiosInstance } from "axios";

interface ApiClientConfig {
  contentType?: string;
}

const createApiClient = ({
  contentType = "application/json",
}: ApiClientConfig): AxiosInstance => {
  const ApiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": contentType,
    },
  });

  ApiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return ApiClient;
};

export const ApiClient = createApiClient({});
export const ApiClientFiles = createApiClient({
  contentType: "multipart/form-data",
});
