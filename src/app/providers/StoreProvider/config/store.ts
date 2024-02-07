import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";

export function createReduxStore() {

    const rootReducer: ReducersMapObject<StateSchema> = {

    };

    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
    });

    return store;
}