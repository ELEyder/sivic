import { useEffect, useState } from "react";
import { ApiClient } from "../services/ApiClient";
import { Caso } from "../interfaces/Caso";

const useCaso = () => {
  const [casos, setCasos] = useState<Caso[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getCasos = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/casos`);
      console.log(response.data);
      setCasos(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  
  const createCaso = async (data : {}) => {
    setLoading(true);
    try {
      const response = await ApiClient.post(`/casos`, data);
      console.log(response.data);
      setCasos(response.data);
    } catch (error: any) {
      console.log(error.response.data.message);
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

  return { casos, loading, error, getCasos, createCaso };
};

export default useCaso;
