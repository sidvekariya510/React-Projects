const initialState = { cartData: [] }

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: action.data
            }
            break;

        default:
            return {
                state
            }
            break;
    }
}