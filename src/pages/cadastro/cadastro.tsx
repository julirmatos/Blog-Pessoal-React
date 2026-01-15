function Cadastro() {
  return (
    <div className="min-h-screen bg-[#7aa3a3] pt-20 pb-20">
      <div className="flex min-h-[calc(100vh-160px)]">

        <div className="hidden md:block w-1/2 pl-45 ">
          <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Imagem de fundo"
              className="w-full h-full object-cover"
            />
        </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center px-4">
          <div className="bg-[#f3f5f2] w-full max-w-2xl rounded-3xl shadow-xl p-10">

            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
              ✨ Cadastrar
            </h1>

            <p className="text-center text-gray-600 text-base mb-8">
              👩‍💻 Preencha os dados para fazer parte do Blog da Ju 💙
            </p>

            <form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Usuário
                </label>
                <input
                  type="text"
                  placeholder="Nome de usuário"
                  className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Foto (URL)
                </label>
                <input
                  type="text"
                  placeholder="Foto Perfil"
                  className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Senha
                </label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
                />
              </div>

              <div className="flex justify-between gap-6 mt-6">
                <button
                  type="reset"
                  className="w-full bg-red-400 text-white rounded-xl py-3 font-semibold hover:bg-red-500 transition"
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
    </div>
  )
}

export default Cadastro
