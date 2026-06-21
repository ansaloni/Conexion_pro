import { BONUSES } from '@/data/content'
import { Gift, MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/utils'

export default function Bonuses() {
  return (
    <section id="bonus" className="bg-navy">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Gift size={16} />
            Inclusos no programa
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mt-2">
            Materiais e Bônus que Ampliam seu Aprendizado
          </h2>
          <div className="w-14 h-1 bg-gold rounded-full mx-auto mt-4 mb-4" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Ao entrar no Conexión Pro, você recebe uma série de materiais práticos
            para acelerar sua evolução além das aulas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {BONUSES.map((bonus, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-3xl mb-3">{bonus.emoji}</div>
              <h3 className="font-display font-bold text-white text-sm mb-2">{bonus.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{bonus.desc}</p>
            </div>
          ))}

          {/* "All bonuses included" teaser card */}
          <div className="bg-gold/20 border-2 border-gold/40 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
            <span className="text-3xl mb-3">🎁</span>
            <p className="text-gold font-bold text-sm">
              Todos inclusos nos planos Essencial e Intensivo
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href={whatsappUrl('Quero saber mais sobre os bônus do Conexión Pro!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-full transition-colors duration-200"
          >
            <MessageCircle size={20} />
            Garantir meu acesso com os bônus
          </a>
        </div>
      </div>
    </section>
  )
}
