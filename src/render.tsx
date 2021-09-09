import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./state/state";


export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPostCallback={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}



