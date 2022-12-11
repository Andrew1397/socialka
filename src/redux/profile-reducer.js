const profileReducer = (state, action) => {

    if (action.type === "ADD-POST") {

      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      state.newPostText = action.newText;
    }

  return state;
};

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: "UPDATE-NEW-POST-TEXT", newText: text };
};

export default profileReducer;