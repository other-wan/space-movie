
import { MediaData } from "../../helper/constants";
import MediaLayout from "../../layout/MediaLayout";


type MediaProps = {
    header: string,
    media: MediaData[]
}


const Media = ({header, media}: MediaProps) => {

    return ( 
        <MediaLayout
            header={header}
            media={media}
            position={false}
            className={{
                container: 'card-slide-container',
                item: 'card-slide-item'
            }}
        />
     );
}
 
export default Media;

