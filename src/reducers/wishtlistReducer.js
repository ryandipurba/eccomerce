import { ADD_TO_WISHTLIST } from "../action/type";

const initialState = {
    wishtListNumber: 0,
    productWishtlist: []
}

const wishtListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHTLIST:
            state.productWishtlist.push(action.payload)
            console.log(state.productWishtlist, state.wishtListNumber)
            return {
                ...state,
                wishtListNumber: state.wishtListNumber + 1,
            }
        default:
            return state
    }
}


export default wishtListReducer