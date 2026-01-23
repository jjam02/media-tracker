
import type media from '../types/media';
import MediaCard from './MediaCard';

interface MediaGridProps {
  mediaList: media[];
}


function MediaGrid({ mediaList }: MediaGridProps) {
  console.log("this is media list", mediaList);
  return (
    <>
      <h1>Your Media</h1>
      <div className="flex flex-row gap-2">
        {mediaList.map((mediaItem) => (
          <MediaCard key={mediaItem.id} media={mediaItem} />
        ))}
      </div>

    </>
  );
}



export default MediaGrid;