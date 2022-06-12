import * as TEST from '../../actions/types';
const initialState = {}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST.GET_TEST:
            return {
                ...state,
                testList: action.payload,
            }
        default: return state;
    }
}
export default testReducer;