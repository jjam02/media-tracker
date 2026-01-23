import type media from './types/media';
import Header from './components/Header'
import MediaGrid from './components/MediaGrid'
import MediaFormModal from './components/MediaFormModal'
import './App.css'
import './index.css'
//------------SAMPLE DATA FOR TESTING PURPOSES----------------
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
//------------------------------------------------------------


function App() {


  return (
    <>
      <Header />
      <MediaFormModal />
      <MediaGrid mediaList={sampleMediaList} />
    </>
  )
}

export default App
