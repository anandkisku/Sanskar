import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const SubWrapper = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  align-items: center;
  background-color: ${(props) => props.theme.sideBar};
  box-shadow: ${(props) =>
    props?.subClick === props?.subLabel ? props.theme.sideBoxShadow : null};
`;

const Linkto = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;

const Span = styled.span`
  margin-left: 22px;
`;

const LeftCircleColor = styled.div`
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 100%;
  margin-left: 45px;
  background-color: ${(props) => props.theme.leftIndicator};
`;

const IconSubWrapper = styled.div`
  margin-left: 65px;
`;
const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;

function SubMenu({ menu }) {
  

  const [subClick, setSubClick] = useState(localStorage.getItem("subClicked"));

  const subLinkClick = (id) => {
    localStorage.setItem("subClicked", id);
    setSubClick(id);
  };
  return (
    <SubMenuContainer>
      {menu?.subMenu?.map((submenu, index) => {
        return (
          <Linkto
            to={submenu?.url}
            onClick={() => subLinkClick(submenu?.id)}
          >
            <SubWrapper
              to={submenu?.url}
              subClick={subClick}
              label={menu?.label}
            >
              {subClick === submenu?.id && (
                <LeftCircleColor></LeftCircleColor>
              )}
              <IconSubWrapper> {submenu?.icon}</IconSubWrapper>
              <Span>{submenu?.subLabel}</Span>
            </SubWrapper>
          </Linkto>
        );
      })}
    </SubMenuContainer>
  );
}

export default SubMenu;
