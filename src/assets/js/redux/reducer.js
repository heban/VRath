import actions from "./enums.js";

const gameState = (state={
    loader: true,
    points: 0,
    bullets: 0
}, action) => {
    switch (action.type) {
        case actions.SHOW_LOADER: {
            return {
                ...state, 
                loader: true
            };
        }
        case actions.HIDE_LOADER: {
            return {
                ...state, 
                loader: false
            };
        }
        case actions.RESET_POINTS: {
            return {
                ...state, 
                points: 0,
                bullets: 0
            };
        }
        case actions.ADD_POINTS: {
            return {
                ...state, 
                points: state.points + action.value
            };
        }
        case actions.ADD_BULLETS: {
            return {
                ...state, 
                bullets: state.bullets + 1
            };
        }
        default: {
            return state;
        }
    }
};

export default gameState;