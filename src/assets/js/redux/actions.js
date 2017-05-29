import actions from "./enums.js";

export const showLoader = () => {
    return {
        type: actions.SHOW_LOADER
    };
};

export const hideLoader = () => {
    return {
        type: actions.HIDE_LOADER
    };
};

export const resetPoints = () => {
    return {
        type: actions.RESET_POINTS
    };
};

export const addPoints = (value) => {
    return {
        type: actions.ADD_POINTS,
        value
    };
};

export const addBullets = () => {
    return {
        type: actions.ADD_BULLETS
    };
};