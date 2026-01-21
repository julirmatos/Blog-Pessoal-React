import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Perfil() {
  const navigate = useNavigate()
  const { usuario } = useContext(AuthContext)

  useEffect(() => {
    if (usuario.token === "") {
      ToastAlerta("Você precisa estar logado", "info")
      navigate("/")
    }
  }, [usuario.token])

  return (
    <div className="flex justify-center mx-4 bg-[#6f9a9a] md:py-15">
      <div className="container mx-auto my-6 rounded-3xl overflow-hidden shadow-xl bg-white md:py-10">

         <div
          className="w-full h-64 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop)",
          }}
        />

        {/*  Foto do usuário */}
        <img
          className="
            rounded-full w-48 h-48 mx-auto
            -mt-24 border-8 border-[#f3f5f2]
            relative z-10 shadow-lg
            object-cover bg-white
          "
          src="https://i.pinimg.com/736x/a9/32/10/a9321007f98439ea09f94ce9f0709e75.jpg"
          alt={`Foto de perfil de ${usuario.nome}`}
        />

        {/* 🔹 Informações do perfil */}
        <div
          className="
            mt-6 pb-10 flex flex-col gap-3
            items-center justify-center
            text-center
          "
        >
          <h2 className="text-3xl font-bold text-[#6b9080]">
  {usuario.nome}
</h2>

<p className="text-bold text-gray-500 text-lg">
  {usuario.usuario} 🌿
</p>
         
        </div>

      </div>
    </div>
  )
}

export default Perfil