import { CHANGE_PRIMARY_COLOR } from '../actions/themes';

const initialState = {
    primaryColor: '#004e89'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.color
            };
        default:
            return state;
    }
};

export default reducer;