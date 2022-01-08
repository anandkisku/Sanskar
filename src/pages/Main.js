import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";
import MainView from "../components/Mainview/MainView";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
`;

const LeftSide = styled.div`
  width: 18%;
  height: 100%;
  background-color: ${(props) => props.theme.sideBar};
`;

const RightSide = styled.div`
  width: 82%;
  height: 100%;
  background-color: ${(props) => props.theme.mainView};
`;

function Main() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <LeftSide>
          <Sidebar />
        </LeftSide>

        <RightSide>
          <MainView />
        </RightSide>
      </Wrapper>
    </Container>
  );
}

export default Main;
