export const SECTION_DURATION = "SECTION_DURATION";
export const sectionDurationAction = (sectionTime) => {
    console.log(sectionTime, "S----====")
    return {
        type: SECTION_DURATION,
        payload: sectionTime
    };
};