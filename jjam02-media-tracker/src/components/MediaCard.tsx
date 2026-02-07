import '../MediaCard.css'
import type { MediaFunctions, Media, EditModalControls } from '../types/media';
import EditMediaFormModal from './EditMediaFormModal';

type MediaCardProps = {

    media: Media
    mediaFunctions: MediaFunctions
    editModalControls: EditModalControls
    setMediaList: React.Dispatch<React.SetStateAction<Media[]>>;

};


function MediaCard({ media, mediaFunctions, editModalControls, setMediaList }: MediaCardProps) {
    return (
        <div className='border-2 border-solid rounded-r-sm'>
            <h2>{media.title}</h2>
            <p>Type: {media.type}</p>
            <p>Status: {media.status}</p>
            <p>Score: {media.score}</p>
            <button onClick={() => console.log(media)}>card </button>
            <div className="flex flex-row gap-2">
                <EditMediaFormModal currentMedia={media} editModalControls={editModalControls} setMediaList={setMediaList} />
                <button onClick={() => mediaFunctions.deleteMedia(media.id)} className=''>Delete</button>
            </div>
        </div >);

}

export default MediaCard;