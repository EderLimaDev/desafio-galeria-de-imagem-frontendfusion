
export const Card = ({ author, height, width, download_url, id, isOpen, isFavorite, onFavoriteToggle, onCardClick}) => {

  return (
    <>
      <div className="relative border border-gray-300 rounded-lg p-4 text-center cursor-pointer transition-shadow duration-300 hover:shadow-lg"
        onClick={onCardClick}
      >
        <div className="absolute z-20 top-2 right-2" onClick={(e) => { e.stopPropagation(); onFavoriteToggle(); }}>
          <svg
            className={`w-6 h-6 ${isFavorite ? 'text-yellow-400' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.945a1 1 0 00.95.69h5.194c.969 0 1.371 1.24.588 1.81l-4.2 3.07a1 1 0 00-.364 1.118l1.618 4.945c.3.921-.755 1.688-1.538 1.118l-4.2-3.07a1 1 0 00-1.176 0l-4.2 3.07c-.783.57-1.838-.197-1.538-1.118l1.618-4.945a1 1 0 00-.364-1.118l-4.2-3.07c-.783-.57-.38-1.81.588-1.81h5.194a1 1 0 00.95-.69l1.618-4.945z"
            />
          </svg>
        </div>

        
        <img className="w-full h-auto rounded-md mb-2" src={download_url} alt="" />
        
        {isOpen && (
          <div className="mt-3 bg-gray-900 p-3 rounded-md relative">
            <span className="absolute left-1 bottom-0 text-gray-500">#{id}</span>
            <h3 className="font-bold">Autor: {author}</h3>
            <div>
              <span>Tamanho: </span>
              {width} x {height}
            </div>
          </div>
        )}
        
      </div>
    </>
  );
};
