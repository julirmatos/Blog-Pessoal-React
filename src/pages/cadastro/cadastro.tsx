import {
  useEffect,
  useContext,
  useState,
  type ChangeEvent,
  type FormEvent,
  type CSSProperties,
} from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Services";

function Spinner({
  size = 20,
  color = "#fff",
}: {
  size?: number;
  color?: string;
}) {
  const style: CSSProperties = {
    width: size,
    height: size,
    border: `${Math.max(2, Math.round(size / 8))}px solid ${color}`,
    borderTopColor: "transparent",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    display: "inline-block",
  };
  return (
    <>
      <style>
        {`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}
      </style>
      <span style={style} />
    </>
  );
}

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate("/home");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario("/usuarios/cadastrar", usuario, setUsuario);

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro.",
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmarSenha("");
    }

    setIsLoading(false);
  }

  return (
    <div className="bg-[#7aa3a3] min-h-screen flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl min-h-[585px] py-10 gap-20 py-10">
        <div className="hidden md:block h-full rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1170&auto=format&fit=crop"
            alt="Imagem ilustrativa"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="h-full bg-[#f3f5f2] rounded-3xl shadow-xl p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
            ✨ Cadastrar
          </h1>

          <p className="text-center text-gray-600 text-base mb-8">
            👩‍💻 Preencha os dados para fazer parte do Blog da Ju 🌺
          </p>

          <form
            className="flex justify-center items-center flex-col w-full gap-5"
            onSubmit={cadastrarNovoUsuario}
          >
            <div className="w-full">
              <label
                htmlFor="nome"
                className="text-sm font-semibold text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-semibold text-gray-700">
                Usuário
              </label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                value={usuario.usuario}
                onChange={atualizarEstado}
                placeholder="Email"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-semibold text-gray-700">
                Foto (URL)
              </label>
              <input
                type="text"
                id="foto"
                name="foto"
                value={usuario.foto}
                onChange={atualizarEstado}
                placeholder="Foto"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-semibold text-gray-700">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={usuario.senha}
                onChange={atualizarEstado}
                placeholder="Senha"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div className="w-full">
              <label className="text-sm font-semibold text-gray-700">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                value={confirmarSenha}
                onChange={handleConfirmarSenha}
                placeholder="Confirmar Senha"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div className="flex gap-6 mt-6 w-full">
              <button
                type="reset"
                onClick={retornar}
                className="w-full bg-[#e75480] text-white rounded-xl py-3 font-semibold hover:bg-[#d14770] transition"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#7aa3a3] text-white rounded-xl py-3 font-semibold hover:bg-[#6a9292] transition flex justify-center items-center"
              >
                {isLoading ? <Spinner size={20} color="#fff" /> : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
