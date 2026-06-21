import { WHATSAPP_NUMBER, WHATSAPP_MSG } from '@/data/content'

export function whatsappUrl(customMsg?: string): string {
  const msg = encodeURIComponent(customMsg ?? WHATSAPP_MSG)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
