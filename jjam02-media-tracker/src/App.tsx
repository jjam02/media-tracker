import { useEffect, useState } from 'react';
import type Media from './types/media';
import Header from './components/Header'
import MediaGrid from './components/MediaGrid'
import MediaFormModal from './components/MediaFormModal'
import './App.css'
import './index.css'



const mediaListFromStorage = localStorage.getItem('mediaList');



function App() {

  const [mediaList, setMediaList] = useState<Media[]>(mediaListFromStorage ? JSON.parse(mediaListFromStorage) : []);
  const [showModal, setShowModal] = useState(false);
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

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Header
        showModal={showModal}
        setShowModal={setShowModal}
        theme={theme}
        onToggleTheme={toggleTheme}
        setMediaList={setMediaList}
      />

      <MediaGrid mediaList={mediaList} />
    </div>
  )
}

export default App
