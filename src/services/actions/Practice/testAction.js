
import axios from "axios";
import { BaseURL } from "../../../BaseUrl";
import * as TEST  from '../types';

export const testAction = () => async dispatch => {
    try {
        const testRes = await axios.get(`${BaseURL}testMakesapi/`)

        dispatch({
            type: TEST.GET_TEST,
            payload: testRes.data
        })
    }
    catch (error) {
        dispatch({
            type: TEST.ADD_ERRORS,
            payload: error,
        })
    }
}
