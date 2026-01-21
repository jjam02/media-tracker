
import '../App.css'


function Header() {
  return (
    <header className="header">
      <h1 className="text-xl font-bold text-black dark:text-gray-300">Media Tracker</h1>
      <div className='flex justify-between gap-4'>
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