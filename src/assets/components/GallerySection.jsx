import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaSearchPlus } from "react-icons/fa";


import car1 from "../images/car1.jpg";
import car2 from "../images/car2.jpg";
import car3 from "../images/car3.jpg";
import car4 from "../images/car4.jpg";
import car5 from "../images/car5.jpg";

const projects = [
  {
    id: 1,
    image: car1,
    title: "Restauração de Para-choque",
    category: "Lanternagem",
    desc: "Recuperação completa de para-choques amassados com acabamento perfeito."
  },
  {
    id: 2,
    image: car2,
    title: "Polimento Automotivo",
    category: "Polimento",
    desc: "Restauração do brilho original da pintura e proteção duradoura."
  },
  {
    id: 3,
    image: car3,
    title: "Pintura Personalizada",
    category: "Pintura",
    desc: "Aplicação de cores exclusivas com acabamento profissional."
  },
  {
    id: 4,
    image: car4,
    title: "Correção de Riscos",
    category: "Funilaria",
    desc: "Remoção de riscos e pequenos amassados sem danificar a pintura."
  },
  {
    id: 5,
    image: car5,
    title: "Restauração Completa",
    category: "Polimento",
    desc: "Polimento e vitrificação de veículos inteiros com brilho intenso."
  },
];

const categories = ["Todos", "Funilaria", "Pintura", "Polimento", "Lanternagem"];

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="galeria" className="bg-[#ededed] py-20 px-4 relative">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-3 text-black">Projetos Recentes</h2>
        <p className="text-gray-500 font-bold max-w-2xl mx-auto">
          Conheça nossos projetos mais recentes. Cada trabalho reflete a qualidade e atenção aos detalhes da <span className="text-yellow-500 font-semibold">GuiCar Recuperadora</span>.
        </p>

        {/* Filtro */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${selectedCategory === cat
                  ? "bg-yellow-500 text-white-500 shadow-md"
                  : "bg-white text-gray-700 hover:bg-yellow-400 hover:text-white shadow-sm"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="[&_.swiper-button-next]:!text-yellow-500 [&_.swiper-button-prev]:!text-yellow-500
             [&_.swiper-button-next]:!scale-75 [&_.swiper-button-prev]:!scale-75
             [&_.swiper-button-next:hover]:!text-yellow-400 [&_.swiper-button-prev:hover]:!text-yellow-400"

      >
        {filteredProjects.map((proj) => (
          <SwiperSlide key={proj.id}>
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group transition-transform hover:scale-[1.03]"
              onClick={() => setModalProject(proj)}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-64 sm:h-80 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 transition-all duration-300">
                <FaSearchPlus size={30} className="text-yellow-400 mb-2" />
                <p className="text-white font-medium text-center px-2">{proj.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {modalProject && (
        <div
          onClick={() => setModalProject(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer p-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full relative">
            <img
              src={modalProject.image}
              alt={modalProject.title}
              className="w-full h-80 sm:h-96 object-cover rounded-t-2xl"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{modalProject.title}</h3>
              <span className="text-yellow-500 font-semibold mb-2 block">{modalProject.category}</span>
              <p className="text-gray-700">{modalProject.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
