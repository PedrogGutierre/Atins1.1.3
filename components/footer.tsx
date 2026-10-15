"use client"

import Link from "next/link"
import { Waves, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { CONTACT } from "@/components/contact"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const links = [
    { id: "home", href: "/", label: t.nav.home },
    { id: "chale", href: "/o-chale", label: t.nav.chale },
    { id: "experience", href: "/experience", label: t.nav.experience },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-2">
            <Waves className="h-5 w-5 text-white" aria-hidden="true" />
            <span className="font-serif text-xl">CasaMarua</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/80">{t.footer.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground">
            {t.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className="text-primary-foreground/80 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/reserva" className="text-primary-foreground/80 transition-colors hover:text-white">
                {t.nav.reserve}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground">
            {t.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-primary-foreground/80">
              <Phone className="h-4 w-4" />
              <a href={`tel:${CONTACT.phoneRaw}`} className="transition-colors hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 text-primary-foreground/80">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-primary-foreground/80">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                @casamarua
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-primary-foreground/70 md:px-6">
          &copy; {year} CasaMarua. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}