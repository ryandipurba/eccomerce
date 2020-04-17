import { ADD_TO_WISHTLIST } from "../action/type";

const initialState = {
    wishtListNumber: 0,
    productWishtlist: []
}

const wishtListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHTLIST:
            if (state.productWishtlist.length > 0) {
                for (var i in state.productWishtlist) {
                    if (state.productWishtlist[i].id === action.payload.id) {
                        var add = true
                        break;
                    }
                }
                if (!add) {
                    state.productWishtlist.push(action.payload)
                    state.wishtListNumber += 1
                }
            } else {
                state.productWishtlist.push(action.payload)
                state.wishtListNumber += 1
            }
            console.log(state.productWishtlist, state.wishtListNumber)
            return {
                ...state,
            }
        default:
            return state
    }
}


export default wishtListReducer