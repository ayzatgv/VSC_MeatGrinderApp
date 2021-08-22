import { GET_SITE, ADD_SITE, EDIT_SITE, DELETE_SITE } from '../Actions/types';

const initialState = {
    items: []
};

export default function SiteReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SITE:
            return {
                ...state,
                items: action.payload
            }
        case ADD_SITE:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case EDIT_SITE:
            {
                const index = state.items.findIndex((item) => item.ID === action.payload.ID);
                const newArray = [...state.items];
                newArray[index] = action.payload;
                return {
                    ...state,
                    items: newArray,
                }
            }
        case DELETE_SITE:
            return {
                items: state.items.filter((item) => item.ID !== action.payload)
            }
        default:
            return state;
    }
}