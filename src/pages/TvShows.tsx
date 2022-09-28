
import axios from "axios";
import { useEffect } from "react";
import { fetchShow } from "../api/media";
import useApi from "../hooks/useApi";
import Media from "../components/views/Media";

const TvShows = () => {
    
    const {
        data: media,
        apiStatus,
        error,
        exec: init 
    } = useApi(
        () => axios.all([
            fetchShow('on_the_air'),
            fetchShow('popular'),
            fetchShow('top_rated')
        ]).then(res => res.map(_res => _res.data.results))
    );

    useEffect(() => {
        init();
    }, [])
    
    return ( 
        <>
            {media && <Media header="Latest" media={media[0]} />}
            {media && <Media header="Popular" media={media[1]} />}
            {media && <Media header="Top Rated" media={media[2]} />}
        </>
     );
}
 
export default TvShows;

