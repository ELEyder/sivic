import { useEffect, useState } from "react";
import { ApiClient } from "../services/ApiClient";
import { Contacto } from "../interfaces/Contacto";

const useContacto = () => {
  const [contactos, setConsultas] = useState<Contacto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getConsultas = async () => {
    setLoading(true);
    try {
      const response = await ApiClient.get(`/contactos`);
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

  return { contactos, loading, error, getConsultas };
};

export default useContacto;
