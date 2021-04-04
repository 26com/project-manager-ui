import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import login from '../../store/entities/Login/thunk';
// import GoogleSigninButton from '../../shared/GoogleSigninButton';
import { gapiInit, googleSignIn, googleSignOut } from '../../utils/googleSignin';

export default function Login(){

    const dispatch = useDispatch();

    const [inputEmailValue, setInputEmailValue] = useState();
    const [inputPasswordValue, setInputPasswordValue] = useState();

    async function handleSignInButtonClick(){
        const email = await googleSignIn();
        console.log(email);
    };

    useEffect(() => {
        gapiInit();
    }, []);

    return(
        
        <div className="login-form-container">

            <input type="text" 
                className="login-form-email-input"
                placeholder="Email..." 
                onChange={(e) => setInputEmailValue(e.target.value)}
            />

            <input type="password" 
                className="login-form-password-input"
                placeholder="Password..." 
                onChange={(e) => setInputPasswordValue(e.target.value)}
            />

            <button className="login-form-button"
                onClick={() => dispatch(login({
                    email: inputEmailValue,
                    password: inputPasswordValue
                }))}
            >
            Login
            </button>

            <div className="g-signin2" onClick={handleSignInButtonClick}></div>
            
            {/* <button className="logout-form-button"
                onClick={() => googleSignOut()}
            >
            GoogleSignOut
            </button> */}

        </div>
    )
}


