
export const Card = ({author, height, width,download_url, id}) => {  
  return (
    <>

      <div key={id} className="">
          <img src={download_url} alt="" />
          <div className="grid">
              <h3>Autor: {author}</h3>
              <div><span>Tamanho</span>{width} x {height}</div>
          </div>
      </div>   
    </>
  )
}
