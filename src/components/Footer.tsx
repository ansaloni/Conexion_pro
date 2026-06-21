import Image from 'next/image'
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react'
import { NAV_LINKS, EMAIL, WHATSAPP_DISPLAY, INSTAGRAM_URL } from '@/data/content'
import { whatsappUrl } from '@/lib/utils'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contato" className="bg-navy-dark text-white">
      {/* Contact strip */}
      <div className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="p-3 bg-white/10 rounded-xl">
                <MessageCircle className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gold transition-colors"
                >
                  {WHATSAPP_DISPLAY}
                </a>
                <p className="text-white/50 text-xs mt-1">Respondo em até 2h em dias úteis</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="p-3 bg-white/10 rounded-xl">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">E-mail</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white font-semibold hover:text-gold transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="p-3 bg-white/10 rounded-xl">
                <Instagram className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Instagram</p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-gold transition-colors"
                >
                  @conexionespanhol
                </a>
                <p className="text-white/50 text-xs mt-1">Dicas diárias de espanhol profissional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/logo.png"
              alt="Conexión Pro"
              width={72}
              height={72}
              className="rounded-xl"
            />
            <div>
              <p className="text-white font-bold">KAROLAINE OLIVEIRA</p>
              <p className="text-gold text-sm font-medium">Conexión Pro</p>
              <p className="text-white/50 text-xs mt-1 max-w-xs">
                Espanhol profissional para brasileiros que querem resultados reais no trabalho.
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center md:items-end gap-2">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Navegação</p>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <p>© {year} Conexión Pro — Karolaine Oliveira. Todos os direitos reservados.</p>
          <p>Desenvolvido com ♥ para profissionais brasileiros</p>
        </div>
      </div>
    </footer>
  )
}
