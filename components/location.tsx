"use client"

import { MapPin, Navigation, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function Location() {
  const { t } = useLanguage()

  return (
    <section id="location" className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {t.location?.label || "Localização"}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
            {t.location?.title || "Onde estamos"}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.location?.subtitle}</p>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-5">

          <div className="relative overflow-hidden border border-border/60 shadow-md transition-all duration-300 hover:shadow-lg md:col-span-3 min-h-[380px]">
            <iframe
              title="Mapa Casa Marua Atins"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-42.7565%2C-2.5725%2C-42.7475%2C-2.5685&layer=mapnik&marker=-2.5704661%2C-42.7521186"
              className="absolute left-0 top-0 h-[calc(100%+50px)] w-full border-0 transition-all duration-500"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 bg-card p-8 shadow-sm md:col-span-2">

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 bg-accent/10 items-center justify-center text-accent">
                <Waves className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-card-foreground">A 3 minutos da praia</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Acesso rápido e fácil ao mar, perfeito para ir e voltar a pé.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 bg-accent/10 items-center justify-center text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-medium text-card-foreground">{t.location?.title || "Onde estamos"}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.location?.address || "Rua das Dunas, Atins - Maranhão"}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                asChild
                className="group h-14 w-full cursor-pointer bg-accent text-lg text-accent-foreground shadow-md transition-all hover:bg-accent/90"
              >
                <a
                  href="https://www.google.com/maps/search/?api=1&query=-2.5704661,-42.7521186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full items-center justify-center gap-2"
                >
                  <span>{t.location?.directions || "Como chegar"}</span>
                  <Navigation className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}