import { GET_CATEGORY, ADD_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY } from '../Actions/types';

const initialState = {
    items: []
};

export default function CategoryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                items: action.payload
            }
        case ADD_CATEGORY:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case EDIT_CATEGORY:
            {
                const index = state.items.findIndex((item) => item.ID === action.payload.ID);
                const newArray = [...state.items];
                newArray[index] = action.payload;
                return {
                    ...state,
                    items: newArray,
                }
            }
        case DELETE_CATEGORY:
            return {
                items: state.items.filter((item) => item.ID !== action.payload)
            }
        default:
            return state;
    }
}