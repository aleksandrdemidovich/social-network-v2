import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {PostType} from "../../../../redux/store";
import Posts from "./Posts";


type mapStateToPropsType = {
    posts: PostType[]
}

export type  PostsPropsType = mapStateToPropsType

const mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}


const PostsContainer = connect(mapStateToProps)(Posts)



export default PostsContainer;