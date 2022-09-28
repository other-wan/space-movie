import ListManager from "../components/ListManager";
import MediaCard from "../components/MediaCard";
import { MediaData } from "../helper/constants";

type MediaLayoutType = {
    header: string,
    className: {
        container: string | undefined, 
        item: string | undefined
    },
    position: boolean,
    media: MediaData[]
};


const MediaLayout = ({ 
    header,
    className,
    position,
    media,
}: MediaLayoutType ) => {
    return ( 
        <section className="section-m40">
            <h2>{ header }</h2>

            <ListManager 
                data={media}
                renderer={(item) => (
                    <MediaCard 
                        media={item} 
                        position={position}
                    />
                )}
                className={className}
            />
        </section>
     );
}
 
export default MediaLayout;
