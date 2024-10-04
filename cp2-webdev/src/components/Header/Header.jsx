import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="m-4 md:m-12 text-3xl md:text-5xl">
        <nav className="flex justify-center">
          <ul className="flex list-none items-center space-x-12 md:space-x-20">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                <a className="relative text-white text-2xl md:text-3xl leading-10 transition-all duration-400 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-75 hover:text-[#6d8484] hover:opacity-100 hover:scale-[1.2] md:hover:scale-[2.1] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-1 after:bg-[#829595] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100">
                  Menu
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projetos" className={({ isActive }) => (isActive ? 'active' : '')}>
                <a className="relative text-white text-2xl md:text-3xl leading-10 transition-all duration-400 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-75 hover:text-[#6d8484] hover:opacity-100 hover:scale-[1.2] md:hover:scale-[2.1] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-1 after:bg-[#829595] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100">
                  Projetos
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobremim" className={({ isActive }) => (isActive ? 'active' : '')}>
                <a className="relative text-white text-2xl md:text-3xl leading-10 transition-all duration-400 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-75 hover:text-[#6d8484] hover:opacity-100 hover:scale-[1.2] md:hover:scale-[2.1] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-1 after:bg-[#829595] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100">
                  Sobre Mim
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sociais" className={({ isActive }) => (isActive ? 'active' : '')}>
                <a className="relative text-white text-2xl md:text-3xl leading-10 transition-all duration-400 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-75 hover:text-[#6d8484] hover:opacity-100 hover:scale-[1.2] md:hover:scale-[2.1] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-1 after:bg-[#829595] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100">
                  Redes Sociais
                </a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>
                <a className="relative text-white text-2xl md:text-3xl leading-10 transition-all duration-400 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-75 hover:text-[#6d8484] hover:opacity-100 hover:scale-[1.2] md:hover:scale-[2.1] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-1 after:bg-[#829595] after:scale-x-0 after:origin-left after:transition-transform after:duration-500 after:ease-in-out hover:after:scale-x-100">
                  Contato
                </a>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
