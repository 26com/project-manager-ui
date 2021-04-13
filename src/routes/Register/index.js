import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { register, registerGapi } from '../../store/entities/Register/thunk';
import { gapiInit, googleSignIn, googleSignOut } from '../../utils/googleSignin';
import Header from '../../shared/Header';

import './style.css';

export default function Register(){

    const dispatch = useDispatch();

    const { loading, message } = useSelector(state => state.register);

    const [inputEmailValue, setInputEmailValue] = useState();

    console.log('rerender');

    async function handleGoogleSignInButtonClick(){
        const { email, name } = await googleSignIn();
        console.log(email, name);

        dispatch(registerGapi({
            email,
            name
        }));
    };

    useEffect(() => {
        gapiInit();
    }, []);

    return(
        
        <div className="auth-wrap">

            {localStorage.access_token && !loading &&
                <Redirect to="/" />    
            }

            <Header />

            <div className="auth-form-container">

                <span className='auth-title'>
                    РЕГИСТРАЦИЯ
                </span>
                <span className="auth-message">
                    {message}
                </span>

                <input type="text" 
                    className="auth-form-email-input"
                    placeholder="Email..." 
                    onChange={(e) => setInputEmailValue(e.target.value)}
                />

                <button className="auth-form-button"
                    disabled={!inputEmailValue || loading}
                    onClick={() => dispatch(register({
                        email: inputEmailValue
                    }))}
                >
                Отправить
                </button>

                <div className="g-signin2 auth-form-gbutton" onClick={handleGoogleSignInButtonClick}></div>

            </div>
        </div>
    )
}


