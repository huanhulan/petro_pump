import {Stream, Cell} from  'sodiumjs'
import {keys} from './keypad/interface'

interface InputPanelInterface {
    sClear: Stream<true>,
    cActive?: Cell<boolean>
}

export {InputPanelInterface, keys}