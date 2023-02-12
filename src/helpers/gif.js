
import { URL_GIPHY_SEARCH } from '../config'

export const getGifs = async( category ) => {
    const url = `${ URL_GIPHY_SEARCH }&q=${ category }&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    return data.map( gif => ({
        id:     gif.id,
        title:  gif.title,
        url:    gif.images.downsized_medium.url
    }))
}