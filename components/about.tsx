"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent md:text-sm">
              {t.homeAbout?.label}
            </p>

            <h2 className="font-serif text-2xl font-bold text-foreground text-balance md:text-3xl lg:text-4xl">
              {t.homeAbout?.title}
            </h2>

            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>{t.homeAbout?.p1}</p>
              <p>{t.homeAbout?.p2}</p>
            </div>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="h-12 cursor-pointer bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/o-chale" className="flex h-full w-full items-center justify-center">
                  {t.homeAbout?.btn}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] overflow-hidden  shadow-sm aspect-video lg:ml-auto lg:mr-0 lg:aspect-[4/3]">
            <Image
              src="/sua-foto-do-chale-ou-atins.jpg"
              alt="Vista de Atins e do CasaMarua"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}