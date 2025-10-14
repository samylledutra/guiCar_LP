import { FaTools } from "react-icons/fa";
import { GiLargePaintBrush } from "react-icons/gi";
import { RiSparkling2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import contactBg from "../images/carPolishing.jpg";

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-center text-white z-10">
        
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-400">
            Solicite seu Orçamento
          </h3>
          <p className="text-gray-100 mb-6 text-justify">
            Preencha o formulário abaixo e nossa equipe entrará em contato rapidamente para oferecer o melhor serviço para seu veículo.
          </p>
          <ul className="space-y-3 text-justify">
            <li className="flex items-center gap-3">
              <div className="bg-yellow-400 rounded-full w-8 h-8 flex justify-center items-center transition-transform duration-300 hover:rotate-12">
                <FaTools className="text-white w-4 h-4" />
              </div>
              Atendimento rápido e personalizado
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-blue-400 rounded-full w-8 h-8 flex justify-center items-center transition-transform duration-300 hover:rotate-12">
                <GiLargePaintBrush className="text-white w-4 h-4" />
              </div>
              Orçamento transparente
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-green-400 rounded-full w-8 h-8 flex justify-center items-center transition-transform duration-300 hover:rotate-12">
                <RiSparkling2Fill className="text-white w-4 h-4" />
              </div>
              Garantia de qualidade nos serviços
            </li>
          </ul>
        </div>

        
        <motion.div
          className="w-full md:w-1/2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-lg transition-shadow duration-500"
          animate={{
            backdropFilter: ["blur(20px)", "blur(30px)", "blur(20px)"],
            backgroundColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0.1)"]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        >
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="Telefone (opcional)"
              className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Descreva seu serviço ou dúvida..."
              className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              Enviar Solicitação
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
