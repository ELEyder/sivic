import { useEffect, useState } from "react";
import { ApiClient, ApiClientFiles } from "../services/ApiClient";
import { Caso } from "../interfaces/Caso";

const useCaso = () => {
  const [casos, setCasos] = useState<Caso[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getCasos = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/casos`);
      setCasos(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getCasosByDni = async (dni : string) => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/casos?dni=${dni}`);
      return response;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  
  const createCaso = async (data : any) => {
    setLoading(true);
    try {
      await ApiClient.post(`/casos`, data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateCaso = async (id:number, data : FormData) => {
    setLoading(true);
    try {
      const response = await ApiClientFiles.post(`/casos/${id}`, data);
      setCasos(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await getCasos();
    };

    fetch();
  }, []);

  return { casos, loading, error, getCasos, createCaso, updateCaso, getCasosByDni };
};

export default useCaso;
