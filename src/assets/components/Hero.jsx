import videoBg from "../videos/igHeroVideo.mp4";
import heroBg from "../images/heroImage.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden 
                 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* 🎥 Vídeo — visível somente em telas menores que 640px */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center block sm:hidden">
        {/* Fundo desfocado */}
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover blur-lg scale-110"
        />

        {/* Vídeo principal (vertical) */}
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-[500px] left-1/2 w-auto h-full transform -translate-x-1/2 -translate-y-1/2 object-contain z-10 scale-[2.20]"
        />
      </div>

      {/* Overlay escuro — aparece apenas em telas ≥ 640px */}
      <div className="absolute inset-0 bg-black/50 z-20 hidden sm:block"></div>

      {/* Conteúdo principal */}
      <div className="relative z-30 max-w-2xl text-white px-4 flex flex-col items-center">
        {/* Oculta título e texto no mobile */}
        <h2 className="uppercase font-extrabold mb-4 leading-tight drop-shadow-xl hidden sm:block">
          <span className="block text-5xl sm:text-6xl tracking-wide text-[#FFD700] drop-shadow-lg">
            GuiCar
          </span>
          <span className="block text-2xl sm:text-3xl text-[#FFD700] mt-1 drop-shadow-md">
            Recuperadora de Veículos
          </span>
        </h2>

        <p className="text-base text-justify sm:text-lg mb-12 text-gray-200 max-w-xl mx-auto hidden sm:block">
          Devolvemos ao seu carro o visual que ele merece. Resultados que impressionam, para você dirigir com orgulho novamente.
        </p>

        <a
          href="https://wa.me/55SEUNUMERO?text=Olá! Gostaria de solicitar um orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full shadow-xl transform transition-all hover:scale-105 hidden sm:inline-flex"
        >
          Solicite um orçamento
        </a>
      </div>
    </section>
  );
}
