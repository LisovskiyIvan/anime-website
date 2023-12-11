


export default defineEventHandler( async event => {
    const params = getQuery(event)
    console.log(params)
   
    const info = await $fetch(`https://api.jikan.moe/v4/top/anime?filter=${params.filter}&limit=${params.limit}&page=${params.page}&sfw=true`)

    return {info}
    
})