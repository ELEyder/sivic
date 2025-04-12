import { useEffect, useState } from "react";
import { ApiClient, ApiClientFiles } from "../services/ApiClient";

const useImagenWeb = () => {
  const [imagenesWeb, setImagenesWeb] = useState({} as any);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getImagenesWeb = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/imagenes_web`);
      setImagenesWeb(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateImagenesWeb = async (data: FormData) => {
    setLoading(true);
    try {
      await ApiClientFiles.put(`/imagenes_web/`, data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await getImagenesWeb();
    };

    fetch();
  }, []);

  return { imagenesWeb, loading, error, getImagenesWeb, updateImagenesWeb };
};

export default useImagenWeb;
