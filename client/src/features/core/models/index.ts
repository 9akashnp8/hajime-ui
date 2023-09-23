import { Models } from '@rematch/core'
import { generatedElement } from './generatedElement'

export interface RootModel extends Models<RootModel> {
    generatedElement: typeof generatedElement
}

export const models: RootModel = { generatedElement }
