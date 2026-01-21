// /composables/apiFetch.ts

export const apiFetch: typeof useFetch = (request, opts?) => {
  const config = useRuntimeConfig();

  return useFetch(request, {
    baseURL: config.public.baseURL,
    headers: { accept: "*/*", "Content-Type": "application/json" },
    ...opts,
  });
};
