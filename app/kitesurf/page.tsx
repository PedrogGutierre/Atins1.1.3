"use client"

import Image from "next/image"
import { MessageCircle, ShieldCheck, HardHat, Unlink, Wind } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { HYGOR } from "@/components/contact"

const LESSON_LANGUAGES = [
  { country: "br", name: "Português" },
  { country: "us", name: "English" },
  { country: "es", name: "Español" },
  { country: "fr", name: "Français" },
]

const SAFETY_ICONS = [ShieldCheck, HardHat, Unlink, Wind]

export default function KitesurfPage() {
  const { t } = useLanguage()
  const k = t.kitesurf

  const whatsappHref = `https://wa.me/${HYGOR.phoneRaw}?text=${encodeURIComponent(k.waMessage)}`

  const whatsappButton =
    "inline-flex h-14 items-center justify-center gap-2 bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <section className="relative flex min-h-[620px] h-[88vh] w-full items-end overflow-hidden">
        <Image
          src="/images/kite.jpg"
          alt="Kitesurf em Atins"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 md:px-6 md:pb-24">
          <p className="mb-4 text-sm font-medium text-accent">{k.heroTagline}</p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold text-balance text-white md:text-6xl lg:text-7xl">
            {k.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90 md:text-xl">{k.heroSubtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={whatsappButton}>
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {k.heroCta}
            </a>
            <span className="text-base text-white/80">{HYGOR.phone}</span>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground text-balance md:text-3xl">
              {k.langTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">{k.langSubtitle}</p>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {LESSON_LANGUAGES.map((l) => (
              <li key={l.country} className="flex items-center gap-3">
                <span className={`fi fi-${l.country}`} style={{ fontSize: 28 }} aria-hidden="true" />
                <span className="text-lg font-medium text-foreground">{l.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="relative hidden aspect-[4/5] overflow-hidden shadow-md lg:col-span-2 lg:block">
            <Image
              src="/images/dunas.jpg"
              alt="Dunas de Atins, Maranhão"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
              {k.spotsTitle}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">{k.spotsSubtitle}</p>

            <ul className="mt-10 border-b border-border">
              {k.spots.map((spot) => (
                <li
                  key={spot.name}
                  className="grid gap-3 border-t border-border py-7 md:grid-cols-[1fr_auto] md:gap-10"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                      {spot.name}
                      <span className="ml-3 font-sans text-base font-medium text-muted-foreground">
                        {spot.state}
                      </span>
                    </h3>
                    <p className="mt-2 max-w-md text-muted-foreground">{spot.desc}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm text-muted-foreground">{k.seasonLabel}</p>
                    <p className="mt-1 font-medium text-foreground">{spot.season}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
              {k.methodTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{k.methodSubtitle}</p>
          </div>

          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {k.steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-accent pt-5">
                <span className="font-serif text-4xl font-bold text-accent">{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
            {k.safetyTitle}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{k.safetySubtitle}</p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {k.items.map((item, i) => {
            const Icon = SAFETY_ICONS[i % SAFETY_ICONS.length]
            return (
              <li key={item.title} className="flex items-start gap-5 bg-card p-6 shadow-sm md:p-8">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-accent/10 text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="border-t border-border/50 bg-muted py-20 text-center md:py-24">
        <div className="mx-auto max-w-3xl space-y-8 px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-5xl">
            {k.ctaTitle}
          </h2>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={whatsappButton}>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            {k.ctaButton}
          </a>
        </div>
      </section>
    </main>
  )
}
