import { FaWhatsapp } from "react-icons/fa";
import logo from "../images/logoGuiCar.png";

export default function Header() {
  return (
    <header className="bg-gray-900/90 backdrop-blur-md text-white py-1.5 top-0 z-50 shadow-lg transition-all duration-300">
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        {/* LOGO */}
        <a
          href="#hero"
          className="flex justify-center md:justify-start items-center w-full md:w-auto"
        >
          <img
            src={logo}
            alt="Guicar Recuperadora"
            className="w-16 sm:w-20 md:w-24 h-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        {/* NAVEGAÇÃO */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#servicos" className="hover:text-yellow-400 transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-yellow-400 transition-colors">
            Sobre
          </a>
          <a href="#contato" className="hover:text-yellow-400 transition-colors">
            Contato
          </a>
        </nav>

        {/* BOTÃO WHATSAPP */}
        <a
          href="https://wa.me/55SEUNUMERO?text=Olá! Gostaria de um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full shadow-md transition-all"
        >
          <FaWhatsapp size={18} />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
