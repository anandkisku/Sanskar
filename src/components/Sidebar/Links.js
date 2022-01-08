import styled from "styled-components";
import { IconContext } from 'react-icons';
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {GiGreekSphinx} from 'react-icons/gi'



const MyProvider = ({className, children}) => <IconContext.Provider value={{className}}>{children}</IconContext.Provider>;

const MyProviderStyled = styled(MyProvider)`color: ${(props) => props.theme.sideIcon};`


export const link = [

    {id: "welcome", label:'Welcome', icon:<MyProviderStyled><GiGreekSphinx/></MyProviderStyled>, url:'/welcome'},
    {id:"dynamictable", label:'Dynamic Table', icon:<MyProviderStyled><HiOutlineDocumentReport/></MyProviderStyled>, url:'/user-input'},
  
]