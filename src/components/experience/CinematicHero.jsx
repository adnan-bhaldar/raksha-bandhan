import { ArrowDown } from 'lucide-react'

import { useHeroAnimation } from '../../hooks/useHeroAnimation'
import useSmoothScroll from '../../hooks/useSmoothScroll'

import MemorySequence from './MemorySequence'
import RakhiMoment from './RakhiMoment'
import PersonalLetter from './PersonalLetter'
import FinalWish from './FinalWish'

function CinematicHero({ sisterName }) {
    useSmoothScroll()
    useHeroAnimation()

    return (
        <>
            {/* =========================================
                HERO
               ========================================= */}

            <section
                data-hero
                className="hero-section relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24"
            >
                <div
                    className="hero-ambient"
                    aria-hidden="true"
                />

                <div
                    className="hero-rings"
                    aria-hidden="true"
                >
                    <div className="hero-ring hero-ring--outer" />
                    <div className="hero-ring hero-ring--middle" />
                    <div className="hero-ring hero-ring--inner" />
                </div>

                <div
                    className="hero-grain"
                    aria-hidden="true"
                />

                <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
                    <p
                        data-hero-reveal
                        data-hero-eyebrow
                        className="hero-eyebrow"
                    >
                        A little something for you
                    </p>

                    <h1
                        data-hero-reveal
                        data-hero-title
                        className="hero-title"
                    >
                        <span className="hero-title-line">
                            Dear
                        </span>

                        <span className="hero-title-name">
                            {sisterName}
                        </span>
                    </h1>

                    <p
                        data-hero-reveal
                        data-hero-copy
                        className="hero-copy"
                    >
                        For every childhood fight,
                        <br className="hidden sm:block" />
                        every shared secret, and every
                        <br className="hidden sm:block" />
                        memory I never want to forget.
                    </p>

                    <div
                        data-hero-reveal
                        data-hero-action
                        className="hero-action"
                    >
                        <span className="hero-action-dot" />

                        <span>
                            This one is for you
                        </span>
                    </div>
                </div>

                <div
                    data-hero-reveal
                    data-hero-scroll
                    className="hero-scroll"
                >
                    <span>Scroll to begin</span>

                    <ArrowDown
                        size={16}
                        strokeWidth={1.5}
                    />
                </div>
            </section>

            {/* =========================================
                STORY
               ========================================= */}

            <StorySection sisterName={sisterName} />

            {/* =========================================
                MEMORIES
               ========================================= */}

            <MemorySequence />

            {/* =========================================
                RAKHI MOMENT
               ========================================= */}

            <RakhiMoment />

            {/* =========================================
                PERSONAL LETTER
               ========================================= */}

            <PersonalLetter sisterName={sisterName} />

            {/* =========================================
                FINAL WISH
               ========================================= */}

            <FinalWish sisterName={sisterName} />
        </>
    )
}

function StorySection({ sisterName }) {
    return (
        <section
            data-story
            className="story-section"
        >
            <div
                className="story-glow"
                aria-hidden="true"
            />

            <div className="story-content">
                <p
                    data-story-reveal
                    className="story-eyebrow"
                >
                    To my sister
                </p>

                <h2
                    data-story-reveal
                    className="story-title"
                >
                    Some bonds are
                    <span>
                        simply irreplaceable.
                    </span>
                </h2>

                <div className="story-divider" />

                <p
                    data-story-reveal
                    className="story-text"
                >
                    {sisterName}, you have been part of
                    more moments of my life than I could
                    ever count.
                </p>

                <p
                    data-story-reveal
                    className="story-text story-text-muted"
                >
                    From the smallest arguments to the
                    biggest laughs, somehow every memory
                    became a part of our story.
                </p>
            </div>
        </section>
    )
}

export default CinematicHero
