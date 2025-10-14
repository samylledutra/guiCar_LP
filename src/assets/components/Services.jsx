import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";


import carPaint from "../images/carPaint.png";
import hammer from "../images/hammer.png";
import carPolish from "../images/carPolish.png";
import bumper from "../images/bumper.png";
import sprayGun from "../images/sprayGun.png";
import paint from "../images/paint.png";


const servicos = [
  { nome: "Funilaria", icon: <img src={carPolish} alt="Pintura automotiva" className="w-10 h-10 object-contain" />, desc: "Reparos completos em lataria com acabamento impecável." },
  { nome: "Pintura Automotiva", icon: <img src={sprayGun} alt="Pintura automotiva" className="w-10 h-10 object-contain" />, desc: "Aplicação de pintura uniforme e cores personalizadas." },
  { nome: "Polimento e Vitrificação", icon: <img src={carPaint} alt="Pintura automotiva" className="w-10 h-10 object-contain" />, desc: "Restauração do brilho e proteção da pintura." },
  { nome: "Martelinho de Ouro", icon: <img src={hammer} alt="Pintura automotiva" className="w-10 h-10 object-contain" />, desc: "Remoção de amassados sem danificar a pintura." },
  { nome: "Personalização em Cores", icon: <img src={paint} alt="Pintura automotiva" className="w-10 h-10 object-contain" />, desc: "Cores exclusivas e efeitos especiais para seu carro." },
  { nome: "Reforço de Para-choque", icon: <img src={bumper} alt="Pintura automotiva" className="w-10 h-10 object-contain" />, desc: "Recuperação e proteção de para-choques danificados." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }),
};

export default function Services() {
  return (
    <section id="servicos" className="py-16 bg-[#FFDA1F]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-black">
         Soluções Completas em Funilaria e Pintura
        </h3>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            className="pb-10"
          >
            {servicos.map((serv, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="bg-white border-l-4 border-[#ff5c00] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center text-center h-[220px] sm:h-[200px]"
                >
                  <div className="mb-6">{serv.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-black">{serv.nome}</h4>
                  <p className="text-gray-600 text-sm">{serv.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botões */}
          <button
            className="custom-prev absolute top-1/2 left-0 sm:-left-6 transform -translate-y-1/2 
             text-[#ff5c00] text-2xl sm:text-3xl z-10 px-2 sm:px-0 hidden xs:block"
          >
            ‹
          </button>

          <button
            className="custom-next absolute top-1/2 right-0 sm:-right-6 transform -translate-y-1/2 
             text-[#ff5c00] text-2xl sm:text-3xl z-10 px-2 sm:px-0 hidden xs:block"
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
}
