import React, {useContext, useState} from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context";
import useInput from "../hooks/useInput";



const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const email = useInput('')
    const password = useInput('')

    const logIn = () => {
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
        console.log({email: email.value, password: password.value})
    }

    return (
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={logIn}>
                <MyInput {...email} type="text" name={'login'} placeholder="Введите логин" />
                <MyInput {...password} type="text" name={'password'} placeholder="Введите пароль" />
                <MyButton>Логин</MyButton>
            </form>
        </div>
    );
};

export default Login;