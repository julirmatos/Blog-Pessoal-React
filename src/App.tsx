import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Cadastro from "./pages/cadastro/cadastro";
import Login from "./pages/login/login";

function App() {
  return (

    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 overflow-hidden pt-10">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
