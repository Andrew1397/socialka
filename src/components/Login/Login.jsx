import React from "react";
import s from "./Login.module.css"

const Login = (props) => {
    return (
        <div className={s.login}>
            <div className={s.avatar}>
                <img src="" alt="avatarLogin" />
            </div>
            <h2>Login</h2>
            <form className={s.login_form}>
                <div className={s.textbox}>
                    <input type="email" placeholder="Username" />
                    <span className={s.material_symbols_outlined}></span>
                </div>
                <div className={s.textbox}>
                    <input type="password" placeholder="Password" />
                    <span className={s.material_symbols_outlined}></span>
                </div>
            </form>
        </div>
    )
}

export default Login;