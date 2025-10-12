import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import antes1 from "../images/beforeFix.jpg";
import depois1 from "../images/afterFix.jpg";
import antes2 from "../images/beforePaint.jpg";
import depois2 from "../images/afterPaint.jpg";

const resultados = [
  { antes: antes1, depois: depois1, titulo: "Reparo Completo" },
  { antes: antes2, depois: depois2, titulo: "Restauração de Pintura" },
];

export default function BeforeAfterSection() {
  return (
    <section
      id="antes-depois"
      className="py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-black ">
          Transformações Reais
        </h3>

        <div className="flex flex-col gap-16">
          {resultados.map((item, i) => (
            <BeforeAfterCard key={i} {...item} />
          ))}
        </div>

        <div className="mt-14">
          <a
            href="#contato"
            className="relative bg-yellow-500 text-black font-semibold py-3 px-10 rounded-full shadow-md overflow-hidden
             transition-all duration-500 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">Ver mais resultados</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-white to-yellow-200 opacity-0 hover:opacity-40 blur-2xl animate-pulse" />
          </a>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCard({ antes, depois, titulo }) {
  const [pos, setPos] = useState(50);

  
  const active = pos < 50 ? "depois" : "antes";

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden transition-transform duration-300">
      <h4 className="text-2xl font-semibold text-yellow-500 py-4 border-b border-gray-200">
        {titulo}
      </h4>

      <div className="relative">
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src={antes} alt="Antes" className="object-cover" />}
          itemTwo={<ReactCompareSliderImage src={depois} alt="Depois" className="object-cover" />}
          className="w-full h-[300px] sm:h-[450px]"
          onPositionChange={(pos) => setPos(pos)}
        />

        <div className="absolute bottom-4 left-4 flex gap-3 text-sm sm:text-base font-semibold">
          <span
            className={`px-3 py-1 rounded-md transition-all duration-300 ${active === "antes"
                ? "bg-[#FFDA1F]/90 text-white"
                : "bg-black/50 text-white/70"
              }`}
          >
            Antes
          </span>
          <span
            className={`px-3 py-1 rounded-md transition-all duration-300 ${active === "depois"
                ? "bg-[#FFDA1F]/90 text-white"
                : "bg-black/50 text-white/70"
              }`}
          >
            Depois
          </span>
        </div>
      </div>
    </div>
  );
}
