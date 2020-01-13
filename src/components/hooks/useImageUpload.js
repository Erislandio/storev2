import { useState, useEffect } from "react";

export const useImageUpload = files => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let data = new FormData();
    data.append("data", files[0]);

    // use the file endpoint
    fetch("https://api.graph.cool/file/v1/ck5cbq7f2546801754zdvvp6v", {
      method: "POST",
      body: data
    })
      .then(response => {
        return response.json();
      })
      .then(file => {
        setData(file);
      })
      .finnaly(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    isLoading
  };
};
