import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type Postagem from "../../models/Postagem";
import { buscar } from "../../services/Services";

function Home() {
  const navigate = useNavigate();


  const { usuario } = useContext(AuthContext);

  const [postagens, setPostagens] = useState<Postagem[]>([]);

  async function buscarPostagens() {
    await buscar(
      "/postagens",
      setPostagens,
      {
        headers: {
          Authorization: usuario.token,
        },
      }
    );
  }

  useEffect(() => {
    if (usuario.token !== "") {
      buscarPostagens();
    }
  }, [usuario.token]);

  return (
    <div className="bg-[#6f9a9a] min-h-screen flex flex-col">

        <section className="flex justify-center py-5 md:py-30"> 
        <div className="container mx-auto overflow-hidden px-6">

          <div className="relative w-full h-[520px] rounded-3xl overflow-hidden bg-[#6f9a9a] flex items-center">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop')",
              }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-2 h-full items-center">
              <div className="hidden md:block" />

              <div className="flex justify-center md:justify-end p-6">
                <div className="bg-[#f2f1ed]/90 backdrop-blur rounded-3xl shadow-2xl p-10 max-w-xl text-center">
                  
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#4f7f7a]">
  👋 Bem-vinda(o),{" "}
  <span className="text-[#4f7f7a]">
    {usuario.nome}
  </span>
  !
</h2>

                  <p className="text-lg md:text-xl text-[#4f7f7a] mt-6 leading-relaxed">
                    Expresse aqui seus pensamentos, ideias e opiniões de forma leve,
                    moderna e inspiradora 💭
                  </p>

                  <button
  onClick={() => navigate("/cadastrarpostagem")}
  className="
    mt-10
    px-10
    py-4
    text-lg
    font-semibold
    rounded-xl
    bg-[#e64980]
    text-white
    hover:bg-[#d63b72]
    transition-all
    duration-300
    shadow-lg
    hover:shadow-xl
  "
>
  ✍️ Nova Postagem
</button>


                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

        <section className="bg-[#f2f1ed] flex justify-center py-16">
        <div className="w-full max-w-7xl px-6">

          <h3 className="text-3xl font-bold text-[#2b2b2b] mb-8 text-center">
            Últimas Postagens
          </h3>

          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[120px]">

            {postagens.length === 0 ? (
              <div className="flex items-center justify-center">
                <span className="text-gray-400 text-lg">
                  Nenhuma postagem ainda ✍️
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {postagens.map((postagem) => (
                  <div
                    key={postagem.id}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
                  >
                    <h4 className="text-2xl font-bold text-[#2b2b2b]">
                      {postagem.titulo}
                    </h4>

                    <p className="text-gray-600 mt-3">
                      {postagem.texto}
                    </p>

                    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                      <span>Tema: {postagem.tema?.descricao}</span>
                      <span>Autor: {postagem.usuario?.nome}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
