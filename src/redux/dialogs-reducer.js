let initialState = {
  dialogsData: [
    { id: 1, name: "Deamon" },
    { id: 2, name: "Girl" },
    { id: 3, name: "Love" },
    { id: 4, name: "Me" },
  ],
  messagesData: [
    { id: 1, message: "я тупой єбла" },
    { id: 2, message: "я тупой єбла" },
    { id: 3, message: "я тупой єбла" },
    { id: 4, message: "я тупой єбла" },
  ],
  newMessageText: "fds",
};

const dialogReducer = (state = initialState, action) => {
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
