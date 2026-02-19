import {combineReducers} from 'redux'
import servicesReducer from './servicesReducer'
import allgalariesReducer from './galariesReducer'

export default combineReducers ({
    allservices:servicesReducer ,
    allgalaries: allgalariesReducer,
})