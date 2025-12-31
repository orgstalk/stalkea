import type { InstagramFeedResponse, StalkeaResponse } from '~/types/instagram'

export class StalkeaService {
    // Use local API proxy
    private static readonly BASE_URL = '/api'
    private static cache = new Map<string, StalkeaResponse['data']>()

    static async getProfile(username: string): Promise<StalkeaResponse['data']> {
        // Return cached data if available
        if (this.cache.has(username)) {
            return this.cache.get(username)!
        }

        try {
            const response = await fetch(`${this.BASE_URL}/instagram?username=${username}`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error('Failed to fetch profile')
            }

            const json = await response.json() as StalkeaResponse
            // Cache the successful response
            this.cache.set(username, json.data)
            return json.data
        } catch (error) {
            console.error('StalkeaService Error:', error)
            throw error
        }
    }
    static async getProfileFeed(username: string): Promise<InstagramFeedResponse> {
        // Return cached data if available
        // Note: Caching strategy might need adjustment since response type changed, 
        // but for now let's assume valid cache or just fetch fresh.
        // Simplified: always fetch for this new endpoint as it is "feed".

        try {
            const response = await fetch(`${this.BASE_URL}/instagram-feed?username=${username}`, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error('Failed to fetch profile feed')
            }

            const json = await response.json() as InstagramFeedResponse
            return json
        } catch (error) {
            console.error('StalkeaService Error:', error)
            throw error
        }
    }
}
