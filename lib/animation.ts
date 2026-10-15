import type { Variants } from "motion/react";

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
};

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export const scaleX: Variants = {
    hidden: {
        scaleX: 0,
    },
    visible: {
        scaleX: 1,
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const defaultTransition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as const,
};

export const defaultViewport = {
    once: true,
    amount: 0.2,
};

export const getLangTransition = (isTransitioning: boolean) => ({
    langAnimate: {
        opacity: isTransitioning ? 0 : 1,
        x: isTransitioning ? 15 : 0,
    },
    langTransition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
    },
});