import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsBellFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.navBar};
  display: flex;
  align-items: center;
`;

const LeftWrapper = styled.div`
  width: 20%;
`;

const RightWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  padding-left: ${(props) => props?.left};
  font-size: ${(props) => props?.size};
  font-weight: ${(props) => props?.weight};
  cursor: pointer;
  color: ${(props) => props.theme.navbarFontColor};
`;
const Search = styled.input`
  height: 35px;
  width: 321px;
  color: ${(props) => props.theme.searchFontColor};
  background-color: ${(props) => props.theme.search};
  font-size: 1em;
  padding: 0 10px;
  border: none;
  ::placeholder {
    color: ${(props) => props.theme.searchFontColor};
  }
  border-radius: 10px;
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: 75px;
  margin-right: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AdminWrapper = styled.div`
  width: 95px;
  height: 40px;
  border-radius: 8px;
  top: 50px;
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdminText = styled.div`
  padding-left: ${(props) => props?.left};
  font-size: ${(props) => props?.size};
  font-weight: ${(props) => props?.weight};
  color: ${(props) => props.theme.adminColor};
`;

const MyProvider = ({ className, children }) => (
  <IconContext.Provider value={{ className }}>{children}</IconContext.Provider>
);

const MyProviderStyled = styled(MyProvider)`
  color: ${(props) => props.theme.navbarBell};
`;

function Navbar() {
  const history = useHistory()
  const [admin, setAdmin] = useState(false);
  const [input, setInput] = useState({
    search: "",
  });

  const handleChange = (value, name) => {
    setInput({ ...input, [name]: value });
  };

  const logout = () => {
    localStorage.clear()
    history.push('/signin')
  }

  return (
    <Container>
      <LeftWrapper>
        <Title left="47px" color="white" weight="400" size="24px">
          Sanskar Technology
        </Title>
      </LeftWrapper>

      
    </Container>
  );
}

export default Navbar;
