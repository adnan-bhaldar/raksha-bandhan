import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHeroAnimation() {
    useLayoutEffect(() => {
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches

        const root = document.querySelector(
            '[data-experience]',
        )

        if (!root) {
            return undefined
        }

        if (reduceMotion) {
            gsap.set(
                root.querySelectorAll(
                    [
                        '[data-reveal]',
                        '[data-memory-reveal]',
                        '[data-memory-item]',
                        '[data-rakhi-reveal]',
                        '[data-letter-reveal]',
                        '[data-letter-card]',
                        '[data-final-reveal]',
                        '.final-wish__heart',
                    ],
                ),
                {
                    clearProps: 'all',
                    opacity: 1,
                },
            )

            return undefined
        }

        const context = gsap.context(() => {
            /*
             * --------------------------------------------------
             * HERO INTRO
             * --------------------------------------------------
             */

            const heroElements = root.querySelectorAll(
                '[data-hero-reveal]',
            )

            gsap.set(heroElements, {
                opacity: 0,
                y: 32,
            })

            const intro = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                },
            })

            intro
                .to('[data-hero-eyebrow]', {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                })
                .to(
                    '[data-hero-title]',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.15,
                    },
                    '-=0.45',
                )
                .to(
                    '[data-hero-copy]',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                    },
                    '-=0.55',
                )
                .to(
                    '[data-hero-action]',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                    },
                    '-=0.45',
                )
                .to(
                    '[data-hero-scroll]',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                    },
                    '-=0.3',
                )

            /*
             * --------------------------------------------------
             * HERO SCROLL
             * --------------------------------------------------
             */

            const hero = root.querySelector(
                '[data-hero]',
            )

            if (hero) {
                gsap.to(hero, {
                    opacity: 0.15,
                    scale: 0.94,
                    scrollTrigger: {
                        trigger: hero,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    },
                })
            }

            /*
             * --------------------------------------------------
             * HERO RINGS
             * --------------------------------------------------
             */

            const rings = root.querySelector(
                '.hero-rings',
            )

            if (rings) {
                gsap.to(rings, {
                    rotation: 18,
                    scale: 1.12,
                    scrollTrigger: {
                        trigger: hero,
                        start: 'top top',
                        end: 'bottom top',
                        scrub: 1.2,
                    },
                })
            }

            /*
             * --------------------------------------------------
             * STORY REVEAL
             * --------------------------------------------------
             */

            const story =
                root.querySelector('[data-story]')

            const storyElements =
                root.querySelectorAll(
                    '[data-story-reveal]',
                )

            gsap.set(storyElements, {
                opacity: 0,
                y: 50,
            })

            if (story) {
                const storyTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: story,
                        start: 'top 75%',
                        end: 'top 25%',
                        scrub: 0.8,
                    },
                })

                storyTimeline.to(storyElements, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.12,
                    ease: 'power2.out',
                })
            }

            /*
             * --------------------------------------------------
             * MEMORY INTRO
             * --------------------------------------------------
             */

            const memory =
                root.querySelector('[data-memory]')

            if (!memory) {
                return
            }

            const memoryIntro =
                memory.querySelectorAll(
                    '[data-memory-reveal]',
                )

            gsap.set(memoryIntro, {
                opacity: 0,
                y: 45,
            })

            const memoryIntroTimeline =
                gsap.timeline({
                    scrollTrigger: {
                        trigger: memory,
                        start: 'top 72%',
                        end: 'top 35%',
                        scrub: 0.7,
                    },
                })

            memoryIntroTimeline.to(memoryIntro, {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                ease: 'power2.out',
            })

            /*
 * --------------------------------------------------
 * MEMORY ITEMS
 * --------------------------------------------------
 */

const items = memory.querySelectorAll(
    '[data-memory-item]',
)

gsap.set(items, {
    opacity: 0,
    y: 40,
})

items.forEach((item) => {
    gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: item,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
        },
    })
})

            /*
             * --------------------------------------------------
             * MEMORY CENTERPIECE
             * --------------------------------------------------
             */

            const centerpiece =
                memory.querySelector(
                    '.memory-centerpiece',
                )

            if (centerpiece) {
                gsap.to(centerpiece, {
                    yPercent: -12,
                    rotation: 8,
                    scrollTrigger: {
                        trigger: memory,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.4,
                    },
                })
            }

            /*
             * --------------------------------------------------
             * ORBIT
             * --------------------------------------------------
             */

            const orbit =
                memory.querySelector('.memory-orbit')

            if (orbit) {
                gsap.to(orbit, {
                    rotation: 90,
                    scrollTrigger: {
                        trigger: memory,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 2,
                    },
                })
            }
        }, root)
        /*
 * --------------------------------------------------
 * RAKHI MOMENT
 * --------------------------------------------------
 */

        const rakhi = root.querySelector(
            '[data-rakhi]',
        )

        if (rakhi) {
            const revealElements =
                rakhi.querySelectorAll(
                    '[data-rakhi-reveal]',
                )

            gsap.set(revealElements, {
                opacity: 0,
                y: 45,
            })

            const rakhiTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: rakhi,
                    start: 'top 72%',
                    end: 'top 32%',
                    scrub: 0.8,
                },
            })

            rakhiTimeline.to(revealElements, {
                opacity: 1,
                y: 0,
                stagger: 0.14,
                ease: 'power2.out',
            })

            const rakhiObject =
                rakhi.querySelector('.rakhi-object')

            if (rakhiObject) {
                gsap.fromTo(
                    rakhiObject,
                    {
                        scale: 0.72,
                        rotation: -8,
                    },
                    {
                        scale: 1,
                        rotation: 0,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: rakhi,
                            start: 'top 85%',
                            end: 'top 35%',
                            scrub: 1,
                        },
                    },
                )
            }

            const halo =
                rakhi.querySelector(
                    '.rakhi-object__halo',
                )

            if (halo) {
                gsap.to(halo, {
                    scale: 1.18,
                    opacity: 0.8,
                    scrollTrigger: {
                        trigger: rakhi,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    },
                })
            }
        }

        /*
 * --------------------------------------------------
 * PERSONAL LETTER
 * --------------------------------------------------
 */

        const letter = root.querySelector(
            '[data-letter]',
        )

        if (letter) {
            const revealElements =
                letter.querySelectorAll(
                    '[data-letter-reveal]',
                )

            gsap.set(revealElements, {
                opacity: 0,
                y: 40,
            })

            const letterTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: letter,
                    start: 'top 75%',
                    end: 'top 35%',
                    scrub: 0.8,
                },
            })

            letterTimeline.to(revealElements, {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                ease: 'power2.out',
            })

            const card =
                letter.querySelector(
                    '[data-letter-card]',
                )

            if (card) {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 90,
                        rotation: -2.5,
                        scale: 0.96,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotation: 0,
                        scale: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: letter,
                            start: 'top 82%',
                            end: 'top 38%',
                            scrub: 1,
                        },
                    },
                )
            }
        }

        /*
 * --------------------------------------------------
 * FINAL WISH
 * --------------------------------------------------
 */

        const finalWish = root.querySelector(
            '[data-final-wish]',
        )

        if (finalWish) {
            const revealElements =
                finalWish.querySelectorAll(
                    '[data-final-reveal]',
                )

            gsap.set(revealElements, {
                opacity: 0,
                y: 45,
            })

            gsap.timeline({
                scrollTrigger: {
                    trigger: finalWish,
                    start: 'top 75%',
                    end: 'top 35%',
                    scrub: 0.8,
                },
            }).to(revealElements, {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                ease: 'power2.out',
            })

            const heart =
                finalWish.querySelector(
                    '.final-wish__heart',
                )

            if (heart) {
                gsap.fromTo(
                    heart,
                    {
                        opacity: 0,
                        scale: 0.7,
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        ease: 'back.out(1.6)',
                        scrollTrigger: {
                            trigger: finalWish,
                            start: 'top 65%',
                            end: 'top 40%',
                            scrub: 0.8,
                        },
                    },
                )
            }

            const glow =
                finalWish.querySelector(
                    '.final-wish__glow',
                )

            if (glow) {
                gsap.to(glow, {
                    scale: 1.3,
                    opacity: 0.85,
                    scrollTrigger: {
                        trigger: finalWish,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.5,
                    },
                })
            }
        }

        return () => {
            context.revert()
        }
    }, [])
}