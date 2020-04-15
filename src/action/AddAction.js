import { ADD_TO_CART } from "./type";

export const addBasket = (id, name, price, details, urlImage, quantity) => {
    return (dispatch) => {
        console.log('add to basket')
        console.log('product :', id, name, price, details, urlImage, price, quantity)
        dispatch({
            type: ADD_TO_CART,
            payload: { id, name, price, details, urlImage, quantity }
        })
    }
}

export default addBasket
