"use client"

import { GalleryCarousel } from "@/components/gallery-carousel"
import { useLanguage } from "@/lib/i18n/language-context"

export function Gallery() {
  const { t } = useLanguage()

  const chaletImages = [
    "/images/exterior.png",
    "/images/bedroom.png",
    "/images/kitchen.png",
    "/images/deck.png",
    "/images/beach.png",
  ]

  return (
    <section id="gallery" className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {t.gallery.label}
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground text-balance md:text-4xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.gallery.subtitle}
          </p>
        </div>

        <GalleryCarousel images={chaletImages} />

      </div>
    </section>
  )
}