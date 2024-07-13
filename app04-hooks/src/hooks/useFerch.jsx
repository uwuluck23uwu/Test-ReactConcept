import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    };

    setLoading(true)
    fetchData();
    setTimeout(()=>{
        setLoading(false)
    }, 2000)
  }, [url]);

  return { data, Loading };
};
