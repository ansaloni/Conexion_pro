import { MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react'
import { whatsappUrl } from '@/lib/utils'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-hero-gradient overflow-hidden pt-[72px]"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-brand/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-navy-light/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Curso Atendimento LATAM
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Conquiste{' '}
            <span className="text-gradient-gold">confiança</span>{' '}
            para atender, vender e se posicionar em espanhol
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Metodologia <strong className="text-gold">C.O.N.E.X.</strong> — simulações reais,
            frases prontas e suporte individual para você se comunicar com confiança no mercado corporativo.
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-10">
            {[
              { bold: 'Método C.O.N.E.X. + Comunicação Imediata', post: ' treino aplicado, não teoria' },
              { bold: 'Frases prontas', post: ' para atendimento, vendas, calls e reuniões' },
              { bold: 'Suporte VIP no WhatsApp', post: ' com acompanhamento personalizado' },
              { bold: 'Resultado em 90 dias', post: ' do nível atual à confiança profissional' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={20} />
                <span><strong className="text-white">{item.bold}</strong>{item.post}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={whatsappUrl('Olá Karolaine, quero me tornar bilíngue no trabalho com o Conexión Pro!')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              <MessageCircle size={20} />
              Quero destravar meu espanhol
            </a>
            <a href="#investimento" className="btn-ghost text-center">
              Ver planos e valores
            </a>
          </div>

          <p className="text-white/50 text-sm mt-4">
            Vagas limitadas para acompanhamento e suporte individual.
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-white/5 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-gold">UFMG</span>
              <span>Formada em Letras/Espanhol</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-gold">LATAM</span>
              <span>Experiência em multinacionais</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-gold">90</span>
              <span>dias para confiança profissional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#para-quem"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors hidden md:block"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  )
}
