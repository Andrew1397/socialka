import React from "react"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import DialogItem from "./DialogItem/DialogsItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"

const Dialogs = (props) => {



    let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.dialogsPage.messagesData.map((message) => <Message message={message.message} />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        // props.addMessage()
        props.dispatch(addMessageActionCreator())
    }

    let messageChange = () => {
        let mtext = newMessageElement.current.value;
        // props.updateMessageText(mtext)
        // console.log(mtext)
        let actionmess = updateNewMessageTextActionCreator(mtext)
        props.dispatch(actionmess)
        debugger
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={messageChange} ref={newMessageElement} value={props.MessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;