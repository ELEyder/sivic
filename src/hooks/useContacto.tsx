import { useEffect, useState } from "react";
import { ApiClient } from "../services/ApiClient";
import { Contacto } from "../interfaces/Contacto";

const useContacto = () => {
  const [contactos, setConsultas] = useState<Contacto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const getContactos = async () => {
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

  const createContacto = async (data : any) => {
    setLoading(true);
    try {
      await ApiClient.post(`/contactos`, data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateContacto = async (id: number, data : any) => {
    setLoading(true);
    try {
      await ApiClient.put(`/contactos/${id}`, data);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await getContactos();
    };

    fetch();
  }, []);

  return { contactos, loading, error, getContactos, createContacto, updateContacto };
};

export default useContacto;
