import { MessageCircle } from 'lucide-react'
import { FOR_WHO_ITEMS } from '@/data/content'
import { whatsappUrl } from '@/lib/utils'

export default function ForWho() {
  return (
    <section id="para-quem" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge">Para quem é</span>
          <h2 className="section-title mt-4">
            O Conexión Pro foi feito para você se…
          </h2>
          <div className="accent-bar mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {FOR_WHO_ITEMS.map((item, i) => (
            <div
              key={i}
              className="card flex items-start gap-5 hover:shadow-card-lg transition-shadow duration-300"
            >
              <div className="text-4xl flex-shrink-0">{item.emoji}</div>
              <div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.pain}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bridge statement */}
        <div className="bg-navy rounded-2xl p-8 md:p-10 text-center">
          <p className="text-white text-xl md:text-2xl font-display font-semibold mb-2">
            Se alguma dessas situações te descreveu…
          </p>
          <p className="text-white/80 text-lg mb-8">
            …o <strong className="text-gold">Conexión Pro</strong> foi desenvolvido exatamente para você.
          </p>
          <a
            href={whatsappUrl('Olá! Me identifiquei com o perfil do Conexión Pro e quero saber mais.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-8 py-4 rounded-full shadow-brand transition-all duration-200"
          >
            <MessageCircle size={20} />
            Quero saber mais
          </a>
        </div>
      </div>
    </section>
  )
}
