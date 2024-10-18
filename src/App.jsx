import { Card } from "./components/Card/Card";
import { useContext } from "react";
import { ApiContext } from "./context/ApiContext";

function App() {

  const {images} = useContext(ApiContext);

  return (
    <>
      <main>
        <h1 className='text-3xl text-red-400'>Seja bem vindo a Galeria de Imagens!</h1>
        <p>Desafio de Galeria de Imagens - Processo Seletivo Frontend Fusion</p>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
         
        {
        images.length > 0 ? (
            <>
                {images.map((image) => (

                 <Card
                    key={image.id}
                    author={image.author}
                    width={image.width}
                    height={image.height}
                    download_url={image.download_url}
                   /> 

                ))}
            </> 

            ) : (
            <div>Carregando....</div>
        )
      } 
         
         
         
          
        </section>
      </main>
    </>
  );
}

export default App
