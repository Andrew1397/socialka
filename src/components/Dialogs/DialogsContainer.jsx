import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs"


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (mtext) => {
            let actionmess = updateNewMessageTextActionCreator(mtext)
            dispatch(actionmess)
            
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect    
    )(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// // let AuthRedirectComponent = (props) => {
// //     if (!props.isAuth) return <Navigate to="/login" />
// //     return <Dialogs {...props} />
// // }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

// export default DialogsContainer;