import { FILTER_BY_AGE, FILTER_BY_GENDER, GET_AFFECTEDS } from "../Actions/actions";

const initialState = {
    affecteds:[],
    aux_affecteds:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AFFECTEDS:
            return {
                ...state,
                affecteds: action.payload,
                aux_affecteds:action.payload
            }
        case FILTER_BY_AGE:
            return {
                ...state,
                aux_affecteds:action.payload
            }
        case FILTER_BY_GENDER:
            return {
                ...state,
                aux_affecteds:action.payload
            }    
        default:
            return {
                ...state
            }
    }
}

export default reducer;