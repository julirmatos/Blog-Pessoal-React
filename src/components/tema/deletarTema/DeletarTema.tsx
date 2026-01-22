import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Tema from "../../../models/Tema"
import { buscar, deletar } from "../../../services/Services"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarTema() {

    const navigate = useNavigate()

    const [tema, setTema] = useState<Tema>({} as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTema() {
        setIsLoading(true)

        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta('Tema deletado com sucesso', 'sucesso')

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlerta('Erro ao deletar o tema.', 'erro')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/temas")
    }
    
    return (
  <div className="min-h-screen w-full flex items-center justify-center px-6">
    
    <div className="grid grid-cols-1 place-items-center w-full">

      {/* CARD DE DELETAR */}
      <div className="w-full max-w-xl">

        <h1 className="text-4xl text-center mb-4">
          Deletar tema
        </h1>

        <p className="text-center font-semibold mb-6">
          Tem certeza de que deseja apagar este tema?
        </p>

        <div className="border rounded-3xl overflow-hidden shadow-lg bg-[#f6f7f3]">
          
          {/* Header */}
          <header className="py-4 px-8 bg-[#7aa3a3] text-white font-bold text-2xl text-center">
            Tema
          </header>

          {/* Conteúdo */}
          <div className="py-12 text-center text-3xl flex justify-center items-center gap-3">
            {tema.descricao}
          </div>

          {/* Botões */}
          <div className="flex justify-center gap-6 pb-8">
            
            {/* NÃO */}
            <button
              className="
                w-44 py-3
                rounded-full
                bg-[#d9dde3]
                text-slate-700
                font-medium
                hover:bg-[#cfd4db]
                transition
              "
              onClick={retornar}
            >
              Não
            </button>

            {/* DELETAR */}
            <button
              className="
                w-44 py-3
                rounded-full
                bg-[#e75480]
                text-white
                font-medium
                hover:bg-pink-600
                transition
                flex items-center justify-center
              "
              onClick={deletarTema}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              ) : (
                "Sim"
              )}
            </button>

          </div>
        </div>
      </div>

    </div>
  </div>
)
}

export default DeletarTema
