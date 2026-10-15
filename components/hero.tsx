"use client"

import Link from "next/link"
import Image from "next/image" // <-- Importação obrigatória do Image
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden">

      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videosDunas.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/90">
          {t.hero?.tagline}
        </p>

        <h1 className="mb-4 flex w-full justify-center">
          <Image
            src="/logoTipografia.png" 
            alt="Chalé Marua"
            width={470}
            height={119} 
            className="object-contain w-full h-auto max-w-[85vw] md:max-w-[600px] lg:max-w-[750px] drop-shadow-md"
            priority
          />
        </h1>

        <p className="mb-6 max-w-lg text-lg text-white/90 md:text-xl">
          {t.hero?.subtitle}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 cursor-pointer bg-accent px-8 text-base font-semibold text-accent-foreground shadow-lg hover:bg-accent/90"
          >
            <Link href="/reserva" className="flex h-full w-full items-center justify-center">
              {t.hero?.cta}
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 cursor-pointer border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
          >
            <Link href="/o-chale" className="flex h-full w-full items-center justify-center">
              {t.hero?.secondary}
            </Link>
          </Button>
        </div>
      </div>

    </section>
  )
}