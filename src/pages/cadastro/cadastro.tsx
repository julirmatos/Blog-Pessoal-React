function Cadastro() {
  return (
    <div className="min-h-screen bg-[#7aa3a3] flex items-center justify-center px-4">
      <div className="bg-[#f3f5f2] w-full max-w-2xl rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-3">
          ✨ Cadastrar
        </h1>

        <p className="text-center text-gray-600 text-base mb-8">
          👩‍💻 Preencha os dados para fazer parte do Blog da Ju 💙
        </p>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-sm font-semibold text-gray-700">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="usuario" className="text-sm font-semibold text-gray-700">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Nome de usuário"
              className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="foto" className="text-sm font-semibold text-gray-700">
              Foto (URL)
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto Perfil"
              className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="senha" className="text-sm font-semibold text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded-xl p-3 text-base focus:outline-none focus:ring-2 focus:ring-[#7aa3a3]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="confirmarSenha" className="text-sm font-semibold text-gray-700">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
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
  )
}

export default Cadastro
