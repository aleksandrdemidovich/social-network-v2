import {v1} from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

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





export const addPostActionCreator = (postText: string)=> {
    return {
        type: ADD_POST,
        newPostText: postText
    } as const
}
export const UpdateNewPostTextCreator = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export const sendMessageActionCreator = (postText: string)=> {
    return {
        type: SEND_MESSAGE,
        newMessText: postText
    } as const
}
export const UpdateNewMessTextCreator= (newText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText
    } as const
}



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
        console.log('state changed')
    },
    subscribe(callback){
        this.rerenderEntireTree = callback;
    },
    getState(){
        return this._state
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: v1(),
                message: action.newPostText!,
                likeCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this.rerenderEntireTree()
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this.rerenderEntireTree()
        } else if (action.type === SEND_MESSAGE){
            let newMess = {
                id: v1(),
                message: action.newMessText,
            }
            this._state.dialogPage.messages.push(newMess)
            this._state.dialogPage.newMessText = ''
            this.rerenderEntireTree()
        }
        else if (action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogPage.newMessText = action.newText
            this.rerenderEntireTree()
        }
    }
}


export default store;