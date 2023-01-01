import { useState, useEffect } from "react";
import axios from "axios";
const UseFetch = (url) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setQuote(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  const reFetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setError(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { quote, loading, error, reFetch };
};

export default UseFetch;
