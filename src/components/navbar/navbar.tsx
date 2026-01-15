import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/home"
          className="font-bold text-lg text-gray-800 hover:text-gray-600"
        >
          👩‍💻 Blog Pessoal
        </Link>

        <nav className="flex gap-6 text-gray-700 font-medium">
          <Link to="/postagens" className="hover:text-gray-500">
            Postagens
          </Link>
          <Link to="/temas" className="hover:text-gray-500">
            Temas
          </Link>
          <Link to="/cadastrar-tema" className="hover:text-gray-500">
            Cadastrar tema
          </Link>
          <Link to="/perfil" className="hover:text-gray-500">
            Perfil
          </Link>
          <button className="hover:text-red-500">
            Sair
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
