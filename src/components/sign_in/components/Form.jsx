import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'semantic-ui-react'

const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding:20px;
`;

const InputStyle = styled(Input)`
    width:320px;
    // width:100%;
`;
const ButtonStyle = styled(Button)`
    width:200px;
`;

const H3Style = styled.h3`
    text-align: center;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    margin:20px;
`;





const FormSignIn = () => {
    return <ContainerForm>
        <h1>Sign In</h1>
        <H3Style>Enter your email address and password to access admin panel.</H3Style> <br/>
        
        <form action="">
             <InputStyle placeholder='Username' /> <br/><br/>
             <InputStyle placeholder='Password' type='password' /><br/><br/>
             
        </form><br/> <br/>
        <ButtonStyle onClick={()=> window.location.replace('/dashboard')} secondary>Sign In </ButtonStyle>
        

            </ContainerForm>;
}
 
export default FormSignIn;