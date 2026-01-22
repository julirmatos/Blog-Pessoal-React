import { Link } from "react-router-dom";
import type Tema from "../../../models/Tema";

interface CardTemaProps {
  tema: Tema;
}

function CardTema({ tema }: CardTemaProps) {
  return (
    <div className="h-full bg-[#f3f5f2] rounded-3xl shadow-xl p-8 flex flex-col justify-between">
      <header>
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
          {tema.descricao} 📌
        </h2>
      </header>

      <div className="flex justify-center">
        <Link
          to={`/deletarTema/${tema.id}`}
          className="flex items-center justify-center
             px-3 py-1 rounded-lg
             bg-[#e75480] text-white text-sm font-semibold
             hover:bg-pink-600 transition"
        >
          Excluir Tema
        </Link>
      </div>
    </div>
  );
}

export default CardTema;
