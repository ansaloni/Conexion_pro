import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Conexión Pro — Espanhol Profissional para Brasileiros',
  description:
    'Curso online de espanhol focado em atendimento ao cliente, vendas e negócios. Metodologia C.O.N.E.X. com Karolaine Oliveira, formada pela UFMG com experiência em multinacionais LATAM.',
  keywords: [
    'espanhol para negócios',
    'curso espanhol online',
    'espanhol profissional',
    'espanhol atendimento ao cliente',
    'Conexión Pro',
    'Karolaine Oliveira',
  ],
  openGraph: {
    title: 'Conexión Pro — Espanhol para Profissionais',
    description:
      'Conquiste confiança para atender, vender e se posicionar em espanhol. Método C.O.N.E.X. + Comunicação Imediata.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
