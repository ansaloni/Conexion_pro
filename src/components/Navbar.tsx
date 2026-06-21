'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import { NAV_LINKS } from '@/data/content'
import { whatsappUrl, cn } from '@/lib/utils'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-card' : 'bg-navy/95 backdrop-blur-sm'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Conexión Pro — Karolaine Oliveira"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <div className={cn('text-xs font-semibold uppercase tracking-wider', scrolled ? 'text-navy' : 'text-white')}>
                Karolaine Oliveira
              </div>
              <div className={cn('text-sm font-bold', scrolled ? 'text-brand' : 'text-gold')}>
                Conexión Pro
              </div>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  scrolled
                    ? 'text-gray-600 hover:text-navy'
                    : 'text-white/80 hover:text-white'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              <MessageCircle size={16} />
              Falar com Karol
            </a>

            <button
              onClick={() => setOpen(!open)}
              className={cn(
                'lg:hidden p-2 rounded-lg transition-colors',
                scrolled ? 'text-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
              )}
              aria-label="Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-card-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-gray-700 hover:text-navy hover:bg-gray-50 font-medium px-4 py-3 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-2 flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <MessageCircle size={18} />
              Falar com Karol no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
