

import { MediaData } from "../../helper/constants";
import ListManager from "../ListManager";
import MediaCard from "../MediaCard";


type RecommendedProp = {
    media: MediaData[] | undefined
}

const Recommended = (prop: RecommendedProp) => {
    const media = prop.media;

    return ( 
        <section className="section-m40">
            <h2>Recommended for you</h2>
            
            <ListManager 
                data={media}
                renderer={item => (
                    <MediaCard media={item} 
                    position={false} />
                )}
                className={{ container: 'card-container', item: 'card-item'}} 
            />
        </section>
     );
}
 
export default Recommended;

