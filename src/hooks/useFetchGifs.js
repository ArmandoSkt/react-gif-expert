import { useEffect, useState } from "react"
import { getGifs } from "../Helpers/getGifs"

export const useFetchGifs = ( category ) => {

   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getGifs(category)
      .then(setImages)
      .then(() => setIsLoading(false))
  }, [category])
  
  return {
    images,
    isLoading
  }
}
