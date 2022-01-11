import * as React from "react";

declare type Fn = () => any;

export function useFetch(url: string) {
  const [data, setData] = React.useState<any>();
  const [error, setError] = React.useState<boolean>(false);
  const [next, setNext] = React.useState<string>("");

  const fetchApi = React.useCallback(() => {
    setError(false);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setNext(data.info?.next);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [url]);

  const loadMore = (next: string): Fn => {
    setError(false);
    fetch(next)
      .then((response) => response.json())
      .then((responseData) => {
        setData([...data, ...responseData.results]);
        setNext(responseData.info?.next);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
    return () => {};
  };

  React.useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return {
    error,
    data,
    next,
    loadMore,
  };
}
