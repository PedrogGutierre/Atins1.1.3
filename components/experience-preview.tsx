"use client"

import Image from "next/image"
import Link from "next/link"
import { Wind, Globe, BookOpen, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"

export function ExperiencePreview() {
  const { t } = useLanguage()

  const experiences = [
    { icon: Wind, title: t.experiencePreview?.kiteTitle, description: t.experiencePreview?.kiteDesc },
    { icon: Globe, title: t.experiencePreview?.dunesTitle, description: t.experiencePreview?.dunesDesc },
    { icon: Sparkles, title: t.experiencePreview?.natureTitle, description: t.experiencePreview?.natureDesc },
  ]

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dunas.jpg"
          alt="Fundo de experiências"
          fill
          className="object-cover pointer-events-none"
        />
        <div className="absolute inset-0 bg-background/50"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            {t.experiencePreview?.title}
          </h2>
        </div>

        {/* Alterado para flex com justify-center para alinhar perfeitamente no centro */}
        <div className="flex flex-wrap justify-center gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-background p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-border/40 w-full sm:w-[350px] lg:w-[380px]"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center bg-accent/10 text-accent">
                <exp.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">
                {exp.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            asChild
            className="group h-14 cursor-pointer bg-accent px-8 text-lg text-accent-foreground shadow-md transition-all hover:bg-accent/90"
          >
            <Link href="/experience" className="flex w-full h-full items-center justify-center gap-2">
              {t.experiencePreview?.btn}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}