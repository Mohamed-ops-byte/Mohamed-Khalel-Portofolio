
import { GET_ALL_SERVICES, GET_ERROR, CREATE_SERVICES, UPDATE_SERVICES, DELETE_SERVICES } from '../type'

const inital = {
    services: [],
    loading: true,
}
const servicesReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_SERVICES:
            return {
                ...state,
                services: action.payload,
                loading: false,
            }
        case CREATE_SERVICES:
            return {
                ...state,
                services: action.payload,
                loading: false
            }
        case UPDATE_SERVICES:
            return {
                ...state,
                services: state.services.map((s) =>
                    s.id === action.payload.id ? action.payload : s
                ),
                loading: false,
            }
        case DELETE_SERVICES:
            return {
                ...state,
                services: state.services.filter((s) => s.id !== action.payload),
                loading: false,
            }
        case GET_ERROR:
            return {
                loading: true,
                services: action.payload,
            }
        default:
            return state;
    }
}
export default servicesReducer
