import MediaFormModal from './MediaFormModal';
import '../App.css'

interface HeaderProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;


}

function Header({ showModal, setShowModal }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="text-xl font-bold text-black dark:text-gray-300">Media Tracker</h1>
      <div className='flex justify-between gap-4'>
        <MediaFormModal showModal={showModal} setShowModal={setShowModal} />
        <button id="themeToggle" onClick={toggleTheme}>light mode</button>

      </div>
    </header>
  );
}

function toggleTheme() {
  const curTheme = document.querySelector('html')!.getAttribute('data-theme');
  const newTheme = curTheme === 'dark' ? 'light' : 'dark';
  document.querySelector('html')!.setAttribute('data-theme', newTheme);
  document.getElementById('themeToggle')!.innerText = newTheme === 'dark' ? 'light mode' : 'dark mode';
}

export default Header;