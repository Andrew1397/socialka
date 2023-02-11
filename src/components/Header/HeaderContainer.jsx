import React, { useEffect } from 'react';
import Header from "./Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";

function HeaderContainer() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const login = useSelector(state => state.auth.login);

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          dispatch(setAuthUserData(id, email, login));
        }
      });
  }, [dispatch]);

  return <Header isAuth={isAuth} login={login} />
};

export default HeaderContainer;