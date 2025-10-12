import sobreImg from "../images/sobreNos.jpg";

export default function AboutUs() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">

        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={sobreImg}
            alt="Sobre a Funilaria"
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[450px] xl:max-w-[500px] max-h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-justify">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-500">
            Sobre Nós
          </h3>
          <p className="text-gray-700 mb-4 text-justify">
            A <strong>GUICAR Recuperadora de Veículos</strong> atua há mais de X anos oferecendo serviços de funilaria, pintura e polimento de alta qualidade. Nosso compromisso é devolver a beleza e segurança do seu carro, utilizando técnicas modernas e materiais de primeira linha.
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            Contamos com uma equipe qualificada e apaixonada pelo que faz, garantindo resultados impecáveis e atendimento personalizado. Cada veículo é tratado com cuidado e atenção aos detalhes.
          </p>
          <p className="text-gray-700 text-justify">
            Nosso diferencial: rapidez, qualidade, transparência e a confiança que nossos clientes merecem.
          </p>
        </div>
      </div>
    </section>
  );
}
