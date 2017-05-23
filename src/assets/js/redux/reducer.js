AFRAME.registerReducer("vrathReducer", {
    actions: {
        SHOW_LOADER: "SHOW_LOADER",
        HIDE_LOADER: "HIDE_LOADER"
    },

    initialState: {
        loader: true
    },

    reducer: function (state, action) {
        state = state || this.initialState;
        switch (action.type) {
            case this.actions.SHOW_LOADER: {
                return {
                    ...state, 
                    loader: true
                };
            }
            case this.actions.HIDE_LOADER: {
                return {
                    ...state, 
                    loader: false
                };
            }
            default: {
                return state;
            }
        }
    }
});