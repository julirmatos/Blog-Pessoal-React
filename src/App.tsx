import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

import DeletarPostagem from "./components/postagem/deletarPostagem/DeletarPostagem";
import FormPostagem from "./components/postagem/formPostagem/FormPostagem";
import ListaPostagens from "./components/postagem/listaPostagem/ListaPostagem";


import DeletarTema from "./components/tema/deletarTema/DeletarTema";
import FormTema from "./components/tema/formTema/FormTema";
import ListaTemas from "./components/tema/listatemas/ListaTemas";

import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Perfil from "./pages/perfil/Perfil";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />

      <Navbar />

      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />

          <Route path="/temas" element={<ListaTemas />} />
          <Route path="/cadastrar-tema" element={<FormTema />} />
          <Route path="/editartema/:id" element={<FormTema />} />
          <Route path="/deletartema/:id" element={<DeletarTema />} />

          <Route path="/postagens" element={<ListaPostagens />} />
          <Route path="/cadastrarpostagem" element={<FormPostagem />} />
          <Route path="/editarpostagem/:id" element={<FormPostagem />} />
          <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />

          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
