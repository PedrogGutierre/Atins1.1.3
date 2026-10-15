"use client"

import { Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

// Centralize os dados de contato do chalé aqui.
export const CONTACT = {
  phone: "+55 (71) 99999-0000",
  phoneRaw: "5571999990000",
  email: "contato@casamarua.com.br",
}

// TODO: trocar pelo número real do Hygor (instrutor de kitesurf).
export const HYGOR = {
  phone: "+55 (00) 00000-0000",
  phoneRaw: "5500000000000",
}

export function Contact() {
  const { t } = useLanguage()

  const items = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: CONTACT.phone,
      href: `tel:${CONTACT.phoneRaw}`,
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: CONTACT.phone,
      href: `https://wa.me/${CONTACT.phoneRaw}`,
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
  ]

  return (
    <section id="contact" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">{t.contact.label}</p>
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3  bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center  text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <item.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">{item.label}</span>
              <span className="font-medium text-card-foreground">{item.value}</span>
            </a>
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {t.contact.hours}
        </p>
      </div>
    </section>
  )
}
