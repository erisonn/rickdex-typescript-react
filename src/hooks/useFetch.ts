import * as React from 'react';

export interface IuseFetchProps {
    loading: Boolean
    error: Boolean
    data: any
}

export function useFetch(url: string) {
    
    const [data, setData] = React.useState<any>()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const fetchApi = () => {
        setError(false)
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => 
                setData(data)
            )
            .catch(error => {
                console.log(error)
                setError(true)
            })
        .finally(() => setLoading(false))
    }

    React.useEffect(() => {
        fetchApi();
    }, []);

    return {
        loading,
        error,
        data
  }
}
