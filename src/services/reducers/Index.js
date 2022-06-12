import {combineReducers} from '@reduxjs/toolkit';

import  userReducer from '../Slices/UserSlice';
import themeReducer from '../Slices/ThemeSlice';
import testReducer from './testReducer';
import sectionReducer from './sectionReducer';
import addQuestionReducer from './Questions/addQuestionsReducer'

import praticeTestReducer from './Practice/testReducer'


const reducers = combineReducers({
    user: userReducer,
    theme: themeReducer,
    testDurationState: testReducer,
    sectionDurationState: sectionReducer,
    addQuestionState: addQuestionReducer,
    testState: praticeTestReducer
})
export default reducers;