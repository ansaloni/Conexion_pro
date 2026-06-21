import { MODULES } from '@/data/content'

export default function Modules() {
  return (
    <section id="programa" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge">Estrutura do programa</span>
          <h2 className="section-title mt-4">
            6 Módulos Progressivos de Espanhol para o Mercado Corporativo
          </h2>
          <div className="accent-bar mx-auto" />
          <p className="section-subtitle mx-auto text-center">
            Do primeiro contato ao diferencial de carreira — um caminho estruturado para quem quer resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((mod, i) => (
            <div
              key={i}
              className="card border-l-4 border-brand hover:shadow-card-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative number bg */}
              <div className="absolute top-4 right-4 text-7xl font-display font-bold text-gray-100 group-hover:text-gray-200 transition-colors leading-none select-none">
                {mod.number}
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand/10 text-brand font-bold text-sm mb-4">
                  {mod.number}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{mod.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{mod.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400 font-medium">Pilares C.O.N.E.X.:</span>
                  <span className="badge-gold text-xs px-2 py-0.5">{mod.conex}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
