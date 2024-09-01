import { Link } from 'react-router-dom';

export default function Header() {
  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Matches Details', path: '/matches' },
    { title: 'Team Details', path: '/teams' },
    { title: 'Players', path: '/players' },
  ];

  return (
    <header>
      <div>
        <img
          src='/euro-2024.ico'
          alt='Icon of football tournament'
        />
        <h2>Football tournament</h2>
      </div>
      <ul>
        {pages.map(({ title, path }) => {
          <Link
            to={path}
            key={title}
          >
            {title}
          </Link>;
        })}
      </ul>
    </header>
  );
}
