import { profileAPI, userAPI } from "../components/api/api";
import { toggleIsFetching } from "./users-reducer";

let initialState = {
  postsData: [
    { id: 1, message: "Deamon", likesCount: 6 },
    { id: 2, message: "Girl", likesCount: 15 },
    { id: 3, message: "Love", likesCount: 7 },
    { id: 4, message: "Me", likesCount: 12 },
  ],
  newPostText: "Yap",
  profile: null,
  status: "",
};



// const profileReducer = (state = initialState, action) => {
//   if (action.type === "ADD-POST") {
//     let newPost = {
//       id: 5,
//       message: state.newPostText,
//       likesCount: 0,
//     };
//     let stateCopy = {...state}
//     stateCopy.postsData = [...state.postsData]
//     stateCopy.postsData.push(newPost);
//     stateCopy.newPostText = "";
//     return stateCopy;
//   } else if (action.type === "UPDATE-NEW-POST-TEXT") {
//     let stateCopy = {...state}
//     stateCopy.postsData = [...state.postsData];
//     stateCopy.newPostText = action.newText;
//     return stateCopy;
//   } 
// };

  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD-POST": {
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0,
        };
        // let stateCopy = { ...state };
        // stateCopy.postsData = [...state.postsData];
        // stateCopy.postsData.push(newPost);
        // stateCopy.newPostText = "";
        // return stateCopy;

        return {
          ...state, 
          postsData: [...state.postsData, newPost], 
          newPostText: ''
        }
      }
      case "UPDATE-NEW-POST-TEXT": {
        //         let stateCopy = { ...state };
        //         stateCopy.postsData = [...state.postsData];
        //         stateCopy.newPostText = action.newText;
        //         return stateCopy;
        return { ...state, newPostText: action.newText };
      }
      case "SET-STATUS": {
        return {
          ...state, status: action.status
        }
      }
      case "SET-USER-PROFILE": {
        return {
          ...state, profile: action.profile
        }
      }
      default:
        return state;
    }
  };

  export const addPostActionCreator = () => {
    return {
      type: "ADD-POST",
    };
  };

  export const updateNewPostTextActionCreator = (text) => {
    return { type: "UPDATE-NEW-POST-TEXT", newText: text };
  };
  export const setUserProfile = (profile) => {
    return { type: "SET-USER-PROFILE", profile}
  }
  export const setStatus = (status) => {
    return { type: "SET-STATUS", status}
  }

  // export const setUserProfileThunk = (userId) => {
  //   return (dispatch) => {
  //     dispatch(toggleIsFetching(true));
  //     userAPI.profile(userId).then((data) => {
  //       dispatch(setUserProfile(data));
  //       dispatch(toggleIsFetching(false));
  //     });
  //   }
  // }

  export const getUserProfile = (userId) => {
    return (dispatch) => {
      dispatch(toggleIsFetching(true));
      profileAPI.getProfile(userId)
        .then((data) => {
          dispatch(setUserProfile(data));
          dispatch(toggleIsFetching(false));
        });
    };
  };
  export const getStatus = (userId) => {
    return (dispatch) => {
      dispatch(toggleIsFetching(true));
      profileAPI.getStatus(userId)
        .then((response) => {
          debugger
          dispatch(setStatus(response));
          dispatch(toggleIsFetching(false));
        });
    };
  };
  export const updateStatus = (status) => {
    return (dispatch) => {
      dispatch(toggleIsFetching(true));
      profileAPI.updateStatus(status)
        .then((response) => {
          console.log("response",response)
          if ( response.resultCode===0){dispatch(setStatus(response));}
          dispatch(toggleIsFetching(false));
        });
    };
  };

  



  export default profileReducer;