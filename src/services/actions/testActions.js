
export const TEST_DURATION = "TEST_DURATION";
export const testDurationAction = (testTime) => {
    console.log(testTime, "----====")
    return {
        type: TEST_DURATION,
        payload: testTime
    };
};
