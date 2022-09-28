
import { WithASyncFn } from "./constants";


export const withAsync = async <TData=unknown, TError=unknown> (
    fn: WithASyncFn<TData>
): Promise<{
    response: TData | null,
    error: TError | unknown
}> => {
    try {
        const response = await fn();
        return {
            response,
            error: null
        }
    } catch (error) {
        return {
            response: null,
            error
        }
    }
};

