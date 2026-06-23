import Image from 'next/image'
import { GraduationCap, Building2, MapPin, Star } from 'lucide-react'
import { whatsappUrl } from '@/lib/utils'

export default function About() {
  return (
    <section id="professora" className="bg-navy">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar column */}
          <div className="lg:w-2/5 flex flex-col items-center text-center">
            {/* Logo as visual anchor */}
            <div className="relative mb-8">
              <div className="w-48 h-48 rounded-full bg-white/10 border-2 border-gold/30 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Karolaine Oliveira — Conexión Pro"
                  width={160}
                  height={160}
                  className="rounded-full object-contain p-4"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Professora
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-1">
              KAROLAINE OLIVEIRA
            </h3>
            <p className="text-gold font-medium mb-6">Especialista em Espanhol para Negócios</p>

            {/* Credential badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { icon: GraduationCap, label: 'Letras UFMG' },
                { icon: Building2, label: 'Multinacionais LATAM' },
                { icon: MapPin, label: 'Vivência no Chile' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-2 rounded-full"
                >
                  <Icon size={14} className="text-gold" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Bio column */}
          <div className="lg:w-3/5">
            <span className="badge-gold">Sobre a professora</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4 mb-4">
              Olá, eu sou a Karolaine Oliveira.
            </h2>
            <div className="w-14 h-1 bg-gold rounded-full mb-6" />

            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                Sou formada em <strong className="text-white">Letras Espanhol pela UFMG</strong>, uma
                das universidades mais renomadas do Brasil, e tenho experiência com ensino de idiomas
                e atuação profissional em <strong className="text-white">atendimento bilíngue LATAM</strong>{' '}
                em empresas multinacionais.
              </p>
              <p>
                Além da formação sólida, tive <strong className="text-white">vivência internacional
                no Chile</strong>, o que me deu uma compreensão real das nuances culturais e
                linguísticas que impactam a comunicação profissional com clientes hispanofalantes.
              </p>
              <p>
                Com base nisso, desenvolvi uma metodologia focada em{' '}
                <strong className="text-white">comunicação real no ambiente corporativo</strong>, para
                ajudar profissionais a ganharem confiança para atender, vender, conversar e se
                posicionar em espanhol, com objetividade e resultado.
              </p>
            </div>

            <div className="mt-8 p-5 bg-white/10 border border-white/20 rounded-xl">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-white/90 italic text-sm">
                "Você não vai aprender só gramática: vai aprender o espanhol do mundo real, usado em
                empresas e relações profissionais LATAM."
              </p>
              <p className="text-gold text-sm font-semibold mt-2">— Karolaine Oliveira</p>
            </div>

            <div className="mt-8">
              <a
                href={whatsappUrl('Olá Karolaine! Vi seu perfil e quero saber mais sobre o Conexión Pro.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-full transition-colors duration-200"
              >
                Conversar com a professora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
