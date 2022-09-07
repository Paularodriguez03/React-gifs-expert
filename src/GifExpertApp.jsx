import React, {useState} from 'react'
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One punch']);

   const onAddCategories = (Newcategory) =>{

    if (categories.includes(Newcategory)) return;
    //puede insertar como mayusculas todo el texto o hacer un filtro para validar mejor
    setCategories([Newcategory, ...categories]);
   }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory onAddCategories={onAddCategories}/>
  
        {categories.map((category) => (<GifGrid key={category} category={category} />))}
    </>
  )
}
