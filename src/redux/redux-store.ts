import {createStore, combineReducers} from 'redux'
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

const store: StoreType = createStore(reducers)

export default store