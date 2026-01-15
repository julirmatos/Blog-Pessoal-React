function Home() {
  return (
    <div className="bg-[#6f9a9a] flex justify-center h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl items-center">

        {/* CARD DE TEXTO */}
        <div className="flex items-center justify-center p-6">
          <div
            className="
              bg-[#f2f1ed]/90
              backdrop-blur
              rounded-3xl
              shadow-2xl
              p-12
              max-w-xl
              text-center
            "
          >
            <h2
              className="
                text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
                text-[#2b2b2b]
              "
            >
              👋 Bem-vindos(as) ao Blog da Ju!
            </h2>

            <p
              className="
                text-lg
                md:text-xl
                text-[#4f7f7a]
                mt-6
                leading-relaxed
              "
            >
              Expresse aqui seus pensamentos, ideias e opiniões de forma leve,
              moderna e inspiradora 💭
            </p>

            <button
              className="
                mt-10
                px-10
                py-4
                text-lg
                font-semibold
                rounded-xl
                border
                border-[#6f9a9a]
                bg-[#6f9a9a]
                text-white
                hover:bg-white
                hover:text-[#3f6f7a]
                hover:border-[#3f6f7a]
                transition-all
                duration-300
              "
            >
              Nova Postagem
            </button>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="bg-[#6f9a9a] flex justify-center h-full">

          <img
            src="https://plus.unsplash.com/premium_vector-1714406096462-037325ee4f4b?q=80&w=715&auto=format&fit=crop"
            alt="Ilustração de pessoa usando notebook"
            className="
              w-auto
  h-full
  max-h-full
  max-w-lg
  rounded-xl
  bg-[#f2f1ed]
  p-4
  shadow-xl
  object-contain
            "
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
