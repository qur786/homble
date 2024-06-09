import { useState, useCallback } from "react";
import "../types";
import { getRequest, postRequest } from "../axios";

/**
 * @type {UseFetcher}
 */
export function useFetcher(method, finallyCallback) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const makeRequest = useCallback(
    ({ url, data, options, params, responseType }) => {
      setLoading(true);
      if (method === "post") {
        postRequest(url, data, options)
          .then((output) => {
            setError(null);
            setOutput(output);
          })
          .catch(() => {
            setError("Something went wrong!.");
          })
          .finally(() => {
            setLoading(false);
            finallyCallback?.();
          });
      } else {
        getRequest(url, params, responseType)
          .then((output) => {
            setError(null);
            setOutput(output.data);
          })
          .catch(() => {
            setError("Something went wrong!.");
          })
          .finally(() => {
            setLoading(false);
            finallyCallback?.();
          });
      }
    },
    [finallyCallback, method],
  );

  return { makeRequest, error, output, loading };
}
