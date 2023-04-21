import axios from 'axios'
import { useEffect, useState } from 'react'

function useGetProducts(API) {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const response = await axios(API)
    setProducts(response.data)
  }, [])
  return products
}

export default useGetProducts
