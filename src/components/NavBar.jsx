import { Link } from 'react-router-dom';
import { LogoTmYmV } from '../assets';

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-darkBlue w-full z-50">
      <nav className="h-auto items-center justify-between py-6 max-w-[1280px] grid md:grid-cols-6 mx-auto  gap-4 px-10">

        <Link to="/" className="flex items-center col-span-2">
          <img src={LogoTmYmV} alt="Logo Tu Memoria" className="h-[110px] z-10" />
        </Link>
        <ul className="flex font-fira text-lg font-normal text-white md:col-start-3 col-span-4 items-center leading-tight">

          <li>
            <Link to="/voces-publicas" className="hover:text-palePink mr-16 text-center">Voces<br/>Públicas</Link>
          </li>
          <li>
            <Link to="/voces-que-acompañan" className="hover:text-palePink mr-16 text-center">Voces que<br/>Acompañan</Link>
          </li>
          <li>
            <Link to="/voces-que-se-quedan" className="hover:text-palePink mr-16 text-center">Voces que<br/>Se quedan</Link>
          </li>
          <li>
            <Link to="/tu-memoria" className="hover:text-palePink">Tu Memoria</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
