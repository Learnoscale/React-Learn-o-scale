// import { ADD_QUESTIONS, GET_CATEGORY, ADD_ERRORS, } from '../../actions/types';
import * as QUESTION from '../../actions/types'

const initialState = {};

const addQuestionReducer = (state = initialState, action) => {
    switch (action.type) {

        case QUESTION.GET_CATEGORY:
            return {
                ...state,
                categoryList: action.categoryPayload
            }

        case QUESTION.GET_COURSE:
            return {
                ...state,
                courseList: action.coursePayload
            }

        case QUESTION.GET_SUBJECT:
            return {
                ...state,
                subjectList: action.subjectPayload
            }

        case QUESTION.GET_TOPIC:
            return {
                ...state,
                topicList: action.topicPayload
            }

        case QUESTION.GET_QUESTION_TYPE:
            return {
                ...state,
                questionTypeList: action.questionTypePayload
            }
        case QUESTION.ADD_ERRORS:
            return {
                error: action.payload
            }
        default:
            return state;
    }
}

export default addQuestionReducer;