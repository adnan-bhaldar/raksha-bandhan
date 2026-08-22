import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useCinematicScene({
    containerRef,
    threadRef,
    contentRef,
    nameRef,
    greetingRef,
}) {
    useEffect(() => {
        const container = containerRef.current

        if (!container) {
            return undefined
        }

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches

        if (reduceMotion) {
            gsap.set(
                [
                    threadRef.current,
                    contentRef.current,
                    nameRef.current,
                    greetingRef.current,
                ],
                {
                    opacity: 1,
                },
            )

            return undefined
        }

        const context = gsap.context(() => {
            const introTimeline = gsap.timeline({
                defaults: {
                    ease: 'power3.out',
                },
            })

            introTimeline
                .fromTo(
                    threadRef.current,
                    {
                        opacity: 0,
                        strokeDashoffset: 1200,
                    },
                    {
                        opacity: 1,
                        strokeDashoffset: 0,
                        duration: 2.8,
                        ease: 'power2.inOut',
                    },
                )
                .fromTo(
                    contentRef.current,
                    {
                        opacity: 0,
                        y: 30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.4,
                    },
                    '-=1.2',
                )
                .fromTo(
                    nameRef.current,
                    {
                        opacity: 0,
                        y: 24,
                        filter: 'blur(12px)',
                    },
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 1.5,
                        ease: 'power3.out',
                    },
                    '-=0.65',
                )
                .fromTo(
                    greetingRef.current,
                    {
                        opacity: 0,
                        y: 18,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.1,
                    },
                    '-=0.7',
                )

            gsap.to('.scene-particle', {
                y: -120,
                opacity: 0.05,
                stagger: {
                    each: 0.08,
                    from: 'random',
                },
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.2,
                },
            })

            gsap.to(threadRef.current, {
                opacity: 0,
                scale: 1.08,
                scrollTrigger: {
                    trigger: container,
                    start: '35% top',
                    end: '75% top',
                    scrub: 1,
                },
            })

            gsap.to(contentRef.current, {
                y: -100,
                opacity: 0,
                scrollTrigger: {
                    trigger: container,
                    start: '45% top',
                    end: '85% top',
                    scrub: 1,
                },
            })
        }, container)

        return () => {
            context.revert()
        }
    }, [
        containerRef,
        threadRef,
        contentRef,
        nameRef,
        greetingRef,
    ])
}