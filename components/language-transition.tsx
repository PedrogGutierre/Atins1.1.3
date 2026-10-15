"use client"

import { AnimatePresence, motion } from "motion/react"
import { ReactNode } from "react"
import { useLanguage } from "@/lib/i18n/language-context"

export function LanguageTransition({ children }: { children: ReactNode }) {
    const { language } = useLanguage()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={language} 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}