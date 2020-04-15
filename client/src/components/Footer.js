import React from 'react';
import styled from 'styled-components'
import { Loading_logo } from '../images/Icon';


const Wrapper=styled.div`
    position:fixed;
    bottom:0px;
    width:100%;
    padding:10px;
    color:white;
    background-color:${props=> props.theme.wrapperBgColor};
    justify-content: center;
    align-items: center;
    display: flex;
`;
function Footer(){
    return(
        <Wrapper><Loading_logo/></Wrapper>
    );
}
export default Footer;