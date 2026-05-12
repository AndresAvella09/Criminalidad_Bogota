import { useState, useEffect } from 'react';

export function useResultados() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/resultados_bogota.json')
      .then(res => {
        if (!res.ok) throw new Error('No se pudo cargar el archivo de resultados');
        return res.json();
      })
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}