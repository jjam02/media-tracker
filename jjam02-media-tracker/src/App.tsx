import { useEffect, useState } from 'react';
import type { Media, MediaFunctions, EditModalControls } from './types/media';
import Header from './components/Header'
import MediaGrid from './components/MediaGrid'
import './App.css'
import './index.css'



const mediaListFromStorage = localStorage.getItem('mediaList');



function App() {

  const [mediaList, setMediaList] = useState<Media[]>(mediaListFromStorage ? JSON.parse(mediaListFromStorage) : []);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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

  const editModalControls: EditModalControls = {
    showEditModal,
    setShowEditModal
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

      <MediaGrid mediaList={mediaList} mediaFunctions={mediaFunctions} editModalControls={editModalControls} />
    </div>
  )
}

export default App
