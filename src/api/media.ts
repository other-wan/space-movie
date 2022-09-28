
import { MediaApiResult } from "../helper/constants";
import { makeURL } from "../helper/url";
import api from "./api";


export const fetchMovie = (param: string | number) => 
    api.get<MediaApiResult>( '/movie' + makeURL(param) );

export const fetchShow = (param: string | number) => 
    api.get<MediaApiResult>( '/tv' + makeURL(param) );

export const fetchTrending = (param: string | number) => 
    api.get<MediaApiResult>( '/trending/all' + makeURL(param) );


export const searchMovie = (param: string) => 
    api.get<MediaApiResult>( '/search/movie' + makeURL(""), {
        params: {
            query: param
        }
    });

export const searchShow = (param: string) => 
    api.get<MediaApiResult>( '/search/tv' + makeURL(""), {
        params: {
            query: param
        }
    });
