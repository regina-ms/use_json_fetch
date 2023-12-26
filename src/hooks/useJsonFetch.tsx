import { useEffect, useState } from "react";

interface respData {
    status: string,
}

export function useJsonFetch(url: string, options?: any): [respData | null, Error | null, boolean] {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch(url, options)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json();
            })
            .then(data => {
                setLoading(false);
                setData(data)
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            })
    }

    useEffect(fetchData, [url, options]);

    return [data, error, loading];
}