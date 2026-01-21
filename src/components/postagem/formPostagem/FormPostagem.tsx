import { useContext, useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import type Postagem from "../../../models/Postagem";
import { ToastAlerta } from "../../../utils/ToastAlerta";

const baseUrl = "https://blogpessoal-sml6.onrender.com";

// =======================
// Services (Refatorados para gerenciar o Token)
// =======================
async function buscar(path: string, setState: Function, token: string) {
  const resp = await fetch(baseUrl + path, {
    method: "GET",
    headers: {
      Authorization: token.startsWith("Bearer") ? token : `Bearer ${token}`,
    },
  });
  if (!resp.ok) throw new Error(`${resp.status}`);
  const data = await resp.json();
  setState(data);
}

async function cadastrar(path: string, body: any, token: string) {
  const resp = await fetch(baseUrl + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token.startsWith("Bearer") ? token : `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) throw new Error(`${resp.status}`);
}

async function atualizar(path: string, body: any, token: string) {
  const resp = await fetch(baseUrl + path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token.startsWith("Bearer") ? token : `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) throw new Error(`${resp.status}`);
}

// =======================
// Component
// =======================

function FormPostagem() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [temas, setTemas] = useState<Tema[]>([]);
  const [tema, setTema] = useState<Tema>({ id: 0, descricao: "" });
  const [isLoading, setIsLoading] = useState(false);

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
    usuario: usuario,
  });

  // =======================
  // Effects
  // =======================

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
    if (id) buscarPostagemPorId(id);
  }, [id]);

  useEffect(() => {
    if (postagem.tema) {
      setTema(postagem.tema);
    }
  }, [postagem]);

  // =======================
  // Requests
  // =======================

  async function buscarPostagemPorId(id: string) {
    try {
      await buscar(`/postagens/${id}`, setPostagem, token);
    } catch {
      handleLogout();
    }
  }

  async function buscarTemas() {
    try {
      await buscar("/temas", setTemas, token);
    } catch {
      handleLogout();
    }
  }

  // =======================
  // Handlers
  // =======================

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/home");
  }

  async function gerarNovaPostagem(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (tema.id === 0) {
      ToastAlerta("Selecione um tema", "info");
      return;
    }

    setIsLoading(true);

    const postagemParaEnviar = {
      ...(id && { id: Number(id) }), 
      titulo: postagem.titulo,
      texto: postagem.texto,
      tema: {
        id: tema.id,
      },
      usuario: {
        id: usuario.id,
      },
    };

    try {
      if (id) {
        await atualizar("/postagens", postagemParaEnviar, token);
        ToastAlerta("Postagem atualizada com sucesso", "sucesso");
      } else {
        await cadastrar("/postagens", postagemParaEnviar, token);
        ToastAlerta("Postagem cadastrada com sucesso", "sucesso");
      }

      retornar();
    } catch (error) {
      ToastAlerta("Erro ao salvar a postagem", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  // =======================
  // Render
  // =======================

  return (
    <div className="min-h-screen bg-[#7aa3a3] pt-28 px-6 flex justify-center">
      <div className="w-full max-w-3xl bg-[#f3f5f2] rounded-3xl shadow-xl p-12">
        <button
          type="button"
          onClick={retornar}
          className="mb-6 text-sm font-semibold text-[#7aa3a3] hover:underline"
        >
          ← Voltar
        </button>

        <h1 className="mb-10 text-center text-4xl font-extrabold text-gray-800">
          {id ? "Editar Postagem" : "Cadastrar Postagem"}
        </h1>

        <form onSubmit={gerarNovaPostagem} className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-lg font-semibold">Título</label>
            <input
              type="text"
              name="titulo"
              value={postagem.titulo}
              onChange={atualizarEstado}
              required
              className="rounded-xl border border-gray-300 p-4 text-lg"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-lg font-semibold">Texto</label>
            <textarea
              name="texto"
              value={postagem.texto}
              onChange={atualizarEstado}
              rows={6}
              required
              className="rounded-xl border border-gray-300 p-4 text-lg resize-none"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-lg font-semibold">Tema</label>
            <select
              value={tema.id || ""}
              onChange={(e) =>
                setTema({ id: Number(e.target.value), descricao: "" })
              }
              required
              className="rounded-xl border border-gray-300 p-4 text-lg"
            >
              <option value="" disabled>
                Selecione um Tema
              </option>
              {temas.map((tema) => (
                <option key={tema.id} value={tema.id}>
                  {tema.descricao}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="
              mx-auto
              bg-[#e75480]
              hover:bg-[#d94370]
              px-20
              py-4
              rounded-xl
              font-bold
              text-white
              text-lg
              transition
              disabled:bg-gray-300
            "
          >
            {isLoading ? "Salvando..." : id ? "Atualizar" : "Cadastrar"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPostagem;