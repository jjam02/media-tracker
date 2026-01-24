
import type { Media, MediaFunctions, EditModalControls } from '../types/media';
import MediaCard from './MediaCard';

interface MediaGridProps {
  mediaList: Media[];
  mediaFunctions: MediaFunctions;
  editModalControls: EditModalControls;
}


function MediaGrid({ mediaList, mediaFunctions, editModalControls }: MediaGridProps) {
  //console.log("this is media list", mediaList);
  return (
    <>
      <h1>Your Media</h1>
      <div className="flex flex-row gap-2">
        {mediaList.map((mediaItem) => (
          <MediaCard key={mediaItem.id} media={mediaItem} mediaFunctions={mediaFunctions} editModalControls={editModalControls} />
        ))}
      </div>

    </>
  );
}



export default MediaGrid;