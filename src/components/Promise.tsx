import { TrendingUp } from 'lucide-react'
import { whatsappUrl } from '@/lib/utils'

export default function Promise() {
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: big promise */}
          <div className="lg:w-1/2">
            <span className="badge">A transformação</span>
            <h2 className="section-title mt-4 mb-4">
              De profissional comum a{' '}
              <span className="text-brand">atendente bilíngue confiante</span>
            </h2>
            <div className="accent-bar" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Em vez de estudar espanhol "por estudar", você aprende o que realmente usa no trabalho:
              cumprimentar, conduzir conversa, apresentar soluções, lidar com reclamações, negociar e fechar.
            </p>
            <p className="text-gray-700 font-semibold text-lg mb-8">
              Resultado esperado em{' '}
              <span className="text-brand">90 dias</span>: mais segurança, mais fluidez
              e mais desempenho em situações profissionais reais.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Começar minha transformação
            </a>
          </div>

          {/* Right: stats */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {[
              {
                number: '90',
                unit: 'dias',
                label: 'para comunicar com confiança no trabalho',
                color: 'text-brand',
              },
              {
                number: '6',
                unit: 'módulos',
                label: 'progressivos do básico ao diferencial de carreira',
                color: 'text-navy',
              },
              {
                number: '2',
                unit: 'planos',
                label: 'adaptados à sua rotina e ritmo de evolução',
                color: 'text-gold-dark',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-6 card border-l-4 border-brand p-6"
              >
                <div>
                  <span className={`text-5xl font-display font-bold ${stat.color}`}>
                    {stat.number}
                  </span>
                  <span className="text-2xl font-display text-gray-400 ml-1">{stat.unit}</span>
                </div>
                <div>
                  <TrendingUp className="text-brand mb-1" size={18} />
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
