import { GET_WO_OPEN, GET_WO_OPEN7DAY, GET_WO_OPENSLAPASS, GET_WO_COMPLETEPASS, GET_WO_OPENLEVELONE } from '../Actions/types';

const initialState = {
    Open_items: [],
    Open7Day_items: [],
    OpenSLApass_items: [],
    CompletePass_items: [],
    OpenLevelOne_items: []
};

export default function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WO_OPEN:
            return {
                ...state,
                Open_items: action.payload
            }
        case GET_WO_OPEN7DAY:
            return {
                ...state,
                Open7Day_items: action.payload
            }
        case GET_WO_OPENSLAPASS:
            return {
                ...state,
                OpenSLApass_items: action.payload
            }
        case GET_WO_COMPLETEPASS:
            return {
                ...state,
                CompletePass_items: action.payload
            }
        case GET_WO_OPENLEVELONE:
            return {
                ...state,
                OpenLevelOne_items: action.payload
            }
        default:
            return state;
    }
}