import { CONEX_LETTERS, ROADMAP_STEPS } from '@/data/content'
import { whatsappUrl } from '@/lib/utils'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge">Metodologia exclusiva</span>
          <h2 className="section-title mt-4">
            O Método{' '}
            <span className="text-brand">C.O.N.E.X.</span>{' '}
            para Espanhol nos Negócios
          </h2>
          <div className="accent-bar mx-auto" />
          <p className="section-subtitle mx-auto text-center">
            Você não vai depender de "inspirar coragem". Você vai treinar com método.
            Um sistema de comunicação profissional em espanhol que transforma qualquer
            interação em 5 etapas.
          </p>
        </div>

        {/* Flow label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-200 flex-wrap justify-center">
            <span>Intenção</span>
            <ArrowRight size={14} />
            <span>Contexto</span>
            <ArrowRight size={14} />
            <span>Linguagem</span>
            <ArrowRight size={14} />
            <span>Vínculo</span>
            <ArrowRight size={14} />
            <span>Evolução</span>
          </div>
        </div>

        {/* C.O.N.E.X. cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {CONEX_LETTERS.map((item, i) => (
            <div
              key={i}
              className="card text-center hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-display font-bold text-gold">{item.letter}</span>
              </div>
              <h3 className="font-display font-bold text-navy text-sm mb-2">{item.word}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Comunicação Imediata block */}
        <div className="bg-brand/5 border border-brand/20 rounded-2xl p-8 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center">
                <span className="text-white font-display font-bold text-2xl">CI</span>
              </div>
            </div>
            <div>
              <h3 className="font-display font-bold text-navy text-xl mb-2">
                + Comunicação Imediata
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Em paralelo ao C.O.N.E.X., você treina a capacidade de reagir em tempo real — sem pausa,
                sem tradução mental, sem travar. Simulações de atendimento e reuniões com feedback
                imediato da professora. É o complemento prático que transforma método em fluência.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Roadmap */}
        <div className="mb-12">
          <h3 className="text-center font-display font-bold text-navy text-xl mb-8">
            Sua jornada de evolução — do diagnóstico à fluência profissional
          </h3>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[calc(12.5%)] right-[calc(12.5%)] h-0.5 bg-gradient-to-r from-brand/30 via-navy/40 to-gold" />

            <div className="grid grid-cols-4 gap-4">
              {ROADMAP_STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center px-2">
                  {/* Circle node */}
                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-card border-2 font-display font-bold text-lg
                      ${i === 0 ? 'bg-white border-gray-300 text-gray-500' : ''}
                      ${i === 1 ? 'bg-brand/10 border-brand/40 text-brand' : ''}
                      ${i === 2 ? 'bg-navy/10 border-navy/40 text-navy' : ''}
                      ${i === 3 ? 'bg-gold/20 border-gold text-gold' : ''}
                    `}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    {step.period}
                  </span>
                  <h4 className="font-display font-bold text-navy text-sm mb-1">{step.phase}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stepper */}
          <div className="md:hidden space-y-4">
            {ROADMAP_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-navy/10 border border-navy/20 flex items-center justify-center font-display font-bold text-navy text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  {i < ROADMAP_STEPS.length - 1 && (
                    <div className="w-0.5 h-6 bg-gray-200 mt-1" />
                  )}
                </div>
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{step.period}</span>
                  <h4 className="font-display font-bold text-navy text-sm">{step.phase}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What you'll practice */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <h3 className="col-span-full text-center font-display font-bold text-navy text-xl mb-2">
            Durante o curso, você vai praticar com:
          </h3>
          {[
            'Simulações de atendimento e reuniões',
            'Conversação aplicada ao mercado',
            'Correções personalizadas da professora',
            'Exercícios de comunicação intercultural',
            'Produção de e-mails, apresentações e CV em espanhol',
            'Acompanhamento individual com suporte via WhatsApp',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
              <CheckCircle2 size={18} className="text-brand flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={whatsappUrl('Olá! Quero saber mais sobre o método C.O.N.E.X. do Conexión Pro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Quero aprender com esse método
          </a>
        </div>
      </div>
    </section>
  )
}
