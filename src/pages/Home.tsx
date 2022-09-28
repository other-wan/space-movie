import axios from "axios";
import { useEffect } from "react";
import { fetchTrending } from "../api/media";
import Recommended from "../components/views/Recommended";
import Trending from "../components/views/Trending";
import useApi from "../hooks/useApi";


const Home = () => {

    const {
        data: media,
        apiStatus,
        error,
        exec: init
    } = useApi(
        () => axios.all([
            fetchTrending('day'),
            fetchTrending('week')
        ]).then(res => res.map(_res => _res.data.results))
    )

    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return ( 
        <>
            {media && <Trending media={media[0]} />}
            {media && <Recommended media={media[1]} />}
        </>
     );
}
 
export default Home;
