import { useEffect } from "react";

/**
 *
 * @param {string} link - from /DataCenter
 * @param {function} callback
 */
export default function useImport(link, callback) {
  useEffect(() => {
    import(`../../../DataCenter${link}`)
      .then((res) => res.default)
      .then((data) => callback(data));
  }, [link, callback]);
}
