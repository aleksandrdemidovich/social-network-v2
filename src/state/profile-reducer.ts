import {ActionsType, ProfilePageType} from "./state";
import {v1} from "uuid";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state:ProfilePageType, action: ActionsType) => {
    if(action.type === ADD_POST){
        let newPost = {
            id: v1(),
            message: action.newPostText!,
            likeCount: 0
        }
        state.posts.unshift(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT){
        state.newPostText = action.newText
    }

    return state
}