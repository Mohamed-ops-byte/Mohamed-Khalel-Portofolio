
import { GET_ALL_GALARIES, GET_ERROR, CREATE_GALARIES, UPDATE_GALARIES ,DELETE_GALARIES} from '../type'
import {
    getDemoGalleries,
    updateDemoGallery,
    deleteDemoGallery,
} from '../../data/demoStore'

//get all galaries
export const getAllGalaries = () => async (dispatch) => {
    try {
        const response = getDemoGalleries();

        dispatch({
            type: GET_ALL_GALARIES,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }

}

// update gallery
export const updateGallery = (id, data) => async (dispatch) => {
    try {
        const response = updateDemoGallery(id, data);
        dispatch({
            type: UPDATE_GALARIES,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'Error ' + e,
        });
    }
};

// delete gallery
export const deleteGallery = (id) => async (dispatch) => {
    try {
        deleteDemoGallery(id);
        dispatch({
            type: DELETE_GALARIES,
            payload: id,
        });
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: 'Error ' + e,
        });
    }
};


