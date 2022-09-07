import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from '../components';
// import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

  const { gifsList, isloading } = useFetchGifs(category);
   
  return (
    <>
    <h3>{category}</h3>
  
    {isloading && (<h2>Cargando...</h2>)}

    <div className='card-grid'>
      {gifsList.map((gif) => 
      <GifItem key={gif.id} {...gif} />)}
    </div>

    </>
  )
}
