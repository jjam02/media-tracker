import { useEffect, useState } from 'react';
import type Media from './types/media';
import Header from './components/Header'
import MediaGrid from './components/MediaGrid'
import MediaFormModal from './components/MediaFormModal'
import './App.css'
import './index.css'

//------------SAMPLE DATA FOR TESTING PURPOSES----------------
const sampleMediaList: Media[] = [
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

  const [mediaList, setMediaList] = useState<Media[]>(sampleMediaList);
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.querySelector('html')!.setAttribute('data-theme', theme);
  };

  useEffect(() => {
    document.querySelector('html')!.setAttribute('data-theme', "dark");
  }, []);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Header
        showModal={showModal}
        setShowModal={setShowModal}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <MediaFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <MediaGrid mediaList={mediaList} />
    </div>
  )
}

export default App
