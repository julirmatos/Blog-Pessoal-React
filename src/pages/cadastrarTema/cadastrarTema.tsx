import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastrarTema() {

  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // ❌ Validação: campo vazio
    if (descricao.trim() === "") {
      alert("Erro ao cadastrar o tema.");
      return;
    }

    try {
      // 🔗 Aqui futuramente entra a API
      console.log("Tema cadastrado:", descricao);

      // ✅ Mensagem de sucesso (igual à imagem)
      alert("O Tema foi cadastrado com sucesso!");

      // 🔄 Redireciona para a lista de temas
      navigate("/temas");

      setDescricao("");
    } catch (error) {
      // ❌ Mensagem de erro
      alert("Erro ao cadastrar o tema.");
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
              placeholder="Descreva aqui seu tema"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-xl p-4 text-lg
                         focus:outline-none focus:border-[#7aa3a3]"
            />
          </div>

          <button
            type="submit"
            className="self-center bg-[#e75480] text-white 
                       px-16 py-4 rounded-xl text-lg font-semibold
                       hover:opacity-90 transition"
          >
            Cadastrar
          </button>

        </form>

      </div>
    </div>
  );
}

export default CadastrarTema;
