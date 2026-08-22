const MAX_NAME_LENGTH = 60

export function getSisterNameFromPath(pathname = window.location.pathname) {
    const segments = pathname
        .split('/')
        .filter(Boolean)

    if (segments.length !== 2 || segments[0].toLowerCase() !== 'raksha') {
        return null
    }

    const encodedName = segments[1]

    if (!encodedName) {
        return null
    }

    try {
        const decodedName = decodeURIComponent(encodedName)
            .replace(/\s+/g, ' ')
            .trim()

        if (!decodedName || decodedName.length > MAX_NAME_LENGTH) {
            return null
        }

        return decodedName
    } catch {
        return null
    }
}

export function formatSisterName(name) {
    if (!name) {
        return ''
    }

    return name
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .map((word) => {
            if (!word) {
                return ''
            }

            return word.charAt(0).toUpperCase() + word.slice(1)
        })
        .join(' ')
}

export function createPersonalizedUrl(name) {
    const cleanName = name
        .trim()
        .replace(/\s+/g, ' ')

    const encodedName = encodeURIComponent(cleanName)

    return `${window.location.origin}/raksha/${encodedName}`
}