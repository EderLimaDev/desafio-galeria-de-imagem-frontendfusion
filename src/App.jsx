import { Card } from "./components/Card/Card";


function App() {

  return (
    <>
      <main>
        <h1 className='text-3xl text-red-400'>Seja bem vindo a Galeria de Imagens!</h1>
        <p>Desafio de Galeria de Imagens - Processo Seletivo Frontend Fusion</p>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Card />
        </section>
      </main>
    </>
  );
}

export default App
