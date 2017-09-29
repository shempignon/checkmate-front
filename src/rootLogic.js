import { logic as characterLogic } from './character/index'
import { logic as bracketsLogic } from './brackets/index'

export default [
        ...characterLogic,
        ...bracketsLogic,
]

