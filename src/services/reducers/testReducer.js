import * as Actions from '../actions/testActions';


const initialState = {};

const testDurationReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case Actions.TEST_DURATION:
            return Object.assign({}, { testTime: action.payload } );
        default:
            return state;
    }
};
export default testDurationReducer;
