import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from '../firebase/firebaseConfig';
import AuthContext from './../auth/AuthContext';
import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button';

const LoginPageStyles = styled.aside`
    width: 480px;
    margin: 6rem auto 0;
    header{
        text-align: center;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
`

const LoginPage = (props) => {
    const auth = useContext(AuthContext)
    const [email, setEmail]=useState('julie@email.com')
    const [password, setPassword]=useState('543210')
    const [isValid, setIsValid]=useState(false)
    console.log('render')
    console.log(auth)

    const handleClick = (e) =>{
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            // email and password input
            // console.log(userCredential.user.email)
            // console.log(userCredential.user.uid)
            // console.log(userCredential.user.displayName)
            // console.log(userCredential.user.emailVerified)
            auth.isUser = true
            setIsValid(true)
        })
        .catch(error=>{
            console.log(error.code)
            console.log(error.message)
        })
    }

    // conditional rendering
    if(isValid){
        <Redirect to="/dashboard"/>
    }else{
        return ( 
            <LoginPageStyles>
                <header>
                    <h2>Login</h2>
                </header>
                <FormInput label="email" type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="password" type="password" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button uiStyle="login" label="login" onClick={handleClick}/>
            </LoginPageStyles>
         );
    }
   
}
 
export default LoginPage;