
import type { Media, MediaFunctions, EditModalControls } from '../types/media';
import MediaCard from './MediaCard';

interface MediaGridProps {
  mediaList: Media[];
  mediaFunctions: MediaFunctions;

  setMediaList: React.Dispatch<React.SetStateAction<Media[]>>;
}


function MediaGrid({ mediaList, mediaFunctions, setMediaList }: MediaGridProps) {
  //console.log("this is media list", mediaList);
  return (
    <>
      <h1>Your Media</h1>
      <div className="flex flex-row flex-wrap m-2 gap-2">
        {mediaList.map((mediaItem) => (
          <MediaCard key={mediaItem.id} media={mediaItem} mediaFunctions={mediaFunctions} setMediaList={setMediaList} />
        ))}
      </div>

    </>
  );
}



export default MediaGrid;