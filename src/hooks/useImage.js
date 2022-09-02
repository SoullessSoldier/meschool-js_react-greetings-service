import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

export const useImage = (holiday) => {
  const [data, setData] = useState({});
  useEffect(() => {
    if (!holiday) return;
    const url = new URL(`image/${holiday}`, URI_API);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data.idImg) {
          setData(data);
        }
      })
      .catch((err) => console.error(err));
  }, [holiday]);  
  return data;
};