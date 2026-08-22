import { useEffect } from 'react'
import Lenis from 'lenis'

function useSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            syncTouch: false,
            autoRaf: false,
        })

        let frameId

        const raf = (time) => {
            lenis.raf(time)
            frameId = requestAnimationFrame(raf)
        }

        frameId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(frameId)
            lenis.destroy()
        }
    }, [])
}

export default useSmoothScroll