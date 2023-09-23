import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const generatedElement = createModel<RootModel>()({
    state: "",
    reducers: {
        // @ts-ignore
        set(state, payload: string) {
            return payload
        },
    },
})
