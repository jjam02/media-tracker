
import type { Media, MediaFunctions } from '../types/media';
import MediaCard from './MediaCard';

interface MediaGridProps {
  mediaList: Media[];
  mediaFunctions: MediaFunctions;
}


function MediaGrid({ mediaList, mediaFunctions }: MediaGridProps) {
  //console.log("this is media list", mediaList);
  return (
    <>
      <h1>Your Media</h1>
      <div className="flex flex-row gap-2">
        {mediaList.map((mediaItem) => (
          <MediaCard key={mediaItem.id} media={mediaItem} mediaFunctions={mediaFunctions} />
        ))}
      </div>

    </>
  );
}



export default MediaGrid;