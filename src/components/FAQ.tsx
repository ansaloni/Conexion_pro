'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { FAQ_ITEMS } from '@/data/content'
import { whatsappUrl, cn } from '@/lib/utils'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="badge">Dúvidas frequentes</span>
          <h2 className="section-title mt-4">Perguntas Frequentes</h2>
          <div className="accent-bar mx-auto" />
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={cn(
                'border rounded-2xl transition-all duration-300',
                openIndex === i
                  ? 'border-brand bg-brand/5 shadow-sm'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              )}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className={cn('font-display font-semibold text-base', openIndex === i ? 'text-brand' : 'text-navy')}>
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    'flex-shrink-0 text-gray-400 transition-transform duration-300',
                    openIndex === i ? 'rotate-180 text-brand' : ''
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Other questions prompt */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Tem uma dúvida que não está aqui?</p>
          <a
            href={whatsappUrl('Olá Karolaine! Tenho uma dúvida sobre o Conexión Pro.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand hover:text-brand-hover font-semibold transition-colors duration-200"
          >
            <MessageCircle size={18} />
            Falar diretamente com a Karolaine →
          </a>
        </div>
      </div>
    </section>
  )
}
