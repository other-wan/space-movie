
export const makeURL = (param: string | number | undefined) => 
    `/${param}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
