import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { Navigate, useParams } from "react-router-dom"
import { getUserProfile, setUserProfileThunk } from '../../redux/profile-reducer';
import { profile, profileThunk, toggleIsFetching } from '../../redux/profile-reducer';
import { userAPI } from '../api/api';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
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

    isFetcing: state.usersPage.isFetcing

  }));

  useEffect(() => {
   if (!userId) {
            dispatch(getUserProfile(16371));
        } else {
            dispatch(getUserProfile(userId));
        }
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
    {isFetcing ? <Preloader /> : <Profile profile={profile} />}
    ;
  </>
}
const AuthRedirectComponent = withAuthRedirect(ProfileContainer);


export default AuthRedirectComponent;

// import React, { useEffect } from 'react';
// import Profile from './Profile';
// import { useLocation, useNavigate } from "react-router-dom" // імпортуємо хуки useLocation і useNavigate з react-router-dom
// import { getUserProfile } from '../../redux/profile-reducer'; // імпортуємо екшн-кріейтор для отримання профілю користувача
// import Preloader from '../common/Preloader/Preloader'; // імпортуємо компонент Preloader для відображення завантаження
// import { useDispatch, useSelector } from 'react-redux'; // імпортуємо хуки useDispatch і useSelector з react-redux
// import { withAuthRedirect } from '../hoc/withAuthRedirect'; // імпортуємо вищий компонент withAuthRedirect для перевірки авторизації

// function ProfileContainer(props) {
//   const location = useLocation(); // отримуємо об'єкт location з url
//   const navigate = useNavigate(); // отримуємо функцію navigate для навігації
//   const userId = location.pathname.split('/')[2]; // витягуємо userId з url за допомогою розбиття рядка на масив
//   const profile = useSelector(state => state.profilePage.profile); // отримуємо дані про профіль користувача з redux store за допомогою хука useSelector
//   const isFetching = useSelector(state => state.usersPage.isFetching); // отримуємо статус завантаження даних з redux store за допомогою хука useSelector
//   const dispatch = useDispatch(); // отримуємо функцію dispatch з redux store за допомогою хука useDispatch

//   useEffect(() => {
//    if (!userId) {
//             navigate('/profile/16371'); // якщо userId не вказано, то перенаправляємо на сторінку профілю за замовчуванням за допомогою функції navigate
//         } else {
//             dispatch(getUserProfile(userId)); // якщо userId вказано, то викликаємо екшн-кріейтор getUserProfile з userId як параметром і передаємо його в функцію dispatch
//         }
//   }, [dispatch, userId, navigate]); // оновлюємо ефект при зміні dispatch, userId або navigate

//   return (
//     <>
//       {isFetching ? <Preloader /> : <Profile profile={profile} />} 
//       {/* // якщо isFetching - правда, то рендеримо компонент Preloader, якщо ні - то рендеримо компонент Profile з пропсом profile */}
//     </>
//   );
// }
// const AuthRedirectComponent = withAuthRedirect(ProfileContainer); // обгортаємо компонент ProfileContainer вищим компонентом withAuthRedirect для перевірки авторизації

// export default AuthRedirectComponent; // експортуємо результат обгортання як компонент за замовчуванням