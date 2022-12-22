import React from "react"
import DialogItem from "./DialogItem/DialogsItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"

const Dialogs = (props) => {


    //let state = props.dialogsPage

    let dialogsElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.messagesData.map((message) => <Message message={message.message} />)

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.addMessage()
    }

    let messageChange = () => {
        let mtext = newMessageElement.current.value;
        props.updateMessageText(mtext)
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
                        <textarea onChange={messageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
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