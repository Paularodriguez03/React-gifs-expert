import { useEffect, useState } from "react";
import { getGifs } from "../helpers/Getgifs";


export const useFetchGifs = (category) => {
  
    const [gifsList, setGifsList] = useState([]);
    const [isloading, setIsloading] = useState(true);
    
    useEffect(() => {
      
      getGifs(category)
      .then((newImages)=>{
        setGifsList(newImages);
        setIsloading(false);
      })

      // return () => {
      //   Limpieza de funciones pendientes de los campos
      // }
    }, []);

    return {
        gifsList,
        isloading
    }
}
