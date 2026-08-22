function Scene01({ sisterName }) {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090706] px-6">
            <div className="relative z-10 max-w-4xl text-center">
                <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/40">
                    Happy Raksha Bandhan
                </p>

                <h1 className="font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
                    Dear{' '}
                    <span className="italic text-[#d9b477]">
                        {sisterName}
                    </span>
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
                    Some bonds are not measured by words.
                    They are felt in every little moment,
                    every argument, every laugh, and every memory.
                </p>
            </div>

            <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
            >
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a86b35]/10 blur-[120px]" />
            </div>
        </section>
    )
}

export default Scene01