
import type media from '../types/media';
import MediaCard from './MediaCard';

const sampleMediaList: media[] = [
  {
    id: '1',
    title: 'Inception',
    type: 'Movie',
    status: 'Completed',
    score: 9,
  },
  {
    id: '2',
    title: 'The Witcher',
    type: 'TV Show',
    status: 'Watching',
    score: 8,
  },
];


function MediaGrid() {
  return (
    <>
      <h1>Your Media</h1>
      <div className="flex flex-row gap-2">
        {sampleMediaList.map((mediaItem) => (
          <MediaCard key={mediaItem.id} media={mediaItem} />
        ))}
      </div>

    </>
  );
}



export default MediaGrid;