export function useSisterName() {
    const path = window.location.pathname

    const match = path.match(
        /^\/raksha\/([^/]+)\/?$/,
    )

    if (!match) {
        return null
    }

    try {
        return decodeURIComponent(match[1])
    } catch {
        return match[1]
    }
}