import { useEffect, useState } from "react";
import { URI_API } from "../const/const";

export const useText = (holiday) => {
  const [text, setText] = useState("Выберите повод для поздравления!");
  useEffect(() => {
    if (!holiday) return;
    const url = new URL(`text/${holiday}`, URI_API);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        if (data.text) {
          setText(data.text);
        }
      })
      .catch((err) => console.error(err));
  }, [holiday]);
  return [text];
};
