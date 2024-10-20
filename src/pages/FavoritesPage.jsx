import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export const FavoritesPage = () => {

  const [favoriteImages, setFavoriteImages] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteImages')) || [];
    setFavoriteImages(savedFavorites);
  }, []);



  return (
    <>
        
        <div className='relative p-8'> 
  
            <Link to="/" className="mr-4 text-grey-500 font-bold absolute cursor-pointer left-8 ">
              <i className='bx bx-left-arrow-circle text-3xl hover:text-red-500' ></i>
            </Link>
            
            <h2 className="text-4xl p-8  text-center font-bold mb-4">Favoritos</h2>
            
            {favoriteImages.length === 0 ? (
                <p className="text-gray-500">Você ainda não favoritou nenhuma imagem.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {favoriteImages.map((imageSrc, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg p-4 text-center">
                    <img src={imageSrc} alt={`Favorito ${index + 1}`} className="w-full h-auto rounded-md mb-2" />
                    </div>
                ))}
                </div>
            )}
        </div>
    </>
  )
}
