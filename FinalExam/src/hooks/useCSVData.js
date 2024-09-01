import { useEffect, useState } from 'react';
import { fetchCSV, parseCSVData } from '../utils/dataUtils';

export default function useCSVData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const csvData = await fetchCSV(url);
        const parsedData = parseCSVData(csvData);
        setData(parsedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [url]);

  return { data, loading, error };
}
