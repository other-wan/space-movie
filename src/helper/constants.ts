
export type ApiStatus = 'SUCCESS' | 'ERROR' | 'LOADING';

export type WithASyncFn <T=unknown> = () => T | Promise<T>;

export type MediaData = {
    id: number,
    title?: string,
    name?: string,
    media_type: string,
    poster_path: string,
    backdrop_path: string,
    overview: string,
    release_date?: string,
    first_air_date: string,
    vote_average: number
};

export type MediaApiResult = {
    page: number,
    results: MediaData[],
    total_pages: number,
    total_results: number
};
