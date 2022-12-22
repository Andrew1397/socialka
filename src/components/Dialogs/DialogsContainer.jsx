import React from "react"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs"


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer> 
            {(store) => {
                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                let messageChange = (mtext) => {
                    let actionmess = updateNewMessageTextActionCreator(mtext)
                    store.dispatch(actionmess)
                }
                return (<Dialogs updateMessageText={messageChange} addMessage={sendMessage} dialogsData={state.dialogsPage.dialogsData} messagesData={state.dialogsPage.messagesData} newMessageText={state.dialogsPage.newMessageText} />
                )
            }
        }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer;