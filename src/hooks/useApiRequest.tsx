import { useState } from "react";

type UseApiRequestProps = {
  onChange?: () => void;
};

const useApiRequest = ({ onChange }: UseApiRequestProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const handleRequest = async (callback: () => Promise<any>): Promise<any> => {
    setLoading(true);
    setError(null);
    try {
      const response = await callback();
      if (onChange) onChange(); 
      return response;
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { handleRequest, loading, error };
};

export default useApiRequest;
