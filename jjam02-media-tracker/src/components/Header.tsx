import MediaFormModal from './MediaFormModal';
import '../App.css'

interface HeaderProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  onToggleTheme: () => void;
  theme: 'light' | 'dark';


}

function Header({ showModal, setShowModal, onToggleTheme, theme }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="text-xl font-bold text-black dark:text-gray-300">Media Tracker</h1>
      <div className='flex justify-between gap-4'>
        <MediaFormModal showModal={showModal} setShowModal={setShowModal} />
        <button id="themeToggle" onClick={onToggleTheme}>{theme === 'dark' ? 'light mode' : 'dark mode'}</button>

      </div>
    </header>
  );
}


export default Header;