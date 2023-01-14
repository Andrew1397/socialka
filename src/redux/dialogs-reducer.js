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

// const dialogReducer = (state = initialState, action) => {
//   if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
//     state.newMessageText = action.messageText;
//   } else if (action.type === "ADD-MESSAGE") {
//     let textMess = {
//       id: 5,
//       message: state.newMessageText,
//     };
//     state.messagesData.push(textMess);
//     state.newMessageText = "";
//   }
//   return state;
// };

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-MESSAGE": {
      // let textMess = {
      //   id: 5,
      //   message: state.newMessageText,
      // };
      // let stateCopy = { ...state };
      // stateCopy.messagesData = [...state.messagesData];
      // stateCopy.messagesData.push(textMess);
      // stateCopy.newMessageText = "";
      // return stateCopy;

      //Код з курсу. Йобана залупа. Не розумію
      //  let body = state.newMessageText;
      //  return {
      //    ...state,
      //    newMessageText: "",
      //    messagesData: [...state.messagesData, { id: 6, message: body }],
      //  };

      //Це я хоча б розумію
      let textMess = {
        id: 5,
        message: state.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, textMess],
        newMessageText: "",
      };
    }
    case "UPDATE-NEW-MESSAGE-TEXT": {
      // let stateCopy = { ...state };
      // stateCopy.newMessageText = action.messageText;
      // return stateCopy;
      return { ...state, newMessageText: action.messageText };
    }
    default:
      return state;
  }
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
