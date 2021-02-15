import React from 'react';
import styled from 'styled-components';
import img from '../../assets/images/big/auth-bg.jpg';


const Container = styled.div`
    background-image: url(${img});
    height: 100vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items: center;
`;

const ContainerForm = styled.div`
    display:flex;
    width: 60%;
    height: 500px;
    background-color: white;
`;
const SignIn = ()=>{
    return <Container>
                <ContainerForm>

                </ContainerForm>
            </Container>
}

export default SignIn;
 