

import { useEffect, useState } from "react"
// import AddCategory from "./components/AddCategory"
// import GifGrid from "./components/GifGrid";
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const addCategory = ( category ) => {
        if( categories.includes(category) ) return;
        setCategories([ category, ...categories ])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onCategory={ addCategory } />
            
            { 
                categories.map( category => (
                    <GifGrid key={ category }
                        category={ category } />
                )) 
            }
        </>
    )
}

export default GifExpertApp;



 // useEffect(() => {
    //     const queryParams = new URLSearchParams(location.search)
    //     const endpoint = queryParams.get('endpoint')
    //     console.log('endpoint', endpoint)
    //     window.location.href = "/"
    // }, [])
    