
import { MediaData } from "../../helper/constants";
import ListManager from "../ListManager";
import '../../styles/trending.css';
import MediaCard from "../MediaCard";


type TrendingProp = {
    media: MediaData[] | undefined
}

const Trending = (prop: TrendingProp) => {
    const media = prop.media;

    return ( 
        <section className="trending">
            <h2>Trending</h2>

            <ListManager 
                data={media}
                renderer={item => (
                    <MediaCard media={item} position={true} />
                )}
                className={{
                    container: "trending-container",
                    item: "trending-item"
                }} 
            />
        </section>
     );
}
 
export default Trending;
