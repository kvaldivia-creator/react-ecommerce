import React, { useEffect, useState } from 'react'
import useGetProducts from './useGetProducts'

const initialState = {
  products: [],
  cart: [],
}

const useInitialState = () => {
  const API = 'https://api.escuelajs.co/api/v1/products'
  const [state, setState] = useState(initialState)
  const listProducts = useGetProducts(API)

  useEffect(() => {
    setState({
      ...state,
      products: listProducts,
    })
  }, [listProducts])

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
      products: state.products.filter((product) => product.id !== payload.id),
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
      products: [...state.products, payload],
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
  }
}

export default useInitialState
