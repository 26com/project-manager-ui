import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';

import { register, checkToken } from '../../store/entities/RegisterPassword/thunk';
import Header from '../../shared/Header';

import './style.css';

export default function RegisterPassword(){

    const dispatch = useDispatch();

    const { loading, message, userEmail } = useSelector(state => state.registerPassword);

    const [inputNameValue, setInputNameValue] = useState();
    const [inputPasswordValue, setInputPasswordValue] = useState();
    const [inputConfirmPasswordValue, setInputConfirmPasswordValue] = useState();
    const [confirmPassword, setConfirmPassword] = useState(false);

    console.log('rerender');

    const { token } = useParams();

    console.log(userEmail);

    useEffect(() => {
        dispatch(checkToken(token));
    }, []);

    useEffect(() => {

        if(!inputConfirmPasswordValue){
            setConfirmPassword(false);
            return;
        };

        if(inputConfirmPasswordValue !== inputPasswordValue){
            setConfirmPassword(false);
            return;
        };

        if(inputPasswordValue === inputConfirmPasswordValue){
            setConfirmPassword(true);
            return;
        };

    }, [inputConfirmPasswordValue, inputPasswordValue]);

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
                    disabled={true}
                    className="auth-form-email-input"
                    placeholder={userEmail}
                />

                <input type="text" 
                    className="auth-form-name-input"
                    placeholder="Name..." 
                    onChange={(e) => setInputNameValue(e.target.value)}
                />

                <input type="password" 
                    className="auth-form-password-input"
                    placeholder="Password..." 
                    onChange={(e) => setInputPasswordValue(e.target.value)}
                />

                <input type="password" 
                    className="auth-form-password-input"
                    placeholder="Confirm password..." 
                    onChange={(e) => setInputConfirmPasswordValue(e.target.value)}
                />

                    <button className="auth-form-button"
                        disabled={!confirmPassword || !inputNameValue || !userEmail}
                        onClick={() => dispatch(register({
                            email: userEmail,
                            name: inputNameValue,
                            password: inputPasswordValue
                        }))}
                    >
                    Регистрация
                    </button>

            </div>
        </div>
    )
}


