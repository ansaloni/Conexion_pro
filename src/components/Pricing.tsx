import { CheckCircle2, MessageCircle, Star, Calendar, Clock, MessageSquare, ShieldCheck } from 'lucide-react'
import { PLANS } from '@/data/content'
import { whatsappUrl, cn } from '@/lib/utils'

export default function Pricing() {
  return (
    <section id="investimento" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge">Planos e Investimento</span>
          <h2 className="section-title mt-4">Escolha o Plano Ideal para Você</h2>
          <div className="accent-bar mx-auto" />
          <p className="section-subtitle mx-auto text-center">
            Todos os valores incluem material didático, suporte via WhatsApp e acesso aos bônus.
            Sem letras miúdas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={cn(
                'rounded-2xl p-8 flex flex-col transition-all duration-300',
                plan.highlight
                  ? 'bg-navy text-white shadow-card-lg ring-2 ring-gold relative md:scale-105'
                  : 'bg-white shadow-card border border-gray-100'
              )}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-gold text-navy text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                    <Star size={12} className="fill-navy" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className={cn('font-display font-bold text-2xl mb-1', plan.highlight ? 'text-gold' : 'text-navy')}>
                  Plano {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mt-4">
                  <span className={cn('text-5xl font-display font-bold', plan.highlight ? 'text-white' : 'text-navy')}>
                    {plan.price}
                  </span>
                  <span className={cn('text-lg', plan.highlight ? 'text-white/70' : 'text-gray-400')}>
                    {plan.period}
                  </span>
                </div>
                <div className={cn('mt-2 flex flex-col gap-1 text-sm', plan.highlight ? 'text-white/70' : 'text-gray-500')}>
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {plan.frequency}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> Duração estimada: {plan.commitment}</span>
                </div>
              </div>

              {/* Highlight box */}
              <div className={cn('rounded-xl p-3 mb-6 text-center text-sm font-semibold', plan.highlight ? 'bg-white/10 text-gold' : 'bg-brand/5 text-brand')}>
                {plan.classes}
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-grow mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className={cn('flex-shrink-0 mt-0.5', plan.highlight ? 'text-gold' : 'text-brand')}
                    />
                    <span className={cn('text-sm', plan.highlight ? 'text-white/80' : 'text-gray-600')}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <div className={cn('text-xs italic mb-6 leading-relaxed', plan.highlight ? 'text-white/50' : 'text-gray-400')}>
                <strong className={plan.highlight ? 'text-white/70' : 'text-gray-500'}>Ideal para:</strong>{' '}
                {plan.ideal}
              </div>

              {/* CTA — large touch target for mobile */}
              <a
                href={whatsappUrl(`Olá Karolaine! Tenho interesse no Plano ${plan.name} do Conexión Pro. Vi na seção de investimento.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'w-full flex items-center justify-center gap-2 font-bold px-6 py-5 rounded-full transition-all duration-200 active:scale-95 min-h-[56px]',
                  plan.highlight
                    ? 'bg-brand hover:bg-brand-hover text-white shadow-brand'
                    : 'bg-navy hover:bg-navy-light text-white'
                )}
              >
                <MessageCircle size={20} />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className="text-center mt-10 text-gray-500 text-sm space-y-2">
          <p className="flex items-center justify-center gap-2"><MessageSquare size={14} /> Pagamento e agendamento combinados diretamente com a professora.</p>
          <p className="flex items-center justify-center gap-2"><ShieldCheck size={14} /> Negociação transparente — sem surpresas ou cobranças escondidas.</p>
        </div>
      </div>
    </section>
  )
}
