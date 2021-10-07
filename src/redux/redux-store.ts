import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage:usersReducer
})


export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store
const store = createStore( rootReducers)

export default store

