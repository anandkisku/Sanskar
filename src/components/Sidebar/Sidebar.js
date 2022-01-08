import React, { useState } from "react";
import SubMenu from "./SubMenu";
import styled from "styled-components";
import { link } from "./Links";
import { Link } from "react-router-dom";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { useHistory } from "react-router-dom";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuContainer = styled.div`
  height: calc(100vh - 150px - 60px - 7px);
  margin-top: 0px;
  margin-top: 40px;
`;

const BottomContainer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.sideBar};
  box-shadow: ${(props) =>
    props?.click === props?.id ? props.theme.sideBoxShadow : null};
`;

const Linkto = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const Span = styled.span`
  color: black;
  text-decoration: none;
  margin-left: 22px;
`;

const LeftColor = styled.div`
  width: 10px;
  height: 40px;
  position: absolute;
  background-color: ${(props) => props.theme.leftIndicator};
`;

const IconWrapper = styled.div`
  margin-left: 26px;
`;

const LinkContainer = styled.div`
  margin-left: 22px;
`;

const LeftDivision = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

const RightDivision = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

function Sidebar() {
  const history = useHistory();
  const [click, setClick] = useState(localStorage.getItem("clicked"));

  const linkClick = (id) => {
    localStorage.setItem("clicked", id);
    setClick(id);

    if (localStorage.getItem("subClicked")) {
      const menu = localStorage.getItem("clicked").toLowerCase();
      const subMenu = localStorage.getItem("subClicked").toLowerCase();
      history.push(`/${menu}/${subMenu}`);
    }
  };

  const Menu = ({ menu }) => {
    return (
      <>
        <Wrapper click={click} id={menu?.id}>
          <LeftDivision>
            {click === menu?.id && <LeftColor></LeftColor>}
            <IconWrapper> {menu?.icon}</IconWrapper>

            <LinkContainer>{menu?.label}</LinkContainer>
          </LeftDivision>

  

          {menu?.subMenu && (
            <RightDivision>
              {click === menu?.id ? <BiCaretDown /> : <BiCaretUp />}
            </RightDivision>
          )}
        </Wrapper>

        {/* subMenu */}

        {click === menu?.id && <SubMenu menu={menu} />}
      </>
    );
  };

  return (
    <Container>
      
      <MenuContainer>
        {link?.map((menu, index) => {
          return (
            <div key={index}>
              {menu?.url ? (
                <Linkto
                  to={menu?.url}
                  key={index}
                  onClick={() => linkClick(menu?.id)}
                >
                  <Menu menu={menu} />
                </Linkto>
              ) : (
                <Span key={index} onClick={() => linkClick(menu?.id)}>
                  <Menu menu={menu} />
                </Span>
              )}
            </div>
          );
        })}
      </MenuContainer>

    </Container>
  );
}

export default Sidebar;
