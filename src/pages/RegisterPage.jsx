import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from '../firebase/firebaseConfig';

import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button';

const RegisterPageStyles = styled.aside`
    width: 480px;
    margin: 6rem auto 0;
    header{
        text-align: center;
    }
    h2{
        font-size: 2rem;
        font-weight: 700;
    }
    .create-account{
        margin-top: 1rem;
    }
`

const RegisterPage = (props) => {
    const [username, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [isValid, setIsValid]=useState(false)

    const handleClick = (e) =>{
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to login route
            setIsValid(true)
        })
            .catch((error) => {
            // Catch errors
            console.log(error.code)
            console.log(error.message)
        });
    }
    
    if(isValid){
        return <Redirect to="/login"/>
    }else{
        return ( 
            <RegisterPageStyles>
                <header>
                    <h2>Unlimited Free Trial Sign Up</h2>
                    <p>no credit card required</p>
                </header>
                <FormInput label="name on acount" type="text" onChange={(e)=> setName(e.target.value.trim())}/>
                <FormInput label="valid email address" type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="password (min 6 characters)" type="password" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button uiStyle="signup" onClick={handleClick} className="create-account" label="create a free account"/>
            </RegisterPageStyles>
        );
    }
}
 
export default RegisterPage;