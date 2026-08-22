import Lenis from 'lenis'

let lenisInstance = null
let animationFrame = null

export function initSmoothScroll() {
    if (lenisInstance) {
        return lenisInstance
    }

    const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
        return null
    }

    lenisInstance = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
    })

    const raf = (time) => {
        lenisInstance?.raf(time)
        animationFrame = requestAnimationFrame(raf)
    }

    animationFrame = requestAnimationFrame(raf)

    return lenisInstance
}

export function destroySmoothScroll() {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
        animationFrame = null
    }

    lenisInstance?.destroy()
    lenisInstance = null
}

export function getSmoothScroll() {
    return lenisInstance
}