import { CONEX_LETTERS } from '@/data/content'
import { whatsappUrl } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export default function Methodology() {
  return (
    <section id="metodologia" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge">Metodologia exclusiva</span>
          <h2 className="section-title mt-4">
            O Método{' '}
            <span className="text-brand">C.O.N.E.X.</span>{' '}
            + Comunicação Imediata
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
          <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
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
        <div className="bg-brand/5 border border-brand/20 rounded-2xl p-8 md:p-10">
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

        {/* What you'll practice */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <h3 className="col-span-full text-center font-display font-bold text-navy text-xl mb-2">
            Durante o curso, você vai praticar com:
          </h3>
          {[
            '✔ Simulações de atendimento e reuniões',
            '✔ Conversação aplicada ao mercado',
            '✔ Correções personalizadas da professora',
            '✔ Exercícios de comunicação intercultural',
            '✔ Produção de e-mails, apresentações e CV em espanhol',
            '✔ Acompanhamento individual com suporte via WhatsApp',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-gray-700 text-sm">
              <span className="text-brand font-bold">{item.split(' ')[0]}</span>
              <span>{item.slice(item.indexOf(' ') + 1)}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={whatsappUrl('Quero saber mais sobre o método C.O.N.E.X. do Conexión Pro!')}
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
