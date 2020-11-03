import axios from "axios"
import { GET_PRODUCTS } from "../actions/example"

export const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      }
    default:
      return state
  }
}

export function getProducts() {
  return (dispatch) =>
    axios.get(`/api/v1/products`).then(({ data }) => {
      dispatch({ type: GET_PRODUCTS, products: data })
    })
}
