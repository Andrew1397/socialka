import React from "react"
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path} className={navData}>{props.name}</NavLink>
        </div >
    )
}

function navData(navData) {
    return navData.isActive ? s.active : s.dialog
}

export default DialogItem;