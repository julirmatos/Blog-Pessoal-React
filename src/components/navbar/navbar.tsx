function Navbar() {
  return (
    <header className="w-full bg-gray-300 text-gray-800">
      <div className="container mx-auto flex justify-between py-4 px-8 text-lg">
        <span className="font-bold">
          👩‍💻 Blog Pessoal
        </span>

        <nav className="flex gap-4">
          <span className="cursor-pointer hover:text-gray-600">Postagens</span>
          <span className="cursor-pointer hover:text-gray-600">Temas</span>
          <span className="cursor-pointer hover:text-gray-600">Cadastrar tema</span>
          <span className="cursor-pointer hover:text-gray-600">Perfil</span>
          <span className="cursor-pointer hover:text-gray-600">Sair</span>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
