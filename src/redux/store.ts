import {v1} from "uuid";
import {addPostActionCreator, profileReducer, UpdateNewPostTextCreator} from "./profile-reducer";
import {dialogsReducer, sendMessageActionCreator, UpdateNewMessTextCreator} from "./dialogs-reducer";


export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText?: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}
export type StoreType = {
    _state: RootStateType
    rerenderEntireTree: () => void

    subscribe: (callback:() => void) => void
    getState: () => RootStateType

    dispatch: (action:ActionsType) => void
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateNewMessTextActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextCreator>

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type UpdateNewMessTextActionType = ReturnType<typeof UpdateNewMessTextCreator>


const store : StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi, how are you ', likeCount: 15},
                {id: v1(), message: 'It\'s my first post ', likeCount: 20},
                {
                    id: v1(),
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam',
                    likeCount: 5
                },
                {id: v1(), message: 'Da da ', likeCount: 99},
            ],
            newPostText: ''
        },
        dialogPage: {
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
            ],
            messages: [
                {id: v1(), message: 'hi'},
                {id: v1(), message: 'how is your it-kamasutra'},
                {id: v1(), message: 'yo'},
                {id: v1(), message: 'yo'},
                {
                    id: v1(),
                    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illum, molestias quibusdam rem repellat sapiente? Amet consequatur corporis cum, et ipsam magni, nemo obcaecati quos saepe, sed sint tempora totam!'
                },
            ],
            newMessText: ''
        }
    },
    rerenderEntireTree(){
        console.log('redux changed')
    },
    subscribe(callback){
        this.rerenderEntireTree = callback;
    },
    getState(){
        return this._state
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this.rerenderEntireTree()
    }
}


export default store;