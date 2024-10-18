import React, { useEffect, useState } from 'react'

export const Card = ({author, height, width, url,download_url}) => {

    const [images, setImages] = useState([])


    useEffect(() => {
        const url = 'https://picsum.photos/v2/list'

        async function getImages() {
            await fetch(url)
            .then((items) =>  items.json())
            .then((result) => setImages(result))
        }
          
        getImages()

    }, [])



    console.log(images);
    

  return (
    <>
      {
        images.length > 0 ? (
            <>
                {images.map((image) => (

                    <div key={image.id} className="">
                        <img src={image.download_url} alt="" />
                        <div className="grid">
                            <h3>Autor: {image.author}</h3>
                            <div><span>Tamanho</span>{image.width} x {image.height}</div>
                        </div>
                    </div>

                ))}
            </> 

            ) : (
            <div>Carregando....</div>
        )
      }  
        
        
    </>
  )
}
