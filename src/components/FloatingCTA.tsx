'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X, ChevronUp } from 'lucide-react'
import { whatsappUrl } from '@/lib/utils'

export default function FloatingCTA() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileDismissed, setMobileDismissed] = useState(false)
  const [desktopDismissed, setDesktopDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const showDesktop = scrollY > 400 && !desktopDismissed
  const showBackToTop = scrollY > 800
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {/* Mobile: full-width sticky bottom bar (thumb zone) */}
      {!mobileDismissed && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-2">
          <a
            href={whatsappUrl('Olá Karolaine! Estou no site e quero saber mais sobre o Conexión Pro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-bold text-sm py-3 rounded-full transition-colors active:scale-95"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
          <button
            onClick={() => setMobileDismissed(true)}
            className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
            aria-label="Fechar"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Desktop: floating stack (back-to-top + WhatsApp) */}
      <div className="hidden sm:flex flex-col items-end gap-2 fixed bottom-6 right-6 z-50">
        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className={`w-10 h-10 bg-white border border-gray-200 rounded-full shadow-card flex items-center justify-center hover:bg-gray-50 hover:shadow-card-lg hover:-translate-y-0.5 transition-all duration-300 ${
            showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={18} className="text-navy" />
        </button>

        {/* WhatsApp CTA */}
        <div className={`flex items-end gap-2 transition-all duration-300 ${
          showDesktop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          <button
            onClick={() => setDesktopDismissed(true)}
            className="mb-1 self-start w-5 h-5 rounded-full bg-gray-400 hover:bg-gray-500 text-white flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            <X size={10} />
          </button>
          <a
            href={whatsappUrl('Olá Karolaine! Estou navegando no site e quero saber mais sobre o Conexión Pro.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com Karol no WhatsApp"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 pl-4 pr-5 py-3"
          >
            <span className="relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30" />
              <MessageCircle size={24} className="relative" />
            </span>
            <span className="text-sm">Falar com Karol</span>
          </a>
        </div>
      </div>
    </>
  )
}
