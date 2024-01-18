interface Animes {
    pagination: {
        last_page: number,
        has_next_page: boolean,
        current_page: number,
        items: {
            count: number,
            total: number,   
            per_page: number
        }
     },
     data: [
        {
            id: number,
            image_url: string,
            small_image_url: string,
            large_image_url: string,
            genres: [
                        {
                            id: number | null,
                            name: string | null,
                            name_rus: string | null
                        }
                ],
            studios: [
                {
                    id: number | null,
                    name: string | null
                }
            ],
      trailer: {
        youtube_id: string,
        url: string,
        embed_url: string,
        image_url: string,
        small_image_url: string,
        medium_image_url: string,
        large_image_url: string,
        max_image_url: string
      },
      title: string,
      title_english: string,
      title_japanese: string,
      type: string | null,
      source: string | null,
      episodes: number | null,
      status: string | null,
      airing: Boolean | null,
      aired_from: string | null,
      aired_to: string | null,
      aired_str: string | null,
      duration: string | null,
      rating: string | null,
      score: number | null,
      synopsis: string | null,
      season: string | null,
      year: string | null
        }
     ]
}


export default defineEventHandler( async event => {
    const params = getQuery(event)
    const info: Animes = await $fetch(`http://localhost:8080/anime?filter=${params.filter}&sortBy=${params.sortBy}&limit=${params.limit}&type=${params.type}&page=${params.page}`)
    return info
})

