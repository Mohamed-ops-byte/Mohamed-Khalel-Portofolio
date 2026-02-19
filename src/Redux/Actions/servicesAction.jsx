
import { GET_ALL_SERVICES, GET_ERROR, CREATE_SERVICES, UPDATE_SERVICES, DELETE_SERVICES } from '../type'
import {
    getDemoServices,
    updateDemoService,
    deleteDemoService,
} from '../../data/demoStore'


// Get all services
export const getAllServices = () => async (dispatch) => {
    try {
        const response = getDemoServices();
        dispatch({
            type: GET_ALL_SERVICES,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

// Update service
export const updateService = (id, data) => async (dispatch) => {
    try {
        const response = updateDemoService(id, data);
        dispatch({
            type: UPDATE_SERVICES,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'Error ' + e,
        });
    }
};

// Delete service
export const deleteService = (id) => async (dispatch) => {
    try {
        deleteDemoService(id);
        dispatch({
            type: DELETE_SERVICES,
            payload: id,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'Error ' + e,
        });
    }
};

//get all category with pagination
// export const getAllCategoryPage = (page) => async (dispatch) => {
//     try {
//         const response = await useGetData(`/api/v1/categories?limit=6&page=${page}`);
//         dispatch({
//             type: GET_ALL_CATEGORY,
//             payload: response,
//         })

//     } catch (e) {
//         dispatch({
//             type: GET_ERROR,
//             payload: "Error " + e,
//         })
//     }
// }


//get all category with pagination
// export const createCategory = (formData) => async (dispatch) => {
//     try {
//         const response = await useInsertDataWithImage(`/api/v1/categories`, formData);
//         dispatch({
//             type: CREATE_CATEGORY,
//             payload: response,
//             loading: true
//         })

//     } catch (e) {
//         dispatch({
//             type: GET_ERROR,
//             payload: "Error " + e,
//         })
//     }
// }
