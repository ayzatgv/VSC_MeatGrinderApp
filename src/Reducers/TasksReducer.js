import { GET_TASK, ADD_TASK, EDIT_TASK, STATUS_TASK, DELETE_TASK } from '../Actions/types';

const initialState = {
    items: []
};

export default function TaskReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TASK:
            return {
                ...state,
                items: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case EDIT_TASK:
            {
                const index = state.items.findIndex((item) => item.ID === action.payload.ID);
                const newArray = [...state.items];
                newArray[index] = action.payload;
                return {
                    ...state,
                    items: newArray,
                }
            }
        case STATUS_TASK:
            {
                const index = state.items.findIndex((item) => item.ID === action.payload.ID);
                const newArray = [...state.items];
                newArray[index] = action.payload;
                return {
                    ...state,
                    items: newArray,
                }
            }
        case DELETE_TASK:
            return {
                items: state.items.filter((item) => item.ID !== action.payload)
            }
        default:
            return state;
    }
}