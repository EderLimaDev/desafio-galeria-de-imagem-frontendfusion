import { createContext, useState, useEffect } from "react";

export const ApiContext = createContext()

export const ApiProvider = ({children}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        const url = 'https://picsum.photos/v2/list'

        async function getImages() {
            await fetch(url)
            .then((items) =>  items.json())
            .then((result) => setImages(result))
        }
          
        getImages()

    },[])

    return (
        <ApiContext.Provider value={{images}}>{children}</ApiContext.Provider>
    )
};

