import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const useRealTime = (apiEndPoint) => {
  const { data, error } = useSWR(apiEndPoint, fetcher);

  return { data, error };
};

export default useRealTime;
