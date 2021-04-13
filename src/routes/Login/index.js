import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import { login, registerGapi } from '../../store/entities/Login/thunk';
import { gapiInit, googleSignIn, googleSignOut } from '../../utils/googleSignin';
import Header from '../../shared/Header';

import "./style.css";

export default function Login(){

    console.log('render');

    const dispatch = useDispatch();

    const { loading, message } = useSelector(state => state.login);

    const [inputEmailValue, setInputEmailValue] = useState();
    const [inputPasswordValue, setInputPasswordValue] = useState();
    
    async function handleGoogleSignInButtonClick(){

        const { email, name } = await googleSignIn();
        console.log(email, name);

        dispatch(registerGapi({
            email,
            name
        }));
    };

    async function handleSignInButtonClick(){

        dispatch(login({
            email: inputEmailValue,
            password: inputPasswordValue
        }));
    };

    useEffect(() => {
        gapiInit();
    }, []);


    return(

        
        <div className="auth-wrap">

            <Header />
            
            {localStorage.access_token && !loading &&
                <Redirect to="/" />    
            }
        
            <div className="auth-form-container">

                <span className='auth-title'>
                    ВОЙТИ В АККАУНТ
                </span>

                <span className="auth-message">
                    {message}
                </span>

                <input type="text" 
                    className="auth-form-email-input"
                    placeholder="Email..." 
                    onChange={(e) => setInputEmailValue(e.target.value)}
                />

                <input type="password" 
                    className="auth-form-password-input"
                    placeholder="Password..." 
                    onChange={(e) => setInputPasswordValue(e.target.value)}
                />

                <button className="auth-form-button"
                    disabled={loading || !inputEmailValue || !inputPasswordValue}
                    onClick={handleSignInButtonClick}
                >
                Login
                </button>

                <div className="g-signin2" onClick={handleGoogleSignInButtonClick}></div>

            </div>
        </div>
    )
}


