import React from "react"
import DialogItem from "./DialogItem/DialogsItem"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: 'Deamon' },
        { id: 2, name: 'Girl' },
        { id: 3, name: 'Love' },
        { id: 4, name: 'Me' }
    ]

    let messagesData = [
        { id: 1, message: 'я тупой єбла' },
        { id: 2, message: 'я тупой єбла' },
        { id: 3, message: 'я тупой єбла' },
        { id: 4, message: 'я тупой єбла' }
    ]

    let dialogsElements = dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = messagesData.map((message) => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;