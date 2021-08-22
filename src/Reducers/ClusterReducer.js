import { GET_CLUSTER, ADD_CLUSTER, EDIT_CLUSTER, DELETE_CLUSTER } from '../Actions/types';

const initialState = {
    items: []
};

export default function ClusterReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CLUSTER:
            return {
                ...state,
                items: action.payload
            }
        case ADD_CLUSTER:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case EDIT_CLUSTER:
            {
                const index = state.items.findIndex((item) => item.ID === action.payload.ID);
                const newArray = [...state.items];
                newArray[index] = action.payload;
                return {
                    ...state,
                    items: newArray,
                }
            }
        case DELETE_CLUSTER:
            return{
                items: state.items.filter((item) => item.ID !== action.payload)
            }
        default:
            return state;
    }
}