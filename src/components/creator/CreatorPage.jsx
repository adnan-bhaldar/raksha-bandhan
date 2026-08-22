import { useState } from 'react'
import { ArrowRight, Check, Copy, Heart, Share2 } from 'lucide-react'
import { motion } from 'motion/react'
import { createPersonalizedUrl } from '../../utils/personalization'

function CreatorPage() {
    const [name, setName] = useState('')
    const [generatedUrl, setGeneratedUrl] = useState('')
    const [copied, setCopied] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        const cleanName = name
            .trim()
            .replace(/\s+/g, ' ')

        if (!cleanName) {
            return
        }

        const url = createPersonalizedUrl(cleanName)

        setGeneratedUrl(url)
        setCopied(false)
    }

    const handleCopy = async () => {
        if (!generatedUrl) {
            return
        }

        try {
            await navigator.clipboard.writeText(generatedUrl)

            setCopied(true)

            window.setTimeout(() => {
                setCopied(false)
            }, 2000)
        } catch {
            setCopied(false)
        }
    }

    const handleShare = async () => {
        if (!generatedUrl) {
            return
        }

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'A little Raksha Bandhan surprise ❤️',
                    text: 'I made a little Raksha Bandhan surprise for you ❤️',
                    url: generatedUrl,
                })
            } catch {
                // User cancelled the share sheet.
            }

            return
        }

        await handleCopy()
    }

    return (
        <main className="creator-page">
            <div className="creator-page__glow creator-page__glow--one" />
            <div className="creator-page__glow creator-page__glow--two" />

            <div className="creator-page__grain" />

            <section className="creator-hero">
                <motion.div
                    className="creator-hero__content"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                >
                    <motion.div
                        className="creator-mark"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <Heart size={15} strokeWidth={1.5} />
                    </motion.div>

                    <p className="cinematic-eyebrow">
                        Raksha Bandhan
                    </p>

                    <h1 className="creator-title">
                        Make Raksha Bandhan
                        <span>unforgettable.</span>
                    </h1>

                    <p className="creator-description">
                        Create a little interactive surprise
                        for your sister.
                    </p>

                    <motion.form
                        className="creator-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <label
                            className="sr-only"
                            htmlFor="sister-name"
                        >
                            Your sister's name
                        </label>

                        <div className="creator-input-wrap">
                            <input
                                id="sister-name"
                                type="text"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                    setGeneratedUrl('')
                                }}
                                placeholder="Enter your sister's name"
                                maxLength={60}
                                autoComplete="off"
                            />

                            <button
                                type="submit"
                                disabled={!name.trim()}
                                aria-label="Create her surprise"
                            >
                                <ArrowRight
                                    size={18}
                                    strokeWidth={1.7}
                                />
                            </button>
                        </div>

                        <p className="creator-form__hint">
                            No account. No uploads. Just a little
                            surprise.
                        </p>
                    </motion.form>

                    {generatedUrl && (
                        <motion.div
                            className="creator-result"
                            initial={{
                                opacity: 0,
                                y: 20,
                                scale: 0.98,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.65,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <div className="creator-result__heading">
                                <span className="creator-result__dot">
                                    <Check size={11} />
                                </span>

                                <span>
                                    Your surprise is ready
                                </span>
                            </div>

                            <div className="creator-result__url">
                                {generatedUrl}
                            </div>

                            <div className="creator-result__actions">
                                <button
                                    type="button"
                                    className="creator-action creator-action--primary"
                                    onClick={handleShare}
                                >
                                    <Share2 size={15} />
                                    Share
                                </button>

                                <button
                                    type="button"
                                    className="creator-action"
                                    onClick={handleCopy}
                                >
                                    {copied ? (
                                        <>
                                            <Check size={15} />
                                            Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={15} />
                                            Copy Link
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </section>

            <div className="creator-footer">
                <span>Made with</span>

                <Heart
                    size={11}
                    fill="currentColor"
                    strokeWidth={1.5}
                />

                <span>for a special bond</span>
            </div>
        </main>
    )
}

export default CreatorPage