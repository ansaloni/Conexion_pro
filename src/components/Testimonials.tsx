import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS, COMPANY_SECTORS } from '@/data/content'

export default function Testimonials() {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge">Prova Social</span>
          <h2 className="section-title mt-4">
            O que nossos alunos dizem
          </h2>
          <div className="accent-bar mx-auto" />
          <p className="section-subtitle mx-auto text-center">
            Profissionais brasileiros que transformaram sua comunicação em espanhol para negócios.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="card flex flex-col gap-4 hover:shadow-card-lg transition-shadow duration-300"
            >
              {/* Quote icon */}
              <Quote className="text-brand/20" size={32} />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-grow italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-display font-bold text-navy text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
                <p className="text-brand text-xs font-medium">{t.sector}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company sectors strip */}
        <div className="border-t border-gray-200 pt-10">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest font-semibold mb-6">
            Setores onde nossos alunos atuam
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {COMPANY_SECTORS.map((sector, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:border-navy hover:text-navy transition-colors duration-200"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
