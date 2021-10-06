import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})


export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store
const store = createStore( rootReducers)

export default store

