import { ADD_TO_WISHTLIST } from "./type";

export const addWishtList = (id, name, price, details, urlImage, love) => {
    return (dispatch) => {
        console.log('add to whistlist')
        console.log('wishtlist :', id, name, price, details, urlImage, price, love)
        dispatch({
            type: ADD_TO_WISHTLIST,
            payload: { id, name, price, details, urlImage, love }
        })
    }
}

export default addWishtList