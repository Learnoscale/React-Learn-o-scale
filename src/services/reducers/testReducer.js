import * as Actions from '../actions/testActions';
// import { Themes} from "../../Theme/theme";

const initialState = {};

const testDurationReducer = (state = initialState, action) => {
    console.log(action.payload, "reducer")
    switch (action.type) {
        case Actions.TEST_DURATION:
            return Object.assign({}, { testTime: action.payload } );
        default:
            return state;
    }
};
export default testDurationReducer;
