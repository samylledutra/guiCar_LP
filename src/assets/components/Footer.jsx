import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import logo from "../images/logoGuiCar.png";

export default function Footer() {
  const endereco = "R. Roma, 703 - Tibery, Uberlândia - MG, 38405-076";
  const whatsapp = "5534996532062";

  return (
    <footer className="bg-[#040404] text-white py-16 relative overflow-hidden md:bg-[#05080f] transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">


        <div className="group flex flex-col items-center md:items-start">
          <a href="#hero">
            <img
              src={logo}
              alt="Guicar Recuperadora"
              className="w-28 sm:w-32 md:w-36 h-auto mb-4 transition-transform duration-300 hover:scale-105"
            />
          </a>
          <p className="text-white text-sm text-justify md:text-left transition duration-300 group-hover:text-white">
            Transformamos veículos com excelência em funilaria, pintura e polimento. Cada carro recebe atenção detalhada e profissionalismo.
          </p>
        </div>


        <div>
          <h4 className="text-2xl font-bold mb-4 text-yellow-400">Contato</h4>
          <ul className="space-y-4 text-white text-sm">
            <li className="flex items-start gap-2 cursor-pointer hover:text-yellow-400 transition">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <span>{endereco}</span>
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FaPhoneAlt className="text-yellow-400" />
              <span>(34) 99653-2062</span>
            </li>
            <li className="flex items-center gap-2 hover:text-yellow-400 transition">
              <FaClock className="text-yellow-400" />
              <span>Seg-Sex: 08:00 - 18:00</span>
            </li>
            <li>
              <a
                href={`https://wa.me/${whatsapp}?text=Olá! Gostaria de solicitar um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full shadow-lg transform transition hover:scale-110"
              >
                Fale no WhatsApp
              </a>
            </li>
          </ul>
        </div>


        <div className="flex flex-col items-center md:items-start gap-4">
          <h4 className="text-2xl font-bold mb-4 text-yellow-400">Redes Sociais</h4>
          <div className="flex items-center gap-4 mb-6">
            <a data-tooltip-id="fbTip" href="https://www.facebook.com" target="_blank" className="transform transition hover:scale-125 hover:text-yellow-400">
              <FaFacebookF size={24} />
            </a>
            <Tooltip id="fbTip" place="top" content="Facebook" />

            <a data-tooltip-id="igTip" href="https://www.instagram.com/guicar.udi/" target="_blank" className="transform transition hover:scale-125 hover:text-yellow-400">
              <FaInstagram size={24} />
            </a>
            <Tooltip id="igTip" place="top" content="Instagram" />

            <a data-tooltip-id="waTip" href={`https://wa.me/${whatsapp}`} target="_blank" className="transform transition hover:scale-125 hover:text-yellow-400">
              <FaWhatsapp size={24} />
            </a>
            <Tooltip id="waTip" place="top" content="WhatsApp" />
          </div>


          <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden shadow-xl border-2 border-yellow-400 transition-all duration-500 hover:border-yellow-400">
            <iframe
              title="Mini Mapa GUICAR"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.651881460438!2d-48.251682699999996!3d-18.9025187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4459061bc844d%3A0xca9ce5efa69cc1c4!2sGuiCar%20funilaria%20e%20pintura!5e0!3m2!1spt-BR!2sbr!4v1759979155891!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} GUICAR Recuperadora. Todos os direitos reservados.
      </div>


    </footer>
  );
}