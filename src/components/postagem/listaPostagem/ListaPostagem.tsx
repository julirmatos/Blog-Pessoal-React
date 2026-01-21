import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import type Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/Services";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardPostagem from "../cardPostagem/CardPostagem";

function ListaPostagens() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  // 🔐 Verificação de login
  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  // 📌 Busca inicial das postagens (UMA ÚNICA VEZ)
  useEffect(() => {
    buscarPostagens();
  }, []);

  async function buscarPostagens() {
    try {
      setIsLoading(true);

      await buscar("/postagens", setPostagens, {
        headers: { Authorization: token },
      });

    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao buscar postagens", "error");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <span className="text-indigo-700 text-xl">Carregando...</span>
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">

          {!isLoading && postagens.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma postagem foi encontrada!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postagens.map((postagem) => (
              <CardPostagem key={postagem.id} postagem={postagem} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

export default ListaPostagens;
