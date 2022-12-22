import React from "react"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let messageChange = (mtext) => {
        let actionmess = updateNewMessageTextActionCreator(mtext)
        props.store.dispatch(actionmess)
    }


    return (
        <Dialogs updateMessageText={messageChange} addMessage={sendMessage}  dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData} newMessageText={state.dialogsPage.newMessageText} />
    )
}


export default DialogsContainer;