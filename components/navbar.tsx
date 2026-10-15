"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import { cn } from "@/lib/utils"
import type { Language } from "@/lib/i18n/translations"

const languageOptions: {
  code: Language
  label: string
  country: string
}[] = [
    { code: "pt", label: "PT-BR", country: "br" },
    { code: "en", label: "EN", country: "us" },
    { code: "es", label: "ES", country: "es" },
    { code: "fr", label: "FR", country: "fr" }
  ]

export function Navbar() {
  const { t, language, setLanguageWithAnimation } = useLanguage()

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleLanguageChange = (newCode: Language) => {
    if (newCode === language) return
    setLanguageWithAnimation(newCode)
    setLangMenuOpen(false)
  }

  const navLinks = [
    { id: "home", href: "/", label: t.nav?.home || "Início" },
    { id: "chale", href: "/o-chale", label: t.nav?.chale || "O Chalé" },
    { id: "experience", href: "/experience", label: t.nav?.experience || "Experiências" },
    { id: "kitesurf", href: "/kitesurf", label: t.nav?.kitesurf || "Kitesurf" },
  ]

  const currentLang = languageOptions.find((l) => l.code === language) || languageOptions[0]

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/60 shadow-sm backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">

          <Image
            src="/logo.png"
            alt="Ícone CasaMarua"
            width={45}
            height={45}
            className="object-contain h-[35px] w-auto"
            priority
          />

          <Image
            src="/logoTipografia.png"
            alt="CasaMarua"
            width={160}
            height={40}
            className="object-contain h-[28px] w-auto"
            priority
          />

        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="flex flex-col gap-1 text-sm font-medium text-white/70 transition hover:text-white/90 hover:after:w-full after:w-0 after:h-0.5 after:bg-white/90 after:transition-all after:duration-300 after:ease-in-out translate-y-1"
            >
              {link.label}
            </Link>
          ))}

          {/* Idiomas */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 border border-white/40 px-3 py-1.5 text-xs font-semibold cursor-pointer uppercase text-white hover:bg-white/10"
            >
              <Globe className="h-4 w-4 text-accent" />
              <span className={`fi fi-${currentLang.country} rounded-sm`} style={{ fontSize: 18 }} />
              <span>{currentLang.label}</span>
              <ChevronDown className={cn("h-3 w-3 transition-transform", langMenuOpen && "rotate-180")} />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-lg border border-white/20 bg-black/90 shadow-xl backdrop-blur-md">
                {languageOptions.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLanguageChange(l.code)}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-3 text-sm text-white transition hover:bg-white/10 cursor-pointer",
                      language === l.code && "bg-white/10 text-accent"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`fi fi-${l.country}`} style={{ fontSize: 18 }} />
                      <span>{l.label}</span>
                    </div>
                    {language === l.code && <span className="text-accent">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/reserva">{t.nav?.reserve || "Reservar"}</Link>
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 border border-white/40 px-2 py-1 text-xs text-white"
            >
              <span className={`fi fi-${currentLang.country}`} style={{ fontSize: 16 }} />
              <span>{currentLang.label}</span>
              <ChevronDown className={cn("h-3 w-3 transition-transform", langMenuOpen && "rotate-180")} />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 overflow-hidden rounded-lg border border-white/20 bg-black/90 shadow-xl backdrop-blur-md">
                {languageOptions.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLanguageChange(l.code)}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-3 text-sm text-white transition hover:bg-white/10",
                      language === l.code && "bg-white/10 text-accent"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`fi fi-${l.country}`} style={{ fontSize: 18 }} />
                      <span>{l.label}</span>
                    </div>
                    {language === l.code && <span className="text-accent">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button onClick={() => setOpen(!open)} className="text-white">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-md md:hidden mt-4">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2 text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}

            <Button asChild className="mt-2 bg-accent text-accent-foreground">
              <Link href="/reserva" onClick={() => setOpen(false)}>
                {t.nav?.reserve || "Reservar"}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}