import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}
const FOTO_PADRAO =
  "https://i.pinimg.com/736x/a9/32/10/a9321007f98439ea09f94ce9f0709e75.jpg";

function CardPostagem({ postagem }: CardPostagensProps) {
  return (
    <div
      className="
        w-full
        max-w-md
        mx-auto
        flex
        flex-col
        justify-between
        bg-white
        rounded-2xl
        shadow-md
        hover:shadow-lg
        transition
        overflow-hidden
        border
        border-gray-200
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 px-6 py-4 bg-[#f2f1ed]">
        <img
          src={postagem.usuario?.foto || FOTO_PADRAO}
          className="h-12 w-12 rounded-full object-cover border border-gray-300"
          alt={`Foto de ${postagem.usuario?.nome}`}
        />

        <h3 className="text-lg font-semibold text-[#2b2b2b] truncate">
          {postagem.usuario?.nome}
        </h3>
      </div>

      {/* CONTEÚDO */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h4 className="text-2xl font-bold text-[#2b2b2b]">
          {postagem.titulo}
        </h4>

        <p className="text-gray-600 leading-relaxed">
          {postagem.texto}
        </p>

        <div className="text-sm text-gray-500 space-y-1 pt-2">
          <p>
            <span className="font-semibold">Tema:</span>{" "}
            {postagem.tema?.descricao}
          </p>

          <p>
            <span className="font-semibold">Data:</span>{" "}
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(postagem.data))}
          </p>
        </div>
      </div>

      {/* AÇÕES */}
      <div className="flex border-t border-gray-200">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="
            flex-1
            text-center
            py-3
            font-semibold
            text-white
            bg-[#6f9a9a]
            hover:bg-[#5f8a8a]
            transition
          "
        >
          Editar
        </Link>

        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="
            flex-1
            text-center
            py-3
            font-semibold
            text-white
            bg-[#e75480]
            hover:bg-[#d64a73]
            transition
          "
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
