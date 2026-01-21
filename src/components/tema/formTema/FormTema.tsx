import { useContext, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlerta";

const baseUrl = "https://blogpessoal-sml6.onrender.com";

function FormTema() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [descricao, setDescricao] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (descricao.trim() === "") {
      ToastAlerta("Preencha a descrição do tema", "info");
      return;
    }

    const tema = {
      descricao: descricao,
    };

    try {
      const response = await fetch(`${baseUrl}/temas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(tema),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar tema");
      }

      ToastAlerta("Tema cadastrado com sucesso!", "sucesso");
      navigate("/temas");
    } catch (error) {
      handleLogout();
    }
  }

  return (
    <div className="bg-[#7aa3a3] min-h-screen flex items-center justify-center px-6">
      <div className="bg-[#f3f5f2] w-full max-w-3xl rounded-3xl shadow-xl p-14">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Cadastrar Tema
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold text-gray-700">
              Descrição do Tema
            </label>

            <input
              type="text"
              placeholder="Descreva aqui o Título do seu Tema"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl p-4 text-lg
                         focus:outline-none focus:border-[#7aa3a3]"
            />
          </div>

          <div className="flex gap-6 justify-center">
            <button
              type="submit"
              className="bg-[#e75480] text-white px-16 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
            >
              Cadastrar
            </button>

            <button
              type="button"
              onClick={() => navigate("/temas")}
              className="bg-gray-400 text-white px-16 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormTema;
