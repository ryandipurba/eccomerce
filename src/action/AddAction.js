import { ADD_TO_CART, ADD_TO_WISHTLIST, ADD_PRODUCT } from "./type";

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

export const addWishtList = (id, name, price, details, urlImage, love) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_WISHTLIST,
            payload: { id, name, price, details, urlImage, love }
        })
    }
}

export const addProduct = (id, name, price, details, urlImage) => {
    return (dispatch) => {
        console.log("tes")
        dispatch({
            type: ADD_PRODUCT,
            payload: { id, name, price, details, urlImage }
        })
    }
}
