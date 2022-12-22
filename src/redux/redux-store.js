import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";


let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer
})

let store = createStore(redusers);

export default store;