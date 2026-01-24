import '../MediaCard.css'
import type { MediaFunctions, Media } from '../types/media';

type MediaCardProps = {

    media: Media
    mediaFunctions: MediaFunctions
};


function MediaCard({ media, mediaFunctions }: MediaCardProps) {
    return (
        <div className='border-2 border-solid rounded-r-sm'>
            <h2>{media.title}</h2>
            <p>Type: {media.type}</p>
            <p>Status: {media.status}</p>
            <p>Score: {media.score}</p>
            <div className="flex flex-row gap-2">
                <button onClick={() => mediaFunctions.editMedia(media.id, { title: media.title })} className=''>Edit</button>
                <button onClick={() => mediaFunctions.deleteMedia(media.id)} className=''>Delete</button>
            </div>
        </div >);
}

export default MediaCard;