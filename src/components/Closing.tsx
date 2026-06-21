import { MessageCircle } from 'lucide-react'
import { whatsappUrl } from '@/lib/utils'

export default function Closing() {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand/10 blur-3xl pointer-events-none" />

      {/* Large decorative quote mark */}
      <div className="absolute top-4 left-4 text-[200px] font-display leading-none text-white/5 select-none">
        "
      </div>

      <div className="relative section-container text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
          O espanhol pode abrir portas.
          <br />
          <span className="text-gradient-gold">
            Mas a confiança para se comunicar é o que cria oportunidades.
          </span>
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
          O Conexión Pro foi desenvolvido para quem quer ir além da teoria e usar o espanhol
          de forma <strong className="text-white">prática, profissional e estratégica</strong> no
          mercado de trabalho.
        </p>

        <p className="text-white/60 text-base mb-10">
          A próxima vaga bilíngue, o próximo cliente LATAM, a próxima oportunidade —
          <strong className="text-white"> você vai estar pronto(a)</strong>.
        </p>

        <a
          href={whatsappUrl('Olá Karolaine! Quero começar minha jornada bilíngue com o Conexión Pro!')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand hover:bg-brand-hover text-white font-bold px-10 py-5 rounded-full shadow-brand text-lg transition-all duration-200 hover:scale-105"
        >
          <MessageCircle size={22} />
          Começar minha jornada bilíngue agora
        </a>

        <p className="text-white/40 text-sm mt-4">
          Vagas limitadas para acompanhamento individual.
        </p>
      </div>
    </section>
  )
}
