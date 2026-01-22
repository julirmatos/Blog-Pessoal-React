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
           {tema.descricao} 📌</h2>
      </header>

      <div className="flex gap-4">
        <Link
          to={`/editarTema/${tema.id}`}
          className="w-full flex items-center justify-center py-2 rounded-xl
                     bg-[#e75480] text-white font-semibold
                     hover:bg-pink-600 transition"
        >
          Editar
        </Link>

        <Link
          to={`/deletarTema/${tema.id}`}
          className="w-full flex items-center justify-center py-2 rounded-xl
                     bg-gray-300 text-gray-800 font-semibold
                     hover:bg-gray-400 transition"
        >
          Deletar
        </Link>
      </div>

    </div>
  );
}

export default CardTema;
