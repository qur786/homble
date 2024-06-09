import { useState, useCallback } from "react";
import "../types";
import { getRequest, postRequest } from "../axios";
import { useSnackbar } from "notistack";

/**
 * @type {UseFetcher}
 */
export function useFetcher(method, finallyCallback) {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const makeRequest = useCallback(
    ({ url, data, options, params, responseType }) => {
      setLoading(true);
      if (method === "post") {
        postRequest(url, data, options)
          .then((output) => {
            setOutput(output);
            enqueueSnackbar("Successfully created resource(s).", {
              variant: "success",
            });
          })
          .catch(() => {
            enqueueSnackbar("Something went wrong!", {
              variant: "error",
            });
          })
          .finally(() => {
            setLoading(false);
            finallyCallback?.();
          });
      } else {
        getRequest(url, params, responseType)
          .then((output) => {
            setOutput(output.data);
            enqueueSnackbar("Successfully fetched resource(s).", {
              variant: "success",
            });
          })
          .catch(() => {
            enqueueSnackbar("Something went wrong!", {
              variant: "error",
            });
          })
          .finally(() => {
            setLoading(false);
            finallyCallback?.();
          });
      }
    },
    [enqueueSnackbar, finallyCallback, method],
  );

  return { makeRequest, output, loading };
}
