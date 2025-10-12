import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    question: "Quais tipos de veículos vocês atendem?",
    answer: "Atendemos carros, motos e veículos utilitários de todas as marcas e modelos."
  },
  {
    question: "Os serviços possuem garantia?",
    answer: "Sim! Todos os nossos serviços contam com garantia de qualidade e satisfação garantida."
  },
  {
    question: "Vocês fazem orçamento online?",
    answer: "Sim, você pode solicitar um orçamento rápido pelo WhatsApp ou pelo nosso formulário de contato."
  },
  {
    question: "Qual o horário de atendimento?",
    answer: "Atendemos de segunda a sábado, das 8h às 18h."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-100 py-16 px-4 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-black">Perguntas Frequentes</h2>
        <p className="text-gray-600 font-bold">Tire suas dúvidas sobre nossos serviços antes de entrar em contato.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#d187005c]  shadow-md rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium hover:bg-gray-50"
            >
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="text-yellow-500" />
              ) : (
                <FaChevronDown className="text-yellow-500" />
              )}
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Final */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Ainda tem dúvidas?</h3>
        <p className="text-gray-600 mb-6">Fale conosco agora mesmo e receba um atendimento personalizado!</p>
        <a
          href="https://wa.me/55SEUNUMERO?text=Olá! Tenho uma dúvida sobre os serviços da GuiCar."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,218,31,0.7)]"
        >
          <FaWhatsapp size={20} />
          <span>Chamar no WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
