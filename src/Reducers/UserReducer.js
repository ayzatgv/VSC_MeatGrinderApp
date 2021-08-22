import { GET_USER, ADD_USER, EDIT_USER, DELETE_USER } from '../Actions/types';

const initialState = {
    items: []
};

export default function UserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                items: action.payload
            }
        case ADD_USER:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case EDIT_USER:
            {
                const index = state.items.findIndex((item) => item.ID === action.payload.ID);
                const newArray = [...state.items];
                newArray[index] = action.payload;
                return {
                    ...state,
                    items: newArray,
                }
            }
        case DELETE_USER:
            return {
                items: state.items.filter((item) => item.ID !== action.payload)
            }
        default:
            return state;
    }
}