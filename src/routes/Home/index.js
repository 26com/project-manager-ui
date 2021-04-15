import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';

import { checkToken } from '../../store/entities/Home/thunk';
import Header from '../../shared/Header';

import './style.css';

export default function RegisterPassword(){

    const dispatch = useDispatch();

    // const { loading, message, userEmail } = useSelector(state => state.registerPassword);

    // const [inputNameValue, setInputNameValue] = useState();


    const { token } = useParams();

    useEffect(() => {
        if(token){
            dispatch(checkToken(token));
        }
    }, []);

    

    return(
        
        <div className="home-wrap">

            <Header />

        </div>
    )
}


