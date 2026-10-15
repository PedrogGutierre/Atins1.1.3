"use client"

import Image from "next/image"
import Link from "next/link"
import { Wind, Wifi, Coffee, BedDouble, Droplets, Waves, Check, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/i18n/language-context"

export default function ChalePage() {
    const { t } = useLanguage()

    return (
        <main className="flex min-h-screen flex-col bg-background">
            <Navbar />

            {/* 1. HERO SECTION (Cabeçalho) */}
            <section className="relative h-[60vh] w-full min-h-[400px]">
                <div className="absolute inset-0 bg-muted">
                    <Image
                        src="/images/chalemarua.png"
                        alt="Interior do CasaMarua"
                        fill
                        className="object-cover opacity-80 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/80">
                        {t.chalePage?.heroTagline}
                    </p>
                    <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
                        {t.chalePage?.heroTitle}
                    </h1>
                </div>
            </section>

            {/* 2. O CONCEITO / SOBRE O CHALÉ */}
            <section className="mx-auto max-w-6xl px-4 py-10 md:py-14 text-center md:text-left">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div className="space-y-4">
                        {/* Tags de Destaque (Distância e Capacidade) */}
                        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                            <div className="inline-flex items-center gap-2  bg-accent/10 px-3 py-1 text-xs font-semibold text-accent sm:text-sm">
                                <Waves className="h-3.5 w-3.5" />
                                <span>{t.chalePage?.distBeach}</span>
                            </div>
                            <div className="inline-flex items-center gap-2  bg-accent/10 px-3 py-1 text-xs font-semibold text-accent sm:text-sm">
                                <Users className="h-3.5 w-3.5" />
                                <span>{t.chalePage?.capacity}</span>
                            </div>
                        </div>

                        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                            {t.chalePage?.conceptTitle}
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            {t.chalePage?.conceptP1}
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            {t.chalePage?.conceptP2}
                        </p>
                    </div>
                    <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden  shadow-lg md:max-w-[360px]">
                        <Image
                            src="/images/chalemarua.png"
                            alt="Detalhe do chalé CasaMarua"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 3. COMODIDADES (AMENITIES) */}
            <section className="bg-muted/30 py-20">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="mb-12 text-center">
                        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                            {t.chalePage?.amenitiesTitle}
                        </h2>
                        <p className="mt-4 text-muted-foreground">{t.chalePage?.amenitiesSubtitle}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                        {[
                            { icon: BedDouble, text: t.chalePage?.amenities.bed },
                            { icon: Wind, text: t.chalePage?.amenities.ac },
                            { icon: Wifi, text: t.chalePage?.amenities.wifi },
                            { icon: Droplets, text: t.chalePage?.amenities.shower },
                            { icon: Coffee, text: t.chalePage?.amenities.breakfast },
                            { icon: Waves, text: t.chalePage?.amenities.beach },
                            { icon: Check, text: t.chalePage?.amenities.linens },
                            { icon: Check, text: t.chalePage?.amenities.minibar },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-3  bg-background p-6 shadow-sm border border-border/50 text-center transition-all hover:border-accent">
                                <item.icon className="h-8 w-8 text-accent opacity-80" />
                                <span className="text-sm font-medium text-foreground">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. GALERIA DE FOTOS */}
            <section className="mx-auto max-w-6xl px-4 py-20 md:py-28">
                <div className="mb-12 text-center">
                    <h2 className="font-serif text-3xl font-bold text-foreground">{t.chalePage?.galleryTitle}</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                    <div className="aspect-square  bg-muted transition-transform hover:scale-[1.02]" />
                    <div className="aspect-[3/4]  bg-muted transition-transform hover:scale-[1.02] md:col-span-2 md:row-span-2" />
                    <div className="aspect-square  bg-accent/10 transition-transform hover:scale-[1.02]" />
                    <div className="aspect-square  bg-muted transition-transform hover:scale-[1.02]" />
                    <div className="aspect-[4/3]  bg-accent/20 transition-transform hover:scale-[1.02] md:col-span-2" />
                </div>
            </section>

            {/* 5. CALL TO ACTION FINAL */}
            <section className="bg-accent py-24 text-center">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="mb-6 font-serif text-3xl font-bold text-accent-foreground md:text-5xl">
                        {t.chalePage?.ctaTitle}
                    </h2>
                    <p className="mb-10 text-lg text-accent-foreground/80">
                        {t.chalePage?.ctaSubtitle}
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className=" bg-background px-8 py-6 text-lg text-foreground shadow-xl transition-transform hover:-translate-y-1 hover:bg-background/90"
                    >
                        <Link href="/reserva">
                            {t.chalePage?.ctaButton}
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}