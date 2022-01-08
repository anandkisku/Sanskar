import React from 'react'
import styled from "styled-components";

const Container = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`

function Dashboard() {
    return (
        <Container>
            <h2>Dashboard</h2>   
        </Container>
    )
}

export default Dashboard
