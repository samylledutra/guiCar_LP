import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const depoimentos = [
  { nome: "Vinicius Nunes.", nota: 5, comentario: "Excelente trabalho! Indico sempre." },
  { nome: "Rose Leiliane.", nota: 5, comentario: "GuiCar Funilaria e Pintura de excelência qualidade, rápido, ágil e eficaz. Recomendo a todos." },
  { nome: "Valeria Cristina.", nota: 5, comentario: "Gostei muito do serviço. Agilidade, bom atendimento e bom preço." },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#FFDA1F]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12 text-black">A opinião de quem já passou por aqui</h3>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="[&_.swiper-button-next]:!text-yellow-500 [&_.swiper-button-prev]:!text-yellow-500
             [&_.swiper-button-next]:!scale-75 [&_.swiper-button-prev]:!scale-75
             [&_.swiper-button-next:hover]:!text-yellow-400 [&_.swiper-button-prev:hover]:!text-yellow-400"


        >
          {depoimentos.map((d, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 border-l-4 border-[#ff5c00] rounded-2xl shadow-lg h-full flex flex-col justify-between min-h-[250px]">
                <div className="mb-4 flex-grow">
                  <div className="flex justify-center mb-4">
                    {"⭐".repeat(d.nota)}
                  </div>
                  <p className="text-gray-800 text-lg sm:text-lg">{d.comentario}</p>
                </div>
                <p className="mt-4 font-semibold text-gray-900">- {d.nome}</p>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}
