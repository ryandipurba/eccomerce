import { ADD_TO_CART } from "../action/type";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    product: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.product.length > 0) {
                for (var i in state.product) {
                    if (state.product[i].id === action.payload.id) {
                        state.product[i].quantity += action.payload.quantity;
                        var add = true
                        break;
                    }
                }
                if (!add) {
                    state.product.push(action.payload)
                }
            } else {
                state.product.push(action.payload)
            }
            console.log(state.product)
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + action.payload.price,
            }
        default:
            return state
    }
}


export default cartReducer