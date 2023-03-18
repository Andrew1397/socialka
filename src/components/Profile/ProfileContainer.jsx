import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { Navigate, useParams } from "react-router-dom"
import { getStatus, getUserProfile, setUserProfileThunk } from '../../redux/profile-reducer';
import { profile, profileThunk, toggleIsFetching } from '../../redux/profile-reducer';
import { userAPI } from '../api/api';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
// import { setUserProfile } from '../../redux/profile-reducer';


// // class ProfileContainer extends React.Component {

// //     componentDidMount() {
// //         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
// //             .then(response => {

// //                 this.props.setUserProfile(response.data)
// //             })
// //     }

// //     render() {
// //         return (
// //             <Profile {...this.props} profile={this.props.profile} />
// //         )
// //     }
// // }

// // let mapStateToProps = (state) => {
// //     return {
// //         profile: state.profilePage.profile
// //     }
// // }
// // export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)



// робить
// обов'язково isLoading що б спочатку отримати дані а потім відмалювати сторінку
function ProfileContainer(props) {
  // const [profile, setUserProfile] = useState({});
  // const [isFetching, toggleIsFetching] = useState(true)
  let { userId } = useParams();
  const profile = useSelector(state => state.profilePage.profile);
  const dispatch = useDispatch();

  const {isFetcing } = useSelector(state => ({

    isFetcing: state.usersPage.isFetcing,
    status: state.profilePage.status

  }));

  useEffect(() => {
    
   if (!userId) {
            dispatch(getUserProfile(16371));
        } else {
            dispatch(getUserProfile(userId));
        }
    dispatch(getStatus(userId))
        debugger
    // dispatch(profile(userId)) 
    // userAPI.profile(userId).then((data) => {
    // userAPI.getProfile(userId).then((data) => {
    // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then((response) => {
    //     //     debugger
    //     setUserProfile(data);
    //     toggleIsFetching(false);
    //   });
    // toggleIsFetching(true);

    // dispatch(profile(userId))
    // userAPI.profile(userId).then((data) => {
    //   setUserProfile(data);
    //   toggleIsFetching(false);
    // });
  }, [dispatch, userId]);

  // if (isFetching) {
  //   <div><Preloader /></div>
  // }


  // let AuthRedirectComponent = (props) => {
  //   if (!props.isAuth) return <Navigate to="/login" />
  //   return <ProfileContainer {...props}/>
  // }

  // { isFetcing ? <Preloader /> : null }
  
  return <>
    {isFetcing ? <Preloader /> : <Profile profile={profile} status={props.status}/>}
    ;
  </>
}
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);


// export default AuthRedirectComponent;
export default ProfileContainer;

// export default compose(withAuthRedirect)(ProfileContainer)

// import React, { useEffect } from 'react';
// import Profile from './Profile';
// import { useLocation, useNavigate } from "react-router-dom" 
// import { getUserProfile } from '../../redux/profile-reducer'; 
// import Preloader from '../common/Preloader/Preloader'; 
// import { useDispatch, useSelector } from 'react-redux'; 
// import { withAuthRedirect } from '../hoc/withAuthRedirect'; 

// function ProfileContainer(props) {
//   const location = useLocation(); // отримуємо об'єкт location з url
//   const navigate = useNavigate(); // отримуємо функцію navigate для навігації
//   const userId = location.pathname.split('/')[2]; // витягуємо userId з url за допомогою розбиття рядка на масив
//   const profile = useSelector(state => state.profilePage.profile); 
//   const isFetching = useSelector(state => state.usersPage.isFetching); 
//   const dispatch = useDispatch(); 

//   useEffect(() => {
//    if (!userId) {
//             navigate('/profile/16371');
//         } else {
//             dispatch(getUserProfile(userId)); 
//         }
//   }, [dispatch, userId, navigate]); // оновлюємо ефект при зміні dispatch, userId або navigate

//   return (
//     <>
//       {isFetching ? <Preloader /> : <Profile profile={profile} />} 
//       
//     </>
//   );
// }
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer); 

// export default AuthRedirectComponent; 