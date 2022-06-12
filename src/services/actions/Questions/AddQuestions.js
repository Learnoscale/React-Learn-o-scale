
import axios from "axios";
import { BaseURL } from "../../../BaseUrl";
import * as QUESTION  from '../types';

export const addQuestionsAction = () => async dispatch => {
    try {
        const categoryRes = await axios.get(`${BaseURL}categoryapi/`)
        const courseRes = await axios.get(`${BaseURL}courseapi/`)
        const subjectRes = await axios.get(`${BaseURL}subjectapi/`)

        const topicRes = await axios.get(`${BaseURL}topicapi/`)
        const questionTypeRes = await axios.get(`${BaseURL}Qtype/`)

        dispatch({
            type: QUESTION.GET_CATEGORY,
            categoryPayload: categoryRes.data
        })
        dispatch({
            type: QUESTION.GET_COURSE,
            coursePayload: courseRes.data
        })
        dispatch({
            type: QUESTION.GET_SUBJECT,
            subjectPayload: subjectRes.data
        })
        dispatch({
            type: QUESTION.GET_TOPIC,
            topicPayload: topicRes.data
        })
        dispatch({
            type: QUESTION.GET_QUESTION_TYPE,
            questionTypePayload: questionTypeRes.data
        })
    }
    catch (error) {
        dispatch({
            type: QUESTION.ADD_ERRORS,
            payload: error,
        })
    }
}
