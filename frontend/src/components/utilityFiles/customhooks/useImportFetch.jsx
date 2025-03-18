/**
 * @param {string} url
 * @param {Function} callback
 */

import { useEffect } from "react";

export default async function useImportFetch(
  url,
  callback,
  type = "TEXT",
  keepDependecy = []
) {
  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => {
        if (res.status >= 400 && res.status < 500)
          throw new Error("User Error " + res.status);

        if (type === "TEXT") {
          return res.text();
        }
        return res.json();
      })
      .then((data) => {
        callback(null, data);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...keepDependecy]);
}
