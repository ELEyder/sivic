import { useEffect, useState } from "react";
import { ApiClient } from "../services/ApiClient";
import { HomePage } from "../interfaces/HomePage";

const useHomePage = () => {
  const [homePage, setHomePage] = useState<HomePage>({} as HomePage);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getHomePage = async (filtros = {}) => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/home-page`, {params: filtros});
      setHomePage(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateHomePage = async ( data : any) => {
    setLoading(true);
    try {
      await ApiClient.post(`home-page`, data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await getHomePage();
    };

    fetch();
  }, []);

  return { homePage, loading, error, getHomePage, setHomePage, updateHomePage };
};

export default useHomePage;
