import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;




