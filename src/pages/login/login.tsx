import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/home");
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

          <form className="flex flex-col gap-6" onSubmit={handleLogin}>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Usuário
              </label>
              <input
                type="text"
                placeholder="Digite seu usuário"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#7aa3a3] text-white rounded-xl py-3 font-semibold hover:bg-[#6a9292] transition"
            >
              Entrar
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
