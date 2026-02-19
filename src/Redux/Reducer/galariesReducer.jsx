
import { GET_ALL_GALARIES, GET_ERROR, CREATE_GALARIES, UPDATE_GALARIES, DELETE_GALARIES } from '../type'

const inital = {
    galaries: [],
    loading: true,
}
const galariesReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_GALARIES:
            return {
                ...state,
                galaries: action.payload,
                loading: false,
            }
        case CREATE_GALARIES:
            return {
                galaries: action.payload,
                loading: false
            }
        case UPDATE_GALARIES:
            return {
                ...state,
                galaries: state.galaries.map((g) =>
                    g.id === action.payload.id ? action.payload : g
                ),
                loading: false,
            }


            case DELETE_GALARIES:
            return {
                ...state,
                galaries: state.galaries.filter((g) => g.id !== action.payload),
                loading: false,
            }


        case GET_ERROR:
            return {
                loading: true,
                galaries: action.payload,
            }
        default:
            return state;
    }
}
export default galariesReducer
