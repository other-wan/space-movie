
import { useState } from "react";
import { ApiStatus } from "../helper/constants";


const useApi = <TData=unknown, TError=unknown> (
    fn: () => TData | Promise<TData>
) => {
    const [data, setData] = useState<TData | undefined>();
    const [error, setError] = useState<TError | unknown>();
    const [apiStatus, setApiStatus] = useState<ApiStatus>( 'LOADING' );

    const exec = async () => {
        try {
            const data = await fn();
            setData(data);
            setApiStatus('SUCCESS');
        } catch(error) {
            setError(error);
            setApiStatus('ERROR');
        }
    };

    return {
        data,
        apiStatus,
        error,
        exec
    }
};


export default useApi;
