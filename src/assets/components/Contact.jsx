import { FaTools } from "react-icons/fa";
import { GiLargePaintBrush } from "react-icons/gi";
import { RiSparkling2Fill } from "react-icons/ri";

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
       
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500">
            Solicite seu Orçamento
          </h3>
          <p className="text-gray-700 mb-6 text-justify">
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

        {/* Formulário */}
        <div className="md:w-1/2 bg-white p-8 rounded-3xl shadow-[0_1px_5px_rgba(153,113,0,1)]  transition-shadow duration-500">
          <form className="grid gap-4">
            <input type="text" placeholder="Seu nome" className="p-3 rounded border border-[#d187005c] focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input type="email" placeholder="Seu e-mail" className="p-3 rounded border border-[#d187005c] focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <input type="tel" placeholder="Telefone (opcional)" className="p-3 rounded border border-[#d187005c] focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <textarea placeholder="Descreva seu serviço ou dúvida..." className="p-3 rounded border border-[#d187005c] focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none" />
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-xl">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </section>

  );
}
