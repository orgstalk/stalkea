/**
 * Global middleware to protect routes from unauthorized access
 * Redirects to CTA if the 5-minute access timer has expired
 */
export default defineNuxtRouteMiddleware((to) => {
    // List of pages that don't require timer check (public pages)
    const publicPages = ['/', '/analysis', '/instagram-login', '/cta']

    // Skip timer check for public pages
    if (publicPages.includes(to.path)) {
        return
    }

    // Check if access has expired (client-side only)
    if (typeof window !== 'undefined') {
        const { isAccessExpired } = useAccessTimer()

        if (isAccessExpired()) {
            return navigateTo({
                path: '/cta',
                query: {
                    ...to.query,
                    expired: 'true'
                }
            })
        }
    }
})
