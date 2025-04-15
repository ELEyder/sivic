import { useEffect, useState } from "react";
import { ApiClient, ApiClientFiles } from "../services/ApiClient";
import { InformationPage } from "../interfaces/InformationPage";

const useInformationPage = () => {
  const [informationPage, setInformationPage] = useState<InformationPage>({} as InformationPage);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getInformationPage = async (filtros = {}) => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/information-page`, { params: filtros });
      setInformationPage(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateInformationPage = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await ApiClientFiles.post(`/information-page`, data);
      setInformationPage(response.data.data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInformationPage();
  }, []);

  return {
    informationPage,
    loading,
    error,
    getInformationPage,
    setInformationPage,
    updateInformationPage,
  };
};

export default useInformationPage;
