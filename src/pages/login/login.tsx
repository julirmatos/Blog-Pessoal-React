import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
function Spinner({ className = "h-6 w-6 text-white" }: { className?: string }) {
  return (
    <svg className={`${className} animate-spin`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  );
}

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="bg-[#7aa3a3] min-h-screen flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl min-h-[580px] gap-20">

        <div className="bg-[#f3f5f2] rounded-3xl shadow-xl p-12 flex flex-col justify-center">
          
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
            🔐 Entrar
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Acesse sua conta do Blog da Ju 🌺
          </p>

          <form className="flex flex-col gap-6" onSubmit={login}>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Usuário
              </label>
              <input
                type="text"
                name="usuario"
                placeholder="Digite seu usuário"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Senha
              </label>
              <input
                type="password"
                name="senha"
                placeholder="Digite sua senha"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#7aa3a3] text-white rounded-xl py-3 font-semibold hover:bg-[#6a9292] transition flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner className="h-6 w-6 text-white" />
              ) : (
                <span>Entrar</span>
              )}
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Ainda não tem uma conta?{" "}
              <Link
                to="/cadastro"
                className="text-[#e75480] font-semibold hover:underline"
              >
                Cadastre-se
              </Link>
            </p>

          </form>
        </div>

        <div className="hidden md:block rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1170&auto=format&fit=crop"
            alt="Imagem ilustrativa"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Login;
