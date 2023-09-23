import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const generatedElement = createModel<RootModel>()({
    state: "",
    reducers: {
        set(state, payload: string) {
            return payload
        },
    },
})
