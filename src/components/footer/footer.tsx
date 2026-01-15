import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

  let data = new Date().getFullYear()

  return (
    <footer className="flex justify-center bg-gray-300 text-gray-800">
      <div className="container flex flex-col items-center py-4">
        <p className="text-xl font-bold">
          👩‍💻 Blog Pessoal Juliana Matos - Generation Br @ {data}
        </p>

        <p className="text-lg">Conecte-se 💙</p>

        <div className="flex gap-2">
          <LinkedinLogoIcon size={48} weight="bold" />
          <InstagramLogoIcon size={48} weight="bold" />
          <FacebookLogoIcon size={48} weight="bold" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
