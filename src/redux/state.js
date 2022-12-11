import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Deamon", likesCount: 6 },
        { id: 2, message: "Girl", likesCount: 15 },
        { id: 3, message: "Love", likesCount: 7 },
        { id: 4, message: "Me", likesCount: 12 },
      ],
      newPostText: "Yap",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    debugger;
    return this._state;
  },
  subscribe(callback) {
    this._rerenderEntireTree = callback;
  },

  rerenderEntireTree() {
    console.log("state change");
  },

  dispatch(action) {

    this._state.profilePage=profileReducer(this._state.profilePage, action);
    this._state.dialogsPage=dialogReducer(this._state.dialogsPage, action);
this._rerenderEntireTree(this._state);
    // if (action.type === "ADD-POST") {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //   };
    //   this._state.profilePage.postsData.push(newPost);
    //   this._state.profilePage.newPostText = "";
    //   this._rerenderEntireTree(this._state);
    // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._rerenderEntireTree(this._state);
    // } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
    //   this._state.dialogsPage.newMessageText = action.messageText;
    //   this._rerenderEntireTree(this._state);
    // } else if (action.type === "ADD-MESSAGE") {
    //   let textMess = {
    //     id: 5,
    //     message: this._state.dialogsPage.newMessageText,
    //   };
    //   this._state.dialogsPage.messagesData.push(textMess);
    //   this._state.dialogsPage.newMessageText = "";
    //   this._rerenderEntireTree(this._state);
    // }
  },
};





window.store = store;
export default store;
