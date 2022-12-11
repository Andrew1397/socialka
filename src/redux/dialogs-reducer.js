const dialogReducer = (state, action) => {

  if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      state.newMessageText = action.messageText;
      
    } else if (action.type === "ADD-MESSAGE") {
      let textMess = {
        id: 5,
        message: state.newMessageText,
      };
      state.messagesData.push(textMess);
      state.newMessageText = "";
      
    }

  return state;
};

export const updateNewMessageTextActionCreator = (mtext) => {
  return { type: "UPDATE-NEW-MESSAGE-TEXT", messageText: mtext };
};

export const addMessageActionCreator = () => {
  return {
    type: "ADD-MESSAGE",
  };
};

export default dialogReducer;