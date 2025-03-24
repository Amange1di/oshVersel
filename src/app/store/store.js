import { configureStore } from "@reduxjs/toolkit";
import visuallyReducer from "./reducers/visually";
import { settingReducer } from "./reducers/settingsSlice";

export const store = configureStore({
    reducer: {
        visually: visuallyReducer,
        settings: settingReducer,
    },
});