import { Card } from "./components/Card/Card";
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "./context/ApiContext";

function App() {
  const { images } = useContext(ApiContext);

  const [selectedValue, setSelectedValue] = useState("");
  const [openCardIndex, setOpenCardIndex] = useState(null);
  const [favoriteImages, setFavoriteImages] = useState([]);

  //filtrar as imagens pelo item selecionado
  function handleChangeSearch(event) {
    setSelectedValue(event.target.value);
  }

  const imagens = images.filter((value) =>
    value.author.includes(selectedValue)
  );

  //mostrar detalhes do card
  const handleCardClick = (id) => {
    setOpenCardIndex(openCardIndex === id ? null : id);
  };

  //Carregar e posteriormente atualizar o local storage
  useEffect(() => {
    const savedFavorites =
      JSON.parse(localStorage.getItem("favoriteImages")) || [];
    setFavoriteImages(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteImages", JSON.stringify(favoriteImages));
  }, [favoriteImages]);

  const toggleFavorite = (download_url) => {
    setFavoriteImages((prevFavorites) =>
      prevFavorites.includes(download_url)
        ? prevFavorites.filter((fav) => fav !== download_url)
        : [...prevFavorites, download_url]
    );
    
  };
  console.log(favoriteImages);
  
  return (
    <>
      <main>
        <header className="w-full my-4 flex flex-col justify-center items-center h-28 text-red-400">
          <h1 className="text-3xl text-center">
            Seja bem vindo a Galeria de Imagens!
          </h1>
          <h3 className="text-red-100">
            Belas imagens para curtir e se inspirar
          </h3>
        </header>

        <div className="relative flex justify-center p-8">
          <button className="absolute left-0 pl-8">Favoritos</button>
          <select
            value={selectedValue}
            onChange={handleChangeSearch}
            className="w-50 p-3 border-2 text-gray-400"
          >
            <option value="">Todos os Autores</option>
            <option value="Alejandro Escamilla">Alejandro Escamilla</option>
            <option value="Aleks Dorohovich">Aleks Dorohovich</option>
            <option value="Go Wild">Go Wild</option>
            <option value="Jerry Adney">Jerry Adney</option>
            <option value="Paul Jarvis">Paul Jarvis</option>
            <option value="Vadim Sherbakov">Vadim Sherbakov</option>
            <option value="Yoni Kaplan-Nadel">Yoni Kaplan-Nadel</option>
          </select>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8">
          {imagens.length > 0 ? (
            <>
              {imagens.map((image) => (
                <Card
                  key={image.id}
                  id={image.id}
                  author={image.author}
                  width={image.width}
                  height={image.height}
                  download_url={image.download_url}
                  isOpen={openCardIndex === image.id}
                  onCardClick={() => handleCardClick(image.id)}
                  onFavoriteToggle={() => toggleFavorite(image.download_url)}
                />
              ))}
            </>
          ) : (
            <div>Carregando....</div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
