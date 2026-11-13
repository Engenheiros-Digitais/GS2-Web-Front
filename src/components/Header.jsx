import { NavLink, Link } from 'react-router-dom';

const links = [
  { para: '/', texto: 'Mapa' },
  { para: '/plataforma', texto: 'Plataforma' },
  { para: '/relatos', texto: 'Relatos' },
];

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="flex flex-wrap items-center gap-4 px-5 py-3">
        <Link to="/">
          <img src="/logo.svg" alt="Diluvium" className="h-10" />
        </Link>

        <nav className="flex gap-5 text-sm font-semibold">
          {links.map((link) => (
            <NavLink
              key={link.para}
              to={link.para}
              end={link.para === '/'}
              className={({ isActive }) => (isActive ? 'text-secundaria underline' : 'text-gray-500 hover:text-texto')}
            >
              {link.texto}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <span className="hidden text-xs text-gray-500 md:inline">Dados simulados</span>
          <Link to="/relatos" className="rounded-lg bg-secundaria px-4 py-2 text-sm font-bold text-white">
            Registrar relato
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
