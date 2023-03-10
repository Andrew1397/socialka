import { userAPI } from "../components/api/api";
import { setUserProfile } from "./profile-reducer";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl: "",
    //   followed: true,
    //   fullName: "Inna K.",
    //   status: "I want to go home",
    //   location: { city: "Grinsted", country: "Denmark" },
    // },
    // {
    //   id: 2,
    //   photoUrl: "",
    //   followed: true,
    //   fullName: "Deamon",
    //   status: "ku",
    //   location: { city: "Ternopil", country: "Ukraine" },
    // },
    // {
    //   id: 3,
    //   photoUrl: "",
    //   followed: true,
    //   fullName: "Deamon",
    //   status: "ni",
    //   location: { city: "Uzhorod", country: "Ukraine" },
    // },
    // {
    //   id: 4,
    //   photoUrl: "",
    //   followed: false,
    //   fullName: "Deamon",
    //   status: "for 1 ;)",
    //   location: { city: "Kiev", country: "Ukraine" },
    // },
    // {
    //   id: 5,
    //   photoUrl: "",
    //   followed: true,
    //   fullName: "Deamon",
    //   status: "With great joy",
    //   location: { city: "Lviv", country: "Ukraine" },
    // },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  pagesToShow: 10,
  isFetcing: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case "SET-USERS": {
      return {
        ...state,
        users: action.users,
      };
    }

    case "SET-CURRENT-PAGE": {
      return { ...state, currentPage: action.currentPage };
    }

    case "SET-TOTAL-USERS-COUNT": {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }

    case "TOGGLE-IS-FETCHING": {
      return {
        ...state,
        isFetcing: action.isFetcing,
      };
    }

    case "TOGGLE-IS-FOLLOWING-PROGRESS": {
      
      return {
        ...state,
        followingInProgress: action.isFetcing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};
// тут перед = було AC
export const followSuccess = (userID) => {
  return { type: "FOLLOW", userID };
};
// тут перед = було AC
export const unfollowSuccess = (userID) => {
  return { type: "UNFOLLOW", userID };
};
// тут перед = було AC
export const setUsers = (users) => {
  return { type: "SET-USERS", users };
};
// тут перед = було AC
export const setCurrentPage = (currentPage) => {
  return { type: "SET-CURRENT-PAGE", currentPage };
};
// тут перед = було AC
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: "SET-TOTAL-USERS-COUNT", count: totalUsersCount };
};
// тут перед = було AC
export const toggleIsFetching = (isFetcing) => {
  return { type: "TOGGLE-IS-FETCHING", isFetcing };
};

export const toggleFollowingProgress = (isFetcing, userId) => {
  return { type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetcing, userId };
};



export const getUsers = (currentPage, pageSize, pageNumber) => {
  return (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false));
      debugger
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId) =>{
  return (dispatch) => { 
    dispatch(toggleFollowingProgress(true, userId));
  userAPI.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });}

} 
export const unfollow = (userId) =>{
  return (dispatch) => { 
    dispatch(toggleFollowingProgress(true, userId));
  userAPI.unfollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  });}

} 
// export const profileThunk = (userId) =>{
//   return (dispatch) => { 
//     dispatch(toggleFollowingProgress(true));
//   userAPI.profile(userId).then((data) => {
//       dispatch(setUserProfile(data));
    
//     dispatch(toggleFollowingProgress(false, userId));
//  }) };}





export default usersReducer;
