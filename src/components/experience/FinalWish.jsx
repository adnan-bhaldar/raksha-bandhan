import { Heart, Sparkles } from 'lucide-react'
import { useState } from 'react'

function FinalWish({ sisterName }) {
    const [wished, setWished] = useState(false)

    return (
        <section
            data-final-wish
            className={`final-wish ${wished ? 'final-wish--active' : ''
                }`}
        >
            <div
                className="final-wish__glow"
                aria-hidden="true"
            />

            <div
                className="final-wish__particles"
                aria-hidden="true"
            >
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>

            <div className="final-wish__content">
                <div
                    data-final-reveal
                    className="final-wish__icon"
                    aria-hidden="true"
                >
                    <Sparkles
                        size={16}
                        strokeWidth={1.2}
                    />
                </div>

                <p
                    data-final-reveal
                    className="final-wish__eyebrow"
                >
                    One last wish
                </p>

                <h2
                    data-final-reveal
                    className="final-wish__title"
                >
                    May you always
                    <span>have a reason to smile.</span>
                </h2>

                <p
                    data-final-reveal
                    className="final-wish__message"
                >
                    And whenever life gets a little
                    difficult, I hope you remember that
                    you will always have someone
                    standing beside you.
                </p>

                <p
                    data-final-reveal
                    className="final-wish__name"
                >
                    Happy Raksha Bandhan,
                    <span>{sisterName}.</span>
                </p>

                <button
                    type="button"
                    className="final-wish__heart"
                    onClick={() =>
                        setWished((value) => !value)
                    }
                    aria-label={
                        wished
                            ? 'Wish sent'
                            : 'Send your wish'
                    }
                    aria-pressed={wished}
                >
                    <span className="final-wish__heart-ring">
                        <span className="final-wish__heart-core">
                            <Heart
                                size={25}
                                strokeWidth={1.2}
                                fill={wished ? 'currentColor' : 'none'}
                            />
                        </span>
                    </span>
                </button>

                <p className="final-wish__hint">
                    {wished
                        ? 'Wish sent with love'
                        : 'Send a little love'}
                </p>
            </div>
        </section>
    )
}

export default FinalWish