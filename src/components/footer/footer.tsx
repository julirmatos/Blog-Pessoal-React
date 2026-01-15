import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

  let data = new Date().getFullYear()

  return (
    <footer className="flex justify-center bg-gray-300 text-gray-800">
      <div className="container flex flex-col items-center py-2 gap-1">
        
        <p className="text-sm font-medium">
          👩‍💻 Blog Pessoal Juliana Matos - Generation Br © {data}
        </p>

        <div className="flex items-center gap-3">
          <span className="text-xs">Conecte-se</span>
          <LinkedinLogoIcon size={20} weight="bold" />
          <InstagramLogoIcon size={20} weight="bold" />
          <FacebookLogoIcon size={20} weight="bold" />
        </div>

      </div>
    </footer>
  )
}

export default Footer
