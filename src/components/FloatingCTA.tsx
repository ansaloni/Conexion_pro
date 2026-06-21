'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { whatsappUrl } from '@/lib/utils'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  if (dismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-2 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      {/* Dismiss button */}
      {visible && (
        <button
          onClick={() => setDismissed(true)}
          className="mb-1 self-start w-5 h-5 rounded-full bg-gray-400 hover:bg-gray-500 text-white flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X size={10} />
        </button>
      )}

      {/* WhatsApp CTA */}
      <a
        href={whatsappUrl('Olá Karolaine! Estou navegando no site e quero saber mais sobre o Conexión Pro.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Karol no WhatsApp"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-semibold
                   rounded-full shadow-lg hover:shadow-xl
                   transition-all duration-300 hover:scale-105
                   pl-4 pr-5 py-3 sm:pl-3 sm:pr-4 sm:py-3"
      >
        {/* Pulse ring */}
        <span className="relative flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-30" />
          <MessageCircle size={24} className="relative" />
        </span>
        <span className="text-sm hidden sm:inline">Falar com Karol</span>
      </a>
    </div>
  )
}
