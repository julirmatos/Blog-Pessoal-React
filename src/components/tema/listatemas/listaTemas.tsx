import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import type Tema from "../../../models/Tema";
import { buscar } from "../../../services/Services";
import CardTema from "../cardtema/cardTema";

function ListaTemas() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temas, setTemas] = useState<Tema[]>([]);
  const [verificandoAuth, setVerificandoAuth] = useState(true);

  const { usuario, handleLogout } = useContext(AuthContext);

  const token = usuario?.token ?? "";

  useEffect(() => {
    if (!verificandoAuth && token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token, verificandoAuth, navigate]);

  useEffect(() => {
    setVerificandoAuth(false);
  }, []);

  useEffect(() => {
    if (token !== "") {
      buscarTemas();
    }
  }, [token]);

  async function buscarTemas() {
    try {
      setIsLoading(true);

      await buscar("/temas", setTemas, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center w-full pt-24 pb-10">
      <div className="container flex flex-col items-center px-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
          ✨ Temas Cadastrados
        </h1>

        <p className="text-center text-gray-600 text-base mb-12">
          Temas disponíveis no Blog da Ju 🌺
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {isLoading && (
            <p className="col-span-full text-center text-gray-600">
              Carregando temas...
            </p>
          )}

          {!isLoading && temas.length === 0 && (
            <span className="col-span-full text-3xl text-center my-8 text-gray-600">
              Nenhum Tema foi encontrado!
            </span>
          )}

          {!isLoading &&
            temas.map((tema) => <CardTema key={tema.id} tema={tema} />)}
        </div>
      </div>
    </div>
  );
}

export default ListaTemas;
