import { useEffect, useState } from 'react';
import type { Media, MediaFunctions } from './types/media';
import Header from './components/Header'
import MediaGrid from './components/MediaGrid'
import FilterList from './components/FilterList';
import './App.css'
import './index.css'



const mediaListFromStorage = localStorage.getItem('mediaList');



function App() {

  const [mediaList, setMediaList] = useState<Media[]>(mediaListFromStorage ? JSON.parse(mediaListFromStorage) : []);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<'All' | 'TV' | 'Movie'>('All');

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleSetFilter = (currentFilter: 'All' | 'TV' | 'Movie') => {
    setFilter(currentFilter);
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    document.querySelector('html')!.setAttribute('data-theme', theme);
  };

  useEffect(() => {
    document.querySelector('html')!.setAttribute('data-theme', "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem('mediaList', JSON.stringify(mediaList));
    console.log("Media list updated in localStorage");
  }, [mediaList]);

  function deleteMedia(id: string) {
    const updatedMediaList = mediaList.filter((media) => media.id !== id);
    setMediaList(updatedMediaList);
  }

  function editMedia(id: string, updatedMedia: Partial<Media>) {
    const updatedMediaList = mediaList.map((media) =>
      media.id === id ? { ...media, ...updatedMedia } : media
    );
    setMediaList(updatedMediaList);
  }

  const mediaFunctions: MediaFunctions = {
    editMedia,
    deleteMedia
  };



  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Header
        showModal={showModal}
        setShowModal={setShowModal}
        theme={theme}
        onToggleTheme={toggleTheme}
        setMediaList={setMediaList}
      />
      <FilterList FilterSet={handleSetFilter} filter={filter} />
      <MediaGrid mediaList={mediaList.filter(media => filter === 'All' || media.type === filter)} mediaFunctions={mediaFunctions} setMediaList={setMediaList} />
    </div>
  )
}

export default App

// TOMORROW: edit media functionality
// change the on submuit functions to not update the media in their components but instead call functions passed down from App.tsx that update the mediaList state there
// RE FACTOR PROPS NAMES TO INCLUDE MULTIPLE FUNCTIONS OR CONTROLS WHERE NEEDED
// test thoroughly after refactor
