import useSwr from 'swr'

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, isLoading, isValidating } = useSwr<Data, Error>(
    url,
    async (url: string) => {
      const response = await fetch(url, {
        cache: 'no-store',
      })
      const data = await response.json()

      return data
    },
    {
      refreshInterval: 120000,
    },
  )

  return { data, error, isLoading, isValidating }
}
