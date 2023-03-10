import React, { useEffect } from 'react';
import Header from "./Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUserData, setAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from '../api/api';

function HeaderContainer(props) {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const login = useSelector(state => state.auth.login);

  useEffect(() => {
    dispatch(getAuthUserData());
    //   authAPI.me()
    //   // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //   //   withCredentials: true
    //   // })
    //     .then(data => {
    //       if (data.resultCode === 0) {
    //         let { id, login, email } = data.data;
    //         dispatch(setAuthUserData(id, email, login));
    //       }
    //     });
  }, [dispatch]);

  return <Header isAuth={isAuth} login={login} />
};

export default HeaderContainer;