import * as Actions from '../actions/sectionActions';

const initialState = {};

const sectionDurationReducer = (state = initialState, action) => {
    console.log(action.payload, "reducer")
    switch (action.type) {
        case Actions.SECTION_DURATION:
            return Object.assign({}, { sectionTime: action.payload } );
        default:
            return state;
    }
};
export default sectionDurationReducer;