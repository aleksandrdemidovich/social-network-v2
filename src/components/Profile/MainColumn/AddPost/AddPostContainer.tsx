import React from 'react';
import {ActionsType, StoreType,} from "../../../../redux/store";
import {addPostActionCreator, UpdateNewPostTextCreator} from "../../../../redux/profile-reducer";
import AddPost from "./AddPost";
import StoreContext from "../../../../StoreContext";

type addPostPropsType = {
    // store: StoreType
}


function AddPostContainer(props: addPostPropsType) {

    // const state = props.store.getState()

    // const addPost = () => {
    //     props.store.dispatch(addPostActionCreator(state.profilePage.newPostText!))
    // }
    //
    // const onPostChange = (text: string) => {
    //     props.store.dispatch(UpdateNewPostTextCreator(text))
    // }

    return (
        <StoreContext.Consumer>
            { (store) => {

                const state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator(state.profilePage.newPostText!))
                }

                const onPostChange = (text: string) => {
                    store.dispatch(UpdateNewPostTextCreator(text))
                }
                return <AddPost
                    newPostText={state.profilePage.newPostText!}
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                />
            }}
        </StoreContext.Consumer>
    );
}

export default AddPostContainer;
