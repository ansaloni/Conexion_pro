import { XCircle, CheckCircle2 } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">O que normalmente acontece — e o que muda aqui</h2>
          <div className="accent-bar mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Problem side */}
          <div className="card border-t-4 border-red-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-xl">
                <XCircle className="text-red-500" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-800">
                O que normalmente acontece:
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                'Você até entende algumas palavras… mas na hora de responder, falta frase, falta estrutura, falta confiança.',
                'O medo de errar te faz falar menos, o que te deixa ainda mais inseguro(a).',
                'Você estudou, mas o espanhol "genérico" não se conecta com o mundo real do trabalho.',
                'Cursos tradicionais ensinam gramática, mas não ensinam a reagir em uma call com um cliente chileno.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-red-400 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution side */}
          <div className="card border-t-4 border-navy bg-navy/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-navy/10 rounded-xl">
                <CheckCircle2 className="text-navy" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-navy">
                O que muda no Conexión Pro, Atendimento LATAM:
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                'Você aprende com treino real, simulações e um método que organiza seu progresso de forma mensurável.',
                'Sai com repertório pronto, como frases úteis que você usa imediatamente no trabalho.',
                'Estrutura de comunicação profissional: como abrir, conduzir e fechar qualquer conversa.',
                'Prática guiada com correção e estratégia para sotaques e formalidade corporativa.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-navy flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
