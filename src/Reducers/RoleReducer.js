import { GET_ROLE } from '../Actions/types';

const initialState = {
    items: []
};

export default function RoleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ROLE:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}