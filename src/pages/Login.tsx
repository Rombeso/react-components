import React, {useContext, useState} from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context";



const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
        console.log({email, password})
    }

    return (
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" name={'login'} placeholder="Введите логин" onChange={(e) => setEmail(e.target.value)}/>
                <MyInput type="text" name={'password'} placeholder="Введите пароль" onChange={(e) => setPassword(e.target.value)}/>
                <MyButton>Логин</MyButton>
            </form>
        </div>
    );
};

export default Login;