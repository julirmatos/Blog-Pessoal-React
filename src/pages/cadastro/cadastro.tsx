function Cadastro() {
  return (
    <div className="bg-[#7aa3a3] min-h-screen flex items-center justify-center px-6">
      
      {/* CONTAINER CENTRAL */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl min-h-[585px] py-10 gap-20 py-10">

        {/* IMAGEM */}
        <div className="hidden md:block h-full rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1170&auto=format&fit=crop"
            alt="Imagem ilustrativa"
            className="w-full h-full object-cover"
          />
        </div>

        {/* CARD */}
        <div className="h-full bg-[#f3f5f2] rounded-3xl shadow-xl p-10 flex flex-col justify-center">
          
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
            ✨ Cadastrar
          </h1>

          <p className="text-center text-gray-600 text-base mb-8">
            👩‍💻 Preencha os dados para fazer parte do Blog da Ju 🌺
          </p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-semibold text-gray-700">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Usuário</label>
              <input
                type="text"
                placeholder="Nome de usuário"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Foto (URL)</label>
              <input
                type="text"
                placeholder="Foto Perfil"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Confirmar Senha</label>
              <input
                type="password"
                placeholder="Confirme sua senha"
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#7aa3a3]"
              />
            </div>

            <div className="flex gap-6 mt-6">
              <button
                type="reset"
                className="w-full bg-[#e75480] text-white rounded-xl py-3 font-semibold hover:bg-[#d14770] transition"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="w-full bg-[#7aa3a3] text-white rounded-xl py-3 font-semibold hover:bg-[#6a9292] transition"
              >
                Cadastrar
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Cadastro
