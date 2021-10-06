import {ActionsType} from "./store";
import {v1} from "uuid";

const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}


export type InitialStateType = typeof initialState

const initialState = {
    dialogs: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'John'},
        {id: v1(), name: 'Matthew'},
        {id: v1(), name: 'Larisa Dolina'},
        {id: v1(), name: 'Larisa Dolina1'},
        {id: v1(), name: 'Larisa Dolina2'},
        {id: v1(), name: 'Larisa Dolina3'},
        {id: v1(), name: 'Larisa Dolina4'},
        {id: v1(), name: 'Larisa Dolina5'},
    ] as Array<DialogType>,
    messages: [
        {id: v1(), message: 'hi'},
        {id: v1(), message: 'how is your it-kamasutra'},
        {id: v1(), message: 'yo'},
        {id: v1(), message: 'yo'},
        {
            id: v1(),
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam!'
        },
    ] as Array<MessageType>,
    newMessText: ''
}

export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case "SEND-MESSAGE": {
            let newMess = {
                id: v1(),
                message: action.newMessText,
            }
            return {...state, messages:[...state.messages, newMess], newMessText:''}
        }
        case "UPDATE_NEW_MESSAGE_TEXT": {
            return  {...state, newMessText:action.newMessText}
        }
        default :
            return state
    }

    return state
}

export const sendMessageActionCreator = (messText: string)=> {
    return {
        type: SEND_MESSAGE,
        newMessText: messText
    } as const
}
export const UpdateNewMessTextCreator= (messText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessText: messText
    } as const
}