import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { searchMovie, searchShow } from "../api/media";
import useApi from "../hooks/useApi";
import ListManager from "../components/ListManager";
import MediaCard from "../components/MediaCard";


const Search = () => {
    const param = useLocation().state.query;

    const {
        data:media,
        error,
        apiStatus,
        exec:init
    } = useApi(
        () => axios.all([
            searchMovie(param),
            searchShow(param)
        ]).then(res => res.map(_res => _res.data.results))
    );

    useEffect(() => {
        init();
    }, [param]);

    const memo = useMemo(() => {
        return media?.flat().filter(_media => {
            return _media.backdrop_path !== null;
        });
    }, [media]);
    
    return ( 
        <section  className="section-m40">
            { memo?.length ? 
                <h2>{`Found ${memo ? memo.length : 0} results '${param}'`}</h2>
                : <h2>{`No result found for ${param}`}</h2>
            }
            
            <ListManager 
                data={memo}
                renderer={item => (
                    <MediaCard media={item} position={false} />
                )}
                className={{container: 'card-container', item: 'card-item'}}
            />
        </section>
     );
}
 
export default Search;
