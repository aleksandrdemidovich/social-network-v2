import {ActionsType, DialogPageType} from "./state";
import {v1} from "uuid";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

export const dialogsReducer = (state: DialogPageType, action: ActionsType) => {
    if (action.type === SEND_MESSAGE){
        let newMess = {
            id: v1(),
            message: action.newMessText,
        }
        state.messages.push(newMess)
        state.newMessText = ''

    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
        state.newMessText = action.newText
    }

    return state
}