import type media from '../types/media';
import '../MediaCard.css'

type MediaCardProps = { media: media };


function MediaCard({ media }: MediaCardProps) {
    return (
        <div className='border-2 border-solid rounded-r-sm'>
            <h2>{media.title}</h2>
            <p>Type: {media.type}</p>
            <p>Status: {media.status}</p>
            <p>Score: {media.score}</p>
        </div >);
}

export default MediaCard;