import SanityClient from "@sanity/client";

export default class SanityService {
  _client = SanityClient({
    dataset: 'production',
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
  })

  async getHome() {
    return await this._client.fetch(
      `*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}`
      )

  }

  async getPosts() {
    return await this._client.fetch(`
    
    `)

  }
}