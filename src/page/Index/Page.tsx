import { Link } from "react-router-dom";
import { IconAlertTriangleFilled } from "@tabler/icons-react";


export default function Page() {
  return (
    <section className="bg-[url(/bg.jpg)] w-full min-h-screen bg-cover flex flex-col items-center pt-24">
      <h1 className="text-4xl max-w-[600px] text-center mb-12 font-bold text-[#cdd6f4]">
        Generador de temas para <span className="text-[#468bf7]">NvChad</span> del Editor Neovim.
      </h1>
      <div className="max-w-[550px] flex flex-col gap-6">
        <div className="bg-[#313244] p-5 rounded-xl">
          <p>
            <IconAlertTriangleFilled size={"16px"} className="text-[#f9e2af] inline-block mr-2" />Hay algunas cosas que aun no estan pulidas, asi que ten cuidado, el
            tema podria no funcionar al 100%, puede hacer una <a href="https://github.com/AlexNarvaez00/nvchad-theme-creator" target="_blank" className="underline">pull request</a>.
          </p>
        </div>
        <Link to={`/create`} className="py-3 px-4 font-bold mx-auto rounded-xl text-center text-white bg-[#11111b] border-2 border-white" >Ir a la applicación 🚀</Link>
      </div>
    </section>
  );
}
