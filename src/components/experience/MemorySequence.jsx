import { motion } from 'motion/react'
import { Heart, Sparkles } from 'lucide-react'

const memories = [
    {
        number: '01',
        text: 'The little arguments',
    },
    {
        number: '02',
        text: 'The uncontrollable laughs',
    },
    {
        number: '03',
        text: 'The secrets only we know',
    },
    {
        number: '04',
        text: 'The moments that became memories',
    },
]

const revealTransition = {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1],
}

function MemorySequence() {
    return (
        <section
            data-memory
            className="memory-section"
        >
            <div
                className="memory-background"
                aria-hidden="true"
            />

            <div
                className="memory-orbit"
                aria-hidden="true"
            >
                <span className="memory-orbit__dot memory-orbit__dot--one" />
                <span className="memory-orbit__dot memory-orbit__dot--two" />
                <span className="memory-orbit__dot memory-orbit__dot--three" />
            </div>

            <div className="memory-container">
                <div className="memory-intro">
                    <motion.span
                        data-memory-reveal
                        className="memory-eyebrow"
                        initial={{
                            opacity: 0,
                            y: 24,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.6,
                        }}
                        transition={revealTransition}
                    >
                        Through the years
                    </motion.span>

                    <motion.h2
                        data-memory-reveal
                        className="memory-heading"
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            ...revealTransition,
                            delay: 0.08,
                        }}
                    >
                        It was never
                        <span>just one moment.</span>
                    </motion.h2>

                    <motion.p
                        data-memory-reveal
                        className="memory-description"
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                        transition={{
                            ...revealTransition,
                            delay: 0.16,
                        }}
                    >
                        It was all the tiny moments that
                        quietly became our story.
                    </motion.p>
                </div>

                <div className="memory-centerpiece">
                    <div
                        className="memory-centerpiece__glow"
                        aria-hidden="true"
                    />

                    <div className="memory-centerpiece__ring memory-centerpiece__ring--outer">
                        <Sparkles
                            size={15}
                            strokeWidth={1}
                        />
                    </div>

                    <div className="memory-centerpiece__ring memory-centerpiece__ring--inner">
                        <Heart
                            size={22}
                            strokeWidth={1.15}
                        />
                    </div>

                    <div className="memory-centerpiece__core">
                        <span>∞</span>
                    </div>
                </div>

                <div className="memory-list">
                    {memories.map((memory, index) => (
                        <motion.article
                            key={memory.number}
                            data-memory-item
                            className="memory-item"
                            initial={{
                                opacity: 0,
                                y: 50,
                                filter: 'blur(8px)',
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                            }}
                            viewport={{
                                once: true,
                                amount: 0.7,
                            }}
                            transition={{
                                duration: 0.85,
                                delay: index * 0.16,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <span className="memory-number">
                                {memory.number}
                            </span>

                            <span className="memory-item-line" />

                            <p>{memory.text}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MemorySequence