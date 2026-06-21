import { CheckCircle2, MessageCircle } from 'lucide-react'
import { LEARN_ITEMS } from '@/data/content'
import { whatsappUrl } from '@/lib/utils'

export default function Benefits() {
  return (
    <section id="o-que-aprender" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge">Benefícios</span>
          <h2 className="section-title mt-4">
            O que você vai desenvolver no Conexión Pro
          </h2>
          <div className="accent-bar mx-auto" />
          <p className="section-subtitle mx-auto text-center">
            Ao longo do programa, você vai desenvolver confiança para situações profissionais reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
          {LEARN_ITEMS.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <CheckCircle2 className="text-brand flex-shrink-0 mt-0.5" size={22} />
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle size={20} />
            Quero esses resultados
          </a>
        </div>
      </div>
    </section>
  )
}
