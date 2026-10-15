"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

export function GalleryCarousel({ images }: { images: string[] }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    if (!images || images.length === 0) return null

    return (
        <div className="group relative mx-auto w-full max-w-[900px] aspect-[4/3] md:aspect-video overflow-hidden rounded-2xl bg-black/5 shadow-lg">

            <AnimatePresence initial={false}>
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[activeIndex]}
                        alt={`Imagem ${activeIndex + 1} da Galeria`}
                        fill
                        className="object-cover select-none"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            <button
                onClick={handlePrev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 active:scale-95 md:opacity-0 md:group-hover:opacity-100"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>

            <button
                onClick={handleNext}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/70 hover:scale-110 active:scale-95 md:opacity-0 md:group-hover:opacity-100"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex
                                ? "w-4 bg-white shadow-sm"
                                : "w-1.5 bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>

        </div>
    )
}