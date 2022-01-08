import { createGlobalStyle } from "styled-components";

export const TotalTheme = 1

export const Theme1 = {
  sideBar: "#fff",
  sideBoxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
  mainView:"#e5e5e5",
  navBar:'#1E243D',
  navbarBell:'#C5C7CD',
  navbarFontColor:'#fff',
  search:'rgba(196, 196, 196, 0.5)',
  searchFontColor:'#fff',
  sideIcon:'gray',
  leftIndicator: '#F79F83',
  leftDotIndicator: '#F79F83',
  fontColor: "#000",
  adminColor: 'black',
  color:{
    Link: "#0FC3FC",
    Button: '#1E243D'
  }
};



export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;