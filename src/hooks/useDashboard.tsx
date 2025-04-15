import { useEffect, useState } from "react";
import { ApiClient } from "../services/ApiClient";

const useDashboard = () => {

  const [data, setData] = useState({
    grafico_mensual : [],
    estados : [{
      nombre : "",
      valor: 0,
      color: ""
    }],
    total : 0,
    ultima_actualizacion : "2025-04-15 17:35:09",
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const getCasos = async (filtros = {}) => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/casos/dashboard-data`, {params: filtros});
      setData(response.data);
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

  return { data, loading, error, getCasos};
};

export default useDashboard;
