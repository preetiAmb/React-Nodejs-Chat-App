import React from 'react';
import Header from '../Header/Header';
import JoinForm from './JoinFrom';
import { Container, Wrapper, Main } from '../Layout/Layout-style';

const Join = () => {
    return (
      <Container>
      <Wrapper>
        <Main>
          <Header />  
          <JoinForm />        
        </Main>
      </Wrapper>
    </Container>
    )
}

export default Join
