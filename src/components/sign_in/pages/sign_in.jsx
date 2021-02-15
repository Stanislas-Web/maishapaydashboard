import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/images/big/auth-bg.jpg';
import imgFomrSignIn from '../../../assets/images/big/3.jpg';
import FormSignIn from '../components/Form.jsx';


const Container = styled.div`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-items: center;
`;

const ContainerForm = styled.div`
    display:flex;
    width: 65%;
    height: 400px;
    background-color: white;
`;

const ImgBackground = styled.img`
    width: 50%;
`;

const SignIn = ()=>{
    return <Container>
                <ContainerForm>
                    <ImgBackground src={imgFomrSignIn} alt=""/>
                    <FormSignIn/>
                </ContainerForm>
            </Container>
}

export default SignIn;
 