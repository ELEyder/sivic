import { useEffect, useState } from "react";
import { ApiClient } from "../services/ApiClient";
import { HomePage } from "../interfaces/HomePage";
import { StatisticsPage } from "../interfaces/StatisticsPage";

const useStatisticsPage = () => {
  const [statisticsPage, setStatisticsPage] = useState<HomePage>({} as HomePage);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getStatisticsPage = async (filtros = {}) => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/statistics-page`, {params: filtros});
      setStatisticsPage(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatisticsPage = async (data : StatisticsPage) => {
    setLoading(true);
    try {
      await ApiClient.post(`/statistics-page`, data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await getStatisticsPage();
    };

    fetch();
  }, []);

  return { statisticsPage, loading, error, getStatisticsPage, setStatisticsPage, updateStatisticsPage };
};

export default useStatisticsPage;
