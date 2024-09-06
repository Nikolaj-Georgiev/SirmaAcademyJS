import { Link } from 'react-router-dom';

export default function Header() {
  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Bracket', path: '/bracket' },
    // { title: 'Groups', path: '/groups' },
    { title: 'Teams', path: '/teams' },
    // { title: 'Players', path: '/players' },
  ];

  return (
    <header className='header'>
      <div className='header__logo-container'>
        <img
          className='header__logo-container--img'
          src='/goal_icon.ico'
          alt='Icon of football tournament'
        />
        <h2 className='header__logo-container--text'>Tournament</h2>
      </div>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          {pages.map(({ title, path }) => (
            <Link
              to={path}
              key={title}
              className='header__nav-list-item'
            >
              {title}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
