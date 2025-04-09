import { useEffect, useState } from "react";
import { ApiClient } from "../services/ApiClient";
import { Consulta } from "../interfaces/Consulta";

const useConsulta = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getConsultas = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/consultas`);
      setConsultas(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await getConsultas();
    };

    fetch();
  }, []);

  return { consultas, loading, error, getConsultas };
};

export default useConsulta;
