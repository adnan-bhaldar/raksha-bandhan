import { useEffect, useRef } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'

function RakhiMoment() {
    const sectionRef = useRef(null)
    const rakhiRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const rakhi = rakhiRef.current

        if (!section || !rakhi) return

        const ctx = gsap.context(() => {
            gsap.fromTo(
                rakhi,
                {
                    opacity: 0,
                    scale: 0.72,
                    y: 40,
                    rotate: -8,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotate: 0,
                    duration: 1.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 72%',
                        once: true,
                    },
                },
            )

            gsap.to('.rakhi-orbit', {
                rotate: 360,
                duration: 28,
                repeat: -1,
                ease: 'none',
            })

            gsap.to('.rakhi-orbit--reverse', {
                rotate: -360,
                duration: 36,
                repeat: -1,
                ease: 'none',
            })

            gsap.to('.rakhi-glow', {
                scale: 1.12,
                opacity: 0.7,
                duration: 2.8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            })
        }, section)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            data-rakhi
            className="rakhi-section"
        >
            <div
                className="rakhi-background"
                aria-hidden="true"
            />

            <div
                className="rakhi-grain"
                aria-hidden="true"
            />

            <div className="rakhi-content">
                <div className="rakhi-copy">
                    <p
                        data-rakhi-reveal
                        className="rakhi-eyebrow"
                    >
                        A thread that means everything
                    </p>

                    <h2
                        data-rakhi-reveal
                        className="rakhi-heading"
                    >
                        More than a
                        <span>thread.</span>
                    </h2>

                    <p
                        data-rakhi-reveal
                        className="rakhi-description"
                    >
                        A little symbol of a bond that
                        grows stronger with every year,
                        every laugh, and every memory.
                    </p>
                </div>

                <div
                    ref={rakhiRef}
                    className="rakhi-display"
                >
                    <div
                        className="rakhi-glow"
                        aria-hidden="true"
                    />

                    <div
                        className="rakhi-orbit rakhi-orbit--outer"
                        aria-hidden="true"
                    >
                        <span />
                        <span />
                        <span />
                    </div>

                    <div
                        className="rakhi-orbit rakhi-orbit--reverse rakhi-orbit--middle"
                        aria-hidden="true"
                    >
                        <span />
                        <span />
                    </div>

                    <div
                        className="rakhi-thread rakhi-thread--left"
                        aria-hidden="true"
                    />

                    <div
                        className="rakhi-thread rakhi-thread--right"
                        aria-hidden="true"
                    />

                    <div className="rakhi-jewel">
                        <div className="rakhi-jewel__outer">
                            <div className="rakhi-jewel__gold">
                                <div className="rakhi-jewel__inner">
                                    <div className="rakhi-jewel__stone">
                                        <Heart
                                            size={25}
                                            strokeWidth={1.15}
                                            fill="currentColor"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rakhi-jewel__sparkle rakhi-jewel__sparkle--one">
                            <Sparkles size={14} strokeWidth={1.1} />
                        </div>

                        <div className="rakhi-jewel__sparkle rakhi-jewel__sparkle--two">
                            <Sparkles size={10} strokeWidth={1.1} />
                        </div>
                    </div>

                    <div
                        className="rakhi-thread-detail rakhi-thread-detail--left"
                        aria-hidden="true"
                    >
                        <span />
                        <span />
                        <span />
                    </div>

                    <div
                        className="rakhi-thread-detail rakhi-thread-detail--right"
                        aria-hidden="true"
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>

                <p className="rakhi-caption">
                    <span />
                    Tied with love
                    <span />
                </p>
            </div>
        </section>
    )
}

export default RakhiMoment