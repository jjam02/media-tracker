
import type { Media, MediaFunctions, EditModalControls } from '../types/media';
import MediaCard from './MediaCard';

interface MediaGridProps {
  mediaList: Media[];
  mediaFunctions: MediaFunctions;
  editModalControls: EditModalControls;
  setMediaList: React.Dispatch<React.SetStateAction<Media[]>>;
}


function MediaGrid({ mediaList, mediaFunctions, editModalControls, setMediaList }: MediaGridProps) {
  //console.log("this is media list", mediaList);
  return (
    <>
      <h1>Your Media</h1>
      <div className="flex flex-row gap-2">
        {mediaList.map((mediaItem) => (
          <MediaCard key={mediaItem.id} media={mediaItem} mediaFunctions={mediaFunctions} editModalControls={editModalControls} setMediaList={setMediaList} />
        ))}
      </div>

    </>
  );
}



export default MediaGrid;