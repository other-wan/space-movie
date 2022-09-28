
import { MediaData } from "../helper/constants";
import { Images } from "../helper/Images";
import "../styles/card.css";


type MediaCardType = {
    media: MediaData,
    position: boolean
}


const MediaCard = ({ media: item, position }: MediaCardType) => {

    return ( 
        <>
            <img 
                className="card-img"
                src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} 
                alt={item.title? item.title : item.name} />
                
            <div className={`card-content ${position ? 'card-pos' : ''}`}>
                <div className="card-desc">
                    <p className="card-text"> { new Date(
                            item.release_date ?
                            item.release_date :
                            item.first_air_date
                        ).getFullYear().toString() }
                    </p>&bull;
                    <span>
                        <img 
                            src={item.media_type === 'tv' ? 
                                Images.iconTv : 
                                Images.iconMovie} 
                            alt={item.media_type}
                            width="16px"
                            height="12px" />
                        <p className="card-text">
                            {item.release_date ? "Movie" : "Tv"}
                        </p>
                    </span>&bull;
                    <p className="card-text">PG</p>
                </div>
                <h3 className="card-title">
                    {item.title ? item.title : item.name}
                </h3>
            </div>
        </>
     );
}
 
export default MediaCard;
