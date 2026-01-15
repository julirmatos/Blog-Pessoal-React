import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
