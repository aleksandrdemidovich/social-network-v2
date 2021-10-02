import {ActionsType, ProfilePageType} from "./store";
import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState: ProfilePageType = {
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
}


export const profileReducer = (state:ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: v1(),
                message: action.newPostText!,
                likeCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
        break
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
        break
        default :
            return state
    }

    return state
}

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