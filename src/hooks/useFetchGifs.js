
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/gif'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchGifs() 
    {
        const data = await getGifs( category );
        setImages(data);
        setIsLoading(false);
    }

    useEffect(() =>  { 
        fetchGifs() 
    }, [])

    return { 
        images, 
        isLoading 
    }
}

