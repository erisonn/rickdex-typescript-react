import * as React from 'react';

export interface IuseFetchProps {
    error: Boolean
    data: any
    next: string,
}

declare type Fn = () => any

export function useFetch(url: string){
    
    const [data, setData] = React.useState<any>()
    const [error, setError] = React.useState(false)
    const [next, setNext] = React.useState<string>('')

    const fetchApi = () => {
        console.log(url)
        setError(false)
        fetch(url)
            .then(response => response.json())
            .then(data => 
                {
                setData(data.results)
                setNext(data.info.next)
                }
            )
            .catch(error => {
                console.log(error)
                setError(true)
            })
    }

    const loadMore = (next: string):Fn => {
        setError(false)
        fetch(next)
            .then(response => response.json())
            .then(responseData => {
                setData([...data, ...responseData.results])
                setNext(responseData.info.next)
            })
            .catch(error => {
                console.log(error)
                setError(true)
            })
        return () => {}
    }

    React.useEffect(() => {
        fetchApi();
    }, [url]);

    return {
        error,
        data,
        next,
        loadMore,
    }
}
