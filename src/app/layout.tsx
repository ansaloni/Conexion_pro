import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
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

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export const metadata: Metadata = {
  title: 'Conexión Pro — Espanhol para Negócios e Mercado Corporativo',
  description:
    'Curso online de espanhol para negócios focado em atendimento ao cliente, vendas e mercado corporativo LATAM. Metodologia C.O.N.E.X. com Karolaine Oliveira, formada pela UFMG.',
  keywords: [
    'espanhol para negócios',
    'espanhol para o mercado corporativo',
    'curso espanhol online',
    'espanhol profissional',
    'espanhol atendimento ao cliente',
    'espanhol para brasileiros',
    'Conexión Pro',
    'Karolaine Oliveira',
  ],
  openGraph: {
    title: 'Conexión Pro — Espanhol para Negócios',
    description:
      'Conquiste confiança para atender, vender e se posicionar em espanhol no mercado corporativo. Método C.O.N.E.X. + Comunicação Imediata.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {GTM_ID && (
          <Script id="gtm-head" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
