import React from 'react'
import styled from "styled-components";
import Routes from '../../Routes'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;


function MainView() {
    return (
        <Container>

            <Routes/>
            
        </Container>
    )
}

export default MainView
