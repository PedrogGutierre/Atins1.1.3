"use client"

import Image from "next/image"
import Link from "next/link"
import { Compass, Map, Wind, Bird } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/i18n/language-context"

export default function ExperienciasPage() {
  const { t } = useLanguage()

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* 1. HERO DA PÁGINA */}
      <section className="relative h-[40vh] w-full min-h-[350px]">
        <div className="absolute inset-0 bg-muted">
          <Image
            src="/sua-foto-dunas-hero.jpg"
            alt="Paisagem dos Lençóis Maranhenses"
            fill
            className="object-cover opacity-90 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-accent">
            {t.experiencePage?.heroTagline}
          </p>
          <h1 className="font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            {t.experiencePage?.heroTitle}
          </h1>
        </div>
      </section>

      {/* 2. KITESURF (Texto Esquerda / Foto Direita) */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center  bg-accent/10 text-accent">
              <Wind className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {t.experiencePage?.kiteTitle}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>{t.experiencePage?.kiteP1}</p>
              <p>{t.experiencePage?.kiteP2}</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden  shadow-md">
            <Image
              src="/images/kite.jpg"
              alt="Prática de Kitesurf em Atins"
              fill
              className=" object-cover object-[center_9%] transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 3. LENÇÓIS MARANHENSES & QUADRICICLO (Foto Esquerda / Texto Direita) */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] w-full overflow-hidden  shadow-md order-2 lg:order-1">
              <Image
                src="/images/cardune.jpg"
                alt="Lagoas dos Lençóis Maranhenses"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex h-12 w-12 items-center justify-center  bg-accent/10 text-accent">
                <Map className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                {t.experiencePage?.dunesTitle}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>{t.experiencePage?.dunesP1}</p>
                <p>{t.experiencePage?.dunesP2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REVOADA DOS GUARÁS (Texto Esquerda / Foto Direita) */}
      <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex h-12 w-12 items-center justify-center  bg-accent/10 text-accent">
              <Bird className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              {t.experiencePage?.birdsTitle}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>{t.experiencePage?.birdsP1}</p>
              <p>{t.experiencePage?.birdsP2}</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden  shadow-md">
            <Image
              src="/images/ibis.jpg"
              alt="Revoada dos Guarás no Rio Preguiças"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION - RESERVAS */}
      <section className="bg-muted py-24 text-center border-t border-border/50">
        <div className="mx-auto max-w-3xl px-4 space-y-8">
          <Compass className="mx-auto h-12 w-12 text-accent opacity-80" />
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            {t.experiencePage?.ctaTitle}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.experiencePage?.ctaSubtitle}
          </p>
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-lg font-bold bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/reserva">
              {t.experiencePage?.ctaButton}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}