import { useState } from 'react'
import { PenLine } from 'lucide-react'

function PersonalLetter({ sisterName }) {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <section
            data-letter
            className={`letter-section ${
                isOpened ? 'letter-section--opened' : ''
            }`}
        >
            <div
                className="letter-background"
                aria-hidden="true"
            />

            <div className="letter-content">
                <p
                    data-letter-reveal
                    className="letter-eyebrow"
                >
                    Something I wanted to say
                </p>

                <h2
                    data-letter-reveal
                    className="letter-heading"
                >
                    A few words,
                    <span>from my heart.</span>
                </h2>

                <div
                    data-letter-card
                    className="letter-card"
                >
                    <div
                        className="letter-card__texture"
                        aria-hidden="true"
                    />

                    <div className="letter-card__corner letter-card__corner--top-left" />
                    <div className="letter-card__corner letter-card__corner--top-right" />
                    <div className="letter-card__corner letter-card__corner--bottom-left" />
                    <div className="letter-card__corner letter-card__corner--bottom-right" />

                    <div
                        className="letter-flap"
                        aria-hidden="true"
                    >
                        <div className="letter-flap__inner" />
                    </div>

                    <div className="letter-card__header">
                        <span>Raksha Bandhan</span>

                        <PenLine
                            size={17}
                            strokeWidth={1.25}
                        />
                    </div>

                    <div className="letter-card__body">
                        <p className="letter-greeting">
                            Dear {sisterName},
                        </p>

                        <p>
                            I don't always say it, but having you
                            as my sister is one of those gifts I
                            could never put a price on.
                        </p>

                        <p>
                            We have grown up together, changed
                            together, annoyed each other more
                            times than we can count, and still
                            somehow remained on the same team.
                        </p>

                        <p>
                            And maybe that's what makes being
                            siblings so special.
                        </p>

                        <p>
                            No matter how much life changes,
                            there will always be a part of me
                            that remembers the little things we
                            shared growing up.
                        </p>

                        <p className="letter-emphasis">
                            Thank you for being you.
                        </p>

                        <div className="letter-signature">
                            <span>Always your brother,</span>
                            <strong>With love ♥</strong>
                        </div>
                    </div>

                    <button
                        type="button"
                        className={`letter-seal ${
                            isOpened ? 'letter-seal--opened' : ''
                        }`}
                        onClick={() =>
                            setIsOpened((value) => !value)
                        }
                        aria-label={
                            isOpened
                                ? 'Close the letter'
                                : 'Open the letter'
                        }
                        aria-pressed={isOpened}
                    >
                        <span className="letter-seal__outer">
                            <span className="letter-seal__wax">
                                <span className="letter-seal__inner">
                                    ♥
                                </span>
                            </span>
                        </span>
                    </button>
                </div>

                <p
                    data-letter-reveal
                    className="letter-hint"
                >
                    {isOpened
                        ? 'A little piece of my heart'
                        : 'Tap the seal'}
                </p>
            </div>
        </section>
    )
}

export default PersonalLetter