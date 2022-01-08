import React from 'react'
import styled from "styled-components";

const Container = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`

function Welcome() {
    return (
        <Container>
            <h2>Welcome</h2>   
        </Container>
    )
}

export default Welcome
