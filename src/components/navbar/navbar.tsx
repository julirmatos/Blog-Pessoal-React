import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <Link
          to="/home"
          className="font-extrabold text-xl text-gray-900 tracking-tight hover:text-gray-700 transition"
        >
          👩‍💻 Blog Pessoal
        </Link>

        <nav className="flex gap-8 text-gray-800 font-semibold text-base">
          <Link to="/postagens" className="hover:text-[#7aa3a3] transition">
            Postagens
          </Link>
          <Link to="/temas" className="hover:text-[#7aa3a3] transition">
            Temas
          </Link>
          <Link to="/cadastrar-tema" className="hover:text-[#7aa3a3] transition">
            Cadastrar tema
          </Link>
          <Link to="/perfil" className="hover:text-[#7aa3a3] transition">
            Perfil
          </Link>

          <button
            onClick={handleLogout}
            className="hover:text-[#7aa3a3] transition font-semibold"
          >
            Sair
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;
