import {v1} from "uuid";
import {rerenderEntireTree} from "../render";

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
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}


let state: RootStateType = {
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
        ]
    },
    dialogPage: {
        dialogs: [
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'John'},
            {id: v1(), name: 'Matthew'},
            {id: v1(), name: 'Larisa Dolina'},
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
        ]
    }
}


export const addPost = (postMess: string) => {
    let newPost = {
        id: v1(),
        message: postMess,
        likeCount: 0
    }
    state.profilePage.posts.unshift(newPost)
    rerenderEntireTree(state)
}


export default state;